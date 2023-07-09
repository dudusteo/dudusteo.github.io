import useAutocomplete from "@mui/base/useAutocomplete";

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
		<div className="autocomplete">
			<div {...getRootProps()} className="autocomplete-input">
				<input {...getInputProps()} />
			</div>
			{groupedOptions.length > 0 && (
				<ul {...getListboxProps()} className="autocomplete-listbox">
					{groupedOptions.map((option, index) => (
						<li {...getOptionProps({ option, index })}>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
