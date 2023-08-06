import ee from "../../json/ee";
import style from "./eeIcon.style";

interface EEIconProps {
	eeName: string;
	number: number;
}

const EEIcon = ({ eeName, number }: EEIconProps) => {
	return (
		<div css={style.eeIcon}>
			<img css={style.image} src={ee.getImage(eeName, number)} />
			<span css={style.number(number)}></span>
		</div>
	);
};

export default EEIcon;
