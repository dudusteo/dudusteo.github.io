import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";
import ArtifactSlot from "../../../core/artifact-slot";
import { useSearchParams } from "react-router-dom";
import heroes from "../../../json/heroes";
import HeroIcon from "../../../core/hero-icon";

const EncodeItem = (item) => {
	return JSON.stringify(item);
};

const DecodeItem = (encodedItem) => {
	return JSON.parse(encodedItem);
};

const URLifyBuild = ({ hero, artifact, items }) => {
	let URLItems = [];

	items.forEach((item) => {
		URLItems.push(EncodeItem(item));
	});

	return {
		hero: hero.name,
		artifact: [artifact.name, artifact.enhance],
		item: [...URLItems],
	};
};

const parseURLifiedBuild = ({ searchParams }) => {
	let URLItems = [];

	searchParams.getAll("item").forEach((item) => {
		URLItems.push(DecodeItem(item));
	});

	return {
		hero: { name: searchParams.get("hero") },
		artifact: {
			name: searchParams.getAll("artifact")[0],
			enhance: searchParams.getAll("artifact")[1],
		},
		items: URLItems,
	};
};

const Hero = () => {
	const [items, setItems] = React.useState([{}, {}, {}, {}, {}, {}]);
	const [artifact, setArtifact] = React.useState({
		name: "Golden Rose",
		enhance: 30,
	});

	const [hero, setHero] = React.useState({ name: "Abigail" });
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
			<div css={style.hero}>
				<HeroIcon hero={hero} />
			</div>

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
