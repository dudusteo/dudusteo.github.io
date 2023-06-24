import * as React from "react";

import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";
import ArtifactSlot from "../../../core/artifact-slot";
import { useSearchParams } from "react-router-dom";
import heroes from "../../../json/heroes";
import HeroIcon from "../../../core/hero-icon";
import StatTable from "../../../core/stat-table";
import ImprintSlot from "../../../core/imprint-slot";
import ExclusiveEquipmentSlot from "../../../core/exclusive-equipment-slot";
import Autocomplete from "../../../core/autocomplete";

const EncodeItem = (item) => {
	return JSON.stringify(item);
};

const DecodeItem = (encodedItem) => {
	return JSON.parse(encodedItem);
};

const baseBuild = {
	hero: { name: "Abigail", grade: null, ee: null },
	artifact: {},
	items: { item0: {}, item1: {}, item2: {}, item3: {}, item4: {}, item5: {} },
};

const parseURLifiedBuild = (searchParams) => {
	const build = baseBuild;

	if (searchParams.get("hero")) {
		build.hero = {
			...build.hero,
			name: searchParams.get("hero"),
		};
	}

	if (searchParams.get("heroGrade")) {
		build.hero = {
			...build.hero,
			grade: searchParams.get("heroGrade"),
		};
	}

	if (searchParams.get("ee")) {
		build.hero = {
			...build.hero,
			ee: searchParams.get("ee"),
		};
	}

	if (searchParams.get("artifact")) {
		build.artifact = DecodeItem(searchParams.get("artifact"));
	}

	for (let index = 0; index < 6; index++) {
		if (searchParams.get("item" + index)) {
			build.items["item" + index] = DecodeItem(
				searchParams.get("item" + index)
			);
		}
	}

	return {
		...build,
	};
};

const Hero = () => {
	const [heroName, setHeroName] = React.useState(baseBuild.hero.name);
	const [heroGrade, setHeroGrade] = React.useState("");
	const [heroEE, setHeroEE] = React.useState("");
	const [artifact, setArtifact] = React.useState(baseBuild.artifact);
	const [items, setItems] = React.useState(baseBuild.items);

	const [searchParams, setSearchParams] = useSearchParams();

	React.useEffect(() => {
		const parsedURLBuild = parseURLifiedBuild(searchParams);

		setArtifact((prevArtifact) =>
			JSON.stringify(prevArtifact) ===
			JSON.stringify(parsedURLBuild.artifact)
				? prevArtifact
				: parsedURLBuild.artifact
		);

		setHeroName(parsedURLBuild.hero.name);
		setHeroGrade(parsedURLBuild.hero.grade || "");
		setHeroEE(parsedURLBuild.hero.ee || "");

		setItems((prevItems) => ({ ...prevItems, ...parsedURLBuild.items }));
	}, [searchParams]);

	const handleHeroName = (newHeroName) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("hero", newHeroName.label);
			return updatedParams.toString();
		});
	};

	const handleHeroGrade = (newHeroGrade) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("heroGrade", newHeroGrade);
			return updatedParams.toString();
		});
	};

	const handleHeroEE = (newEE) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("ee", newEE);
			return updatedParams.toString();
		});
	};

	const handleItem = (newItem, index) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);

			updatedParams.set("item" + index, EncodeItem(newItem));

			return updatedParams.toString();
		});
	};

	const handleArtifact = (newArtifact) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("artifact", EncodeItem(newArtifact));
			return updatedParams.toString();
		});
	};

	return (
		<div css={style.background}>
			<div css={style.build}>
				<div css={[style.stats]}>
					<div style={{ color: "#ffffff" }}>
						<Autocomplete
							options={heroes.getHeroOptions()}
							value={heroes
								.getHeroOptions()
								.find((option) => option.label === heroName)}
							setValue={handleHeroName}
						/>
					</div>
					<ExclusiveEquipmentSlot
						heroName={heroName}
						heroEE={heroEE}
						setEE={handleHeroEE}
					/>

					<ImprintSlot
						heroName={heroName}
						heroGrade={heroGrade}
						setGrade={handleHeroGrade}
					/>
					<StatTable
						heroName={heroName}
						heroGrade={heroGrade}
						heroEE={heroEE}
						artifact={artifact}
						items={items}
					/>
				</div>

				<div css={style.hero}>
					<HeroIcon heroName={heroName} />
				</div>

				<div css={style.items}>
					{Object.keys(items).map((key, index) => (
						<ItemSlot
							key={index}
							item={items[key]}
							setItem={(item) => handleItem(item, index)}
						/>
					))}
					<ArtifactSlot
						artifact={artifact}
						setArtifact={(newArtifact) =>
							handleArtifact(newArtifact)
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
