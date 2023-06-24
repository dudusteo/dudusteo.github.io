import useAutocomplete from "@mui/base/useAutocomplete";

import style from "./autocomplete.style";

export default function Autocomplete({ options = [], value = null, setValue }) {
	const {
		getRootProps,
		getInputProps,
		getListboxProps,
		getOptionProps,
		groupedOptions,
	} = useAutocomplete({
		options,
		value,
		onChange: (event, newValue) => {
			setValue(newValue);
		},
		getOptionLabel: (option) => option.label,
		isOptionEqualToValue: (option, value) => option.value === value.value,
	});

	return (
		<>
			<div css={style.autocomplete} {...getRootProps()}>
				<input {...getInputProps()} />
			</div>
			{groupedOptions.length > 0 && (
				<ul {...getListboxProps()}>
					{groupedOptions.map((option, index) => (
						<li {...getOptionProps({ option, index })}>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</>
	);
}
