import * as React from "react";

import style from "./itemData.style";
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

interface ItemProps {
	item: Item | null;
	setItem: (newItem: Item) => void;
	removeItem: () => void;
}

const Item = React.memo(({ item, setItem, removeItem }: ItemProps) => {
	React.useEffect(() => {
		if (!item) {
			setItem(getBaseItem(90, "Epic"));
		}
	}, []);

	if (!item) {
		return <div>loading ...</div>;
	}

	const updateItem = (newItem) => {
		setItem(newItem);
	};

	return (
		<div css={[style.background]}>
			<div css={[style.item(item.rank.toLowerCase())]}>
				<div>
					<div>
						<div
							css={[
								style.colorFromRarity(item.rank.toLowerCase()),
								style.size("tiny"),
							]}
						>
							<Dropdown
								options={gearRarityOptions}
								value={item.rank}
								setValue={(rank) =>
									updateItem(gear.handleRank(item, rank))
								}
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
				<div css={[style.text("title", "medium")]}>
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
								css={[style.text("else", "small")]}
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
});

export default Item;
