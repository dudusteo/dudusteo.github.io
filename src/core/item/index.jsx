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

const Item = ({ item, setItem }) => {
	React.useEffect(() => {
		if (Object.keys(item).length === 0) {
			setItem(getBaseItem(85, "Epic"));
		}
		console.log(item);
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
		<div css={[style.item]}>
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
					<div css={style.text("title", "medium")}>
						<span>{"Equipment name"}</span>
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
		</div>
	);
};

export default Item;
