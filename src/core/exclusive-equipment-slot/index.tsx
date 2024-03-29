import style from "./exclusiveEquipmentSlot.style";
import Autocomplete from "../autocomplete";
import heroes from "../../json/hero";

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
					onChange={(value) => {
						setEE(value.value || null);
					}}
				/>
			)}
		</div>
	);
};

export default ExclusiveEquipmentSlot;
