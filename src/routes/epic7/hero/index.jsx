import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";
import ArtifactSlot from "../../../core/artifact-slot";
import { useSearchParams } from "react-router-dom";
import heroes from "../../../json/heroes";
import HeroIcon from "../../../core/hero-icon";
import StatTable from "../../../core/stat-table";

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

const parseURLifiedBuild = ({ searchParams }) => {
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

const Hero = () => {
	const [items, setItems] = React.useState([{}, {}, {}, {}, {}, {}]);
	const [artifact, setArtifact] = React.useState({});

	const [hero, setHero] = React.useState({});

	const [searchParams, setSearchParams] = useSearchParams();

	React.useEffect(() => {
		const build = parseURLifiedBuild({ searchParams });

		setHero((prevHero) => ({
			...prevHero,
			...build.hero,
		}));
		setArtifact((prevArtifact) => ({
			...prevArtifact,
			...build.artifact,
		}));
		setItems((prevItems) =>
			prevItems.map((prevItem, index) => ({
				...prevItem,
				...build.items[index],
			}))
		);
	}, [searchParams]);

	React.useEffect(() => {
		setSearchParams((prevSearchParams) =>
			URLifyBuild({ hero, artifact, items })
		);
	}, [hero, artifact, items, setSearchParams]);

	return (
		<div css={style.background}>
			<StatTable hero={hero} artifact={artifact} />
			<div css={style.hero}>{hero?.name && <HeroIcon hero={hero} />}</div>

			<div css={style.items}>
				{items.map((item, index) => (
					<ItemSlot
						key={index}
						item={item}
						setItem={(setItem) =>
							setItems((prevItems) => {
								const newItems = [...prevItems];

								newItems[index] =
									setItem instanceof Function
										? setItem(prevItems[index])
										: setItem;

								return newItems;
							})
						}
					/>
				))}
				<ArtifactSlot artifact={artifact} setArtifact={setArtifact} />
			</div>
		</div>
	);
};

export default Hero;
