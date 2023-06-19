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
	const [build, setBuild] = React.useState(baseBuild);
	const [searchParams, setSearchParams] = useSearchParams();

	React.useEffect(() => {
		setBuild(parseURLifiedBuild(searchParams));
	}, [searchParams]);

	const setHero = (newHero) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("hero", newHero.name);
			return updatedParams.toString();
		});
	};

	const setItem = (newItem, index) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("item" + index, EncodeItem(newItem));
			return updatedParams.toString();
		});
	};

	const setArtifact = (newArtifact) => {
		setSearchParams((prevSearchParams) => {
			const updatedParams = new URLSearchParams(prevSearchParams);
			updatedParams.set("artifact", EncodeItem(newArtifact));
			return updatedParams.toString();
		});
	};

	return (
		<div css={style.background}>
			<StatTable hero={build.hero} artifact={build.artifact} />
			<div css={style.hero}>
				{build.hero.name && <HeroIcon hero={build.hero} />}
			</div>

			<div css={style.items}>
				{Object.keys(build.items).map((key, index) => (
					<ItemSlot
						key={index}
						item={build.items[key]}
						setItem={(item) => setItem(item, index)}
					/>
				))}
				<ArtifactSlot
					artifact={build.artifact}
					setArtifact={(newArtifact) => setArtifact(newArtifact)}
				/>
			</div>
			<div css={style.characters}>
				<Dropdown
					options={Object.keys(heroes.data)}
					value={build.hero.name}
					setValue={(newHeroName) => setHero({ name: newHeroName })}
				></Dropdown>
			</div>
		</div>
	);
};

export default Hero;
