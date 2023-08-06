import { UseSwitchParameters, useSwitch } from "@mui/base";
import style from "./toggle.style";

const Toggle = (props: UseSwitchParameters) => {
	const { getInputProps, checked } = useSwitch(props);

	return (
		<span css={style.toggle}>
			<span css={style.track}>
				<span css={[style.thumb, checked && style.checked]} />
			</span>

			<input
				css={style.input}
				{...getInputProps()}
				aria-label="Demo switch"
			/>
		</span>
	);
};

export default Toggle;
