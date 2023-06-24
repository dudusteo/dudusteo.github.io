import * as React from "react";

import style from "./exclusiveEquipmentSlot.style";
import Autocomplete from "../autocomplete";
import heroes from "../../json/heroes";

const ExclusiveEquipmentSlot = ({ heroName, heroEE, setEE }) => {
	const options = heroes.getExclusiveEquipmentOptions(heroName);

	return (
		<div css={style.exclusiveEquipmentSlot}>
			{options.length > 0 && (
				<Autocomplete
					options={options}
					value={options.find((option) => {
						return option.value === heroEE;
					})}
					setValue={(value) => {
						setEE(value.value || "");
					}}
				/>
			)}
		</div>
	);
};

export default ExclusiveEquipmentSlot;
