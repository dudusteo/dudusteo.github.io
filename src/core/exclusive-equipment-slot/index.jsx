import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./exclusiveEquipmentSlot.style";
import Autocomplete from "../autocomplete";
import heroes from "../../json/heroes";

const ExclusiveEquipmentSlot = ({ hero, setHero }) => {
	const options = heroes.getExclusiveEquipmentOptions(hero.name);

	return (
		<div css={style.exclusiveEquipmentSlot}>
			{options.length > 0 && (
				<Autocomplete
					options={options}
					value={options.find((option) => {
						return option.value === hero.ee;
					})}
					setValue={(value) => {
						if (value) {
							setHero({
								name: hero.name,
								grade: hero.grade,
								ee: value.value,
							});
						}
					}}
				/>
			)}
		</div>
	);
};

export default ExclusiveEquipmentSlot;
