import ee from "../../json/ee";

interface EEIconProps {
	eeName: string;
	number: number;
}

const EEIcon = ({ eeName, number }: EEIconProps) => {
	return <img src={ee.getImage(eeName, number)}></img>;
};

export default EEIcon;
