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
	gear,
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
								setValue={(level) =>
									updateItem(
										gear.handleLevel(item, parseInt(level))
									)
								}
							/>
							<span>&nbsp;{"+"}</span>

							<Dropdown
								options={gearEnhanceLevelOptions}
								value={item.enhance}
								setValue={(x) =>
									updateItem(
										gear.handleEnhace(item, parseInt(x))
									)
								}
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
					<img src={gear.getImage(item.main.type)} alt=""></img>
					<Dropdown
						options={gear.options}
						value={item.main.type}
						setValue={(mainType) =>
							updateItem(gear.handleType(item, mainType, -1))
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
									src={gear.getImage(substat.type)}
									alt=""
								></img>
								<Dropdown
									options={gear.options}
									value={substat.type}
									setValue={(substatType) =>
										updateItem(
											gear.handleType(
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
											gear.handleValue(
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
