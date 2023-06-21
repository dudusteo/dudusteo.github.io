import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./imprintSlot.style";

import heroes from "../../json/heroes";
import Autocomplete from "../autocomplete";

const ImprintSlot = ({ heroName, heroGrade, setGrade }) => {
	const options = heroes.getImprintOptions(heroName);

	return (
		<div css={style.imprintSlot}>
			<Autocomplete
				options={options}
				value={options.find((option) => option.grade === heroGrade)}
				setValue={(value) => {
					setGrade(value.grade || "");
				}}
			/>
		</div>
	);
};

export default ImprintSlot;
