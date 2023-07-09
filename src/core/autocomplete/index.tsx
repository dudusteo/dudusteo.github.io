import { Popper } from "@mui/base";
import useAutocomplete from "@mui/base/useAutocomplete";
import { unstable_useForkRef as useForkRef } from "@mui/utils";

export default function Autocomplete({
	options = [],
	value = null,
	onChange,
	ref,
}) {
	const {
		getRootProps,
		getInputProps,
		getListboxProps,
		getOptionProps,
		popupOpen,
		anchorEl,
		setAnchorEl,
		groupedOptions,
	} = useAutocomplete({
		options,
		value,
		onChange: (event, newValue) => {
			onChange(newValue);
		},
		getOptionLabel: (option) => option.label,
		isOptionEqualToValue: (option, value) => option.value === value.value,
	});

	const rootRef = useForkRef(ref, setAnchorEl);

	return (
		<div className="autocomplete">
			<div
				className="autocomplete-input"
				{...getRootProps()}
				ref={rootRef}
			>
				<input {...getInputProps()} />
			</div>
			{anchorEl && (
				<Popper open={popupOpen} anchorEl={anchorEl}>
					{groupedOptions.length > 0 && (
						<ul
							className="autocomplete-listbox"
							{...getListboxProps()}
						>
							{groupedOptions.map((option, index) => (
								<li {...getOptionProps({ option, index })}>
									{option.label}
								</li>
							))}
						</ul>
					)}
				</Popper>
			)}
		</div>
	);
}
