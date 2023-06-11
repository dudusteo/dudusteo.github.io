import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";
import characters from "../../../img/characters";
import ArtifactSlot from "../../../core/artifact-slot";
import { useSearchParams } from "react-router-dom";

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
		hero: hero.id,
		artifact: [artifact.id, artifact.enhance],
		item: [...URLItems],
	};
};

const parseURLifiedBuild = ({ searchParams }) => {
	let URLItems = [];

	searchParams.getAll("item").forEach((item) => {
		URLItems.push(DecodeItem(item));
	});

	return {
		hero: { id: searchParams.get("hero") },
		artifact: {
			id: searchParams.getAll("artifact")[0],
			enhance: searchParams.getAll("artifact")[1],
		},
		items: URLItems,
	};
};

const Hero = () => {
	const [items, setItems] = React.useState([{}, {}, {}, {}, {}, {}]);
	const [artifact, setArtifact] = React.useState({
		id: "art0181",
		enhance: 30,
	});

	const [hero, setHero] = React.useState({ id: "c2102" });
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
	}, [hero, artifact, items]);

	return (
		<div css={style.background}>
			<div css={style.hero}>
				<img alt="" src={characters[hero.id]} />
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
				<ArtifactSlot artifact={artifact} />
			</div>
		</div>
	);
};

export default Hero;
