import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./itemData.style";
import align from "../../styles/align.style";
import Dropdown from "../dropdown";
import Button from "../button";
import Divider from "../divider";
import Input from "../input";
import {
	gearEnhanceLevelOptions,
	gearLevelOptions,
	gearRarityOptions,
	getBaseItem,
	stats,
} from "../../json/gear";

const Item = ({ item, setItem, removeItem }) => {
	React.useEffect(() => {
		if (Object.keys(item).length === 0) {
			setItem((prevItem) => getBaseItem(85, "Epic"));
		}
	}, [item, setItem]);

	if (Object.keys(item).length === 0) {
		return <div>loading ...</div>;
	}

	const setRank = (newRank) => {
		setItem((prevState) => ({
			...prevState,
			rank: newRank,
		}));
	};

	const updateItem = (newItem) => {
		setItem((prevState) => ({
			...prevState,
			...newItem,
		}));
	};

	const setLevel = (newLevel) => {
		setItem((prevState) => ({
			...prevState,
			level: newLevel,
		}));
	};

	const setEnhance = (newEnhance) => {
		setItem((prevState) => ({
			...prevState,
			enhance: newEnhance,
		}));
	};

	return (
		<div css={[style.background]}>
			<div css={[style.item(item.rank.toLowerCase())]}>
				<div css={[align.twoHorizontal, align.lastRight]}>
					<div>
						<div
							css={[
								align.twoHorizontal,
								style.colorFromRarity(item.rank.toLowerCase()),
								style.size("tiny"),
							]}
						>
							<Dropdown
								options={gearRarityOptions}
								value={item.rank}
								setValue={(x) => setRank(x)}
							/>
							<span>{"Item"}&nbsp;</span>
							<Dropdown
								options={gearLevelOptions}
								value={item.level}
								setValue={(x) => setLevel(x)}
							/>
							<span>&nbsp;{"+"}</span>

							<Dropdown
								options={gearEnhanceLevelOptions}
								value={item.enhance}
								setValue={(x) => setEnhance(parseInt(x))}
							/>
						</div>
					</div>
					<Button
						size="tiny"
						color="blue"
						onClick={() => removeItem()}
					>
						{"Remove"}
					</Button>
				</div>
				<Divider />
				<div
					css={[
						align.twoHorizontal,
						align.lastRight,
						style.text("title", "medium"),
					]}
				>
					<img src={stats.getImage(item.main.type)} alt=""></img>
					<Dropdown
						options={stats.options}
						value={item.main.type}
						setValue={(mainType) =>
							updateItem(stats.handleType(item, mainType, -1))
						}
					/>
					<span>{item.main.value}</span>
				</div>
				<Divider />
				<div>
					{item.substats.map((substat, index) => {
						return (
							<div
								css={[
									align.twoHorizontal,
									align.lastRight,
									style.text("else", "small"),
								]}
								key={index}
							>
								<img
									src={stats.getImage(substat.type)}
									alt=""
								></img>
								<Dropdown
									options={stats.options}
									value={substat.type}
									setValue={(substatType) =>
										updateItem(
											stats.handleType(
												item,
												substatType,
												index
											)
										)
									}
								/>
								<Input
									placeholder="value here"
									value={substat.value}
									setValue={(x) =>
										updateItem(
											stats.handleValue(
												item,
												parseFloat(x),
												index
											)
										)
									}
								/>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Item;
