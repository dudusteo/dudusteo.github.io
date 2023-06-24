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
	artifact: null,
	items: {
		item0: null,
		item1: null,
		item2: null,
		item3: null,
		item4: null,
		item5: null,
	},
};

const parseURLifiedBuild = (searchParams) => {
	const build = baseBuild;

	if (searchParams.get("hero")) {
		build.hero = DecodeItem(searchParams.get("hero"));
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
	const [hero, setHero] = React.useState<Hero>(baseBuild.hero);
	const [artifact, setArtifact] = React.useState<Artifact | null>(null);
	const [items, setItems] = React.useState(baseBuild.items);

	const [searchParams, setSearchParams] = useSearchParams();

	React.useEffect(() => {
		const parsedURLBuild = parseURLifiedBuild(searchParams);

		setArtifact((prevArtifact: Artifact) =>
			EncodeItem(prevArtifact) === EncodeItem(parsedURLBuild.artifact)
				? prevArtifact
				: parsedURLBuild.artifact
		);

		setHero((prevHero: Hero) =>
			EncodeItem(prevHero) === EncodeItem(parsedURLBuild.hero)
				? prevHero
				: parsedURLBuild.hero
		);

		setItems((prevItems) => ({ ...prevItems, ...parsedURLBuild.items }));
	}, [searchParams]);

	const handleHeroName = (newHeroName: string) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			const newHero = {
				name: newHeroName,
				grade: null,
				ee: null,
			};
			updatedParams.set("hero", EncodeItem(newHero));
			return updatedParams.toString();
		});
	};

	const handleHeroGrade = (newHeroGrade: string | null) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			const newHero = {
				...hero,
				grade: newHeroGrade,
			};
			updatedParams.set("hero", EncodeItem(newHero));
			return updatedParams.toString();
		});
	};

	const handleHeroEE = (newEE: number | null) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			const newHero = {
				...hero,
				ee: newEE,
			};
			updatedParams.set("hero", EncodeItem(newHero));
			return updatedParams.toString();
		});
	};

	const handleItem = (newItem, index) => {
		setSearchParams((prevSearchParams: URLSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);

			updatedParams.set("item" + index, EncodeItem(newItem));

			return updatedParams.toString();
		});
	};

	const handleArtifact = (newArtifact: Artifact | null) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("artifact", EncodeItem(newArtifact));
			return updatedParams.toString();
		});
	};

	console.log(items.item0);

	return (
		<div css={style.background}>
			<div css={style.build}>
				<div css={[style.stats]}>
					<div style={{ color: "#ffffff" }}>
						<Autocomplete
							options={heroes.getHeroOptions()}
							value={heroes
								.getHeroOptions()
								.find((option) => option.label === hero.name)}
							setValue={(value) => handleHeroName(value.label)}
						/>
					</div>
					<ExclusiveEquipmentSlot
						heroName={hero.name}
						heroEE={hero.ee}
						setEE={handleHeroEE}
					/>

					<ImprintSlot
						heroName={hero.name}
						heroGrade={hero.grade}
						setGrade={handleHeroGrade}
					/>
					<StatTable hero={hero} artifact={artifact} items={items} />
				</div>

				<div css={style.hero}>
					<HeroIcon heroName={hero.name} />
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
						setArtifact={handleArtifact}
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
