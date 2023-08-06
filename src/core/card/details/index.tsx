import Divider from "../../divider";

interface DetailsProps {
	details: Details;
}

const Details = ({ details }: DetailsProps) => {
	return (
		<div className="manual-details">
			<span>{`#${details.tag}`}</span>
			<Divider />
			<span>{details.tooltip}</span>
		</div>
	);
};

export default Details;
