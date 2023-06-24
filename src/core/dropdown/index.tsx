import style from "./dropdown.style";

const Dropdown = (props) => {
	const { options = [], value, setValue } = props;

	return (
		<select
			css={[style.dropdown]}
			value={value}
			onChange={(e) => setValue(e.target.value)}
		>
			{options.map((item, index) => (
				<option
					css={[
						typeof item === "string" &&
							style.color(item.toLowerCase()),
					]}
					key={index}
					value={item}
				>
					{item}
				</option>
			))}
		</select>
	);
};

export default Dropdown;
