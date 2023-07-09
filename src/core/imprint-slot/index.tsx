import style from "./imprintSlot.style";

import heroes from "../../json/hero";
import Autocomplete from "../autocomplete";

const ImprintSlot = ({ heroName, heroGrade, setGrade }) => {
	const options = heroes.getImprintOptions(heroName);

	return (
		<div css={style.imprintSlot}>
			<Autocomplete
				options={options}
				value={options.find((option) => option.grade === heroGrade)}
				onChange={(value) => setGrade(value.grade || null)}
			/>
		</div>
	);
};

export default ImprintSlot;
