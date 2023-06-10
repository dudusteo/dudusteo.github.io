import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./itemData.style";
import align from "../../styles/align.style";
import Dropdown from "../dropdown";
import Button from "../button";
import {
	gearEnhanceLevelOptions,
	gearLevelOptions,
	rarityOptions,
} from "../../routes/epic7/gear-score-calculator/dropdown";
import { getBaseItem } from "../../routes/epic7/gear-score-calculator/utils";
import { statOptions } from "../../json/stats";
import Divider from "../divider";
import Input from "../input";

const Item = ({ item, setItem, portal = false }) => {
	React.useEffect(() => {
		if (Object.keys(item).length === 0) {
			setItem(getBaseItem(85, "Epic"));
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

	const setMainStat = (newMainStat) => {
		setItem((prevState) => ({
			...prevState,
			main: { ...prevState.main, type: newMainStat },
		}));
	};

	const setMainStatValue = (newMainStatValue) => {
		setItem((prevState) => ({
			...prevState,
			main: { ...prevState.main, value: newMainStatValue },
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

	const hardReset = (newRank) => {
		setItem(getBaseItem(85, newRank));
	};

	return (
		<div css={[style.background, portal && style.portal]}>
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
								options={rarityOptions}
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
						onClick={() => hardReset(item.rank)}
					>
						{"Reset"}
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
					{/* <img src={getImage(item.main.type)} alt=""></img> */}
					<Dropdown
						options={statOptions}
						value={item.main.type}
						setValue={(x) => setMainStat(x)}
					/>
					<Input
						placeholder="value here"
						value={item.main.value}
						setValue={(x) => setMainStatValue(x)}
					/>
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
								{/* <img src={getImage(substat.type)} alt=""></img> */}
								<Dropdown
									options={statOptions}
									value={substat.type}
									setValue={(x) => console.log(x)}
								/>
								<Input
									placeholder="value here"
									value={substat.value}
									setValue={(x) => console.log(x)}
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
