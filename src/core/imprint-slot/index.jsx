import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./imprintSlot.style";

import heroes from "../../json/heroes";
import Autocomplete from "../autocomplete";

const ImprintSlot = ({ hero, setHero }) => {
	const options = heroes.getImprintOptions(hero.name);

	return (
		<div css={style.imprintSlot}>
			<Autocomplete
				options={options}
				value={options.find((option) => option.grade === hero.grade)}
				setValue={(value) =>
					setHero({ name: hero.name, grade: value.grade })
				}
			/>
		</div>
	);
};

export default ImprintSlot;
