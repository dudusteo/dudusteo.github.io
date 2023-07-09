import * as React from "react";

import { Popper } from "@mui/base";
import useAutocomplete from "@mui/base/useAutocomplete";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { Interpolation, Theme } from "@emotion/react";

interface Option {
	label: string;
	value: string | number;
}

interface AutocompleteProps {
	options: Option[];
	value: Option;
	onChange: (value: Option) => void;
	inputCss?: Interpolation<Theme>;
	listboxCss?: Interpolation<Theme>;
}

const Autocomplete = React.forwardRef(
	(
		{
			options = [],
			value = null,
			onChange,
			inputCss,
			listboxCss,
		}: AutocompleteProps,
		ref: React.ForwardedRef<HTMLDivElement>
	) => {
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
			isOptionEqualToValue: (option, value) =>
				option.value === value.value,
		});

		const rootRef = useForkRef(ref, setAnchorEl);

		return (
			<>
				<div
					className="autocomplete"
					css={inputCss}
					{...getRootProps()}
					ref={rootRef}
				>
					<input {...getInputProps()} />
				</div>
				{anchorEl && (
					<Popper
						open={popupOpen}
						anchorEl={anchorEl}
						placement="bottom-start"
						style={{ zIndex: 10 }}
					>
						{groupedOptions.length > 0 && (
							<ul css={listboxCss} {...getListboxProps()}>
								{groupedOptions.map((option, index) => (
									<li {...getOptionProps({ option, index })}>
										{option.label}
									</li>
								))}
							</ul>
						)}
					</Popper>
				)}
			</>
		);
	}
);

export default Autocomplete;
