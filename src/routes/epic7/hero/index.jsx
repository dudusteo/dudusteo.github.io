import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";
import ArtifactSlot from "../../../core/artifact-slot";
import { useSearchParams } from "react-router-dom";
import heroes from "../../../json/heroes";
import HeroIcon from "../../../core/hero-icon";
import StatTable from "../../../core/stat-table";
import Dropdown from "../../../core/dropdown";

const EncodeItem = (item) => {
	return JSON.stringify(item);
};

const DecodeItem = (encodedItem) => {
	return JSON.parse(encodedItem);
};

const baseBuild = {
	hero: { name: "Abigail" },
	artifact: {},
	items: { item0: {}, item1: {}, item2: {}, item3: {}, item4: {}, item5: {} },
};

const parseURLifiedBuild = (searchParams) => {
	let build = baseBuild;

	if (searchParams.get("hero")) {
		build.hero = { name: searchParams.get("hero") };
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
	const [hero, setHero] = React.useState(baseBuild.hero);
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

		setHero((prevHero) =>
			JSON.stringify(prevHero) === JSON.stringify(parsedURLBuild.hero)
				? prevHero
				: parsedURLBuild.hero
		);

		setItems((prevItems) => ({ ...prevItems, ...parsedURLBuild.items }));
	}, [searchParams]);

	const handleHero = (newHero) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("hero", newHero.name);
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
			<StatTable hero={hero} artifact={artifact} items={items} />
			<div css={style.hero}>
				<HeroIcon hero={hero} />
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
					setArtifact={(newArtifact) => handleArtifact(newArtifact)}
				/>
			</div>
			<div css={style.characters}>
				<Dropdown
					options={Object.keys(heroes.data)}
					value={hero.name}
					setValue={(newHeroName) =>
						handleHero({ name: newHeroName })
					}
				></Dropdown>
			</div>
		</div>
	);
};

export default Hero;
