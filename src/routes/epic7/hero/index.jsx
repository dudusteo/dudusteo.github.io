import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";
import ArtifactSlot from "../../../core/artifact-slot";
import { useNavigate, useSearchParams } from "react-router-dom";
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

const URLifyBuild = ({ hero, artifact, items }) => {
	let URLItems = [];
	let build = {};

	if ("name" in hero) {
		build = { ...build, hero: hero.name };
	}

	if ("name" in artifact) {
		build = { ...build, artifact: artifact.name };
	}

	if ("enhance" in artifact) {
		build = { ...build, artifactEnhance: artifact.enhance };
	}

	items.forEach((item) => {
		URLItems.push(EncodeItem(item));
	});

	return {
		...build,
		item: [...URLItems],
	};
};

const parseURLifiedBuild = (searchParams) => {
	let URLItems = [];
	let build = {};

	if (searchParams.get("hero")) {
		build = { ...build, hero: { name: searchParams.get("hero") } };
	}

	if (searchParams.get("artifact")) {
		build = {
			...build,
			artifact: { ...build.artifact, name: searchParams.get("artifact") },
		};
	}

	if (searchParams.get("artifactEnhance")) {
		build = {
			...build,
			artifact: {
				...build.artifact,
				enhance: searchParams.get("artifactEnhance"),
			},
		};
	}

	searchParams.getAll("item").forEach((item) => {
		URLItems.push(DecodeItem(item));
	});

	return {
		...build,
		items: URLItems,
	};
};

const baseBuild = {
	hero: { name: "Abigail" },
	artifact: { name: "A Little Queen's Huge Crown", enhance: 0 },
	items: [{}, {}, {}],
};

const Hero = () => {
	const [build, setBuild] = React.useState(baseBuild);
	const [searchParams, setSearchParams] = useSearchParams();

	React.useEffect(() => {
		const params = {};
		const parsedParams = parseURLifiedBuild(searchParams);

		for (let [key, value] of Object.entries(baseBuild)) {
			params[key] = parsedParams[key] ? parsedParams[key] : value;
		}
		setBuild(params);
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
			updatedParams.set("artifact", newArtifact.name);
			updatedParams.set("artifactEnhance", newArtifact.enhance);
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
				{build.items.map((item, index) => (
					<ItemSlot
						key={index}
						item={item}
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
