import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./itemSlot.style";
import Item from "../item";
import ItemIcon from "../item-icon";
import { ClickAwayListener, Popper } from "@mui/base";

const ItemSlot = ({ item, setItem }) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const removeItem = (event) => {
		setAnchorEl(null);
		setItem({});
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popper" : undefined;

	return (
		<ClickAwayListener onClickAway={() => setAnchorEl(null)}>
			<div className="itemSlot">
				<button
					aria-describedby={id}
					type="button"
					css={style.background("empty")}
					onClick={handleClick}
				>
					{"rank" in item && <ItemIcon item={item}></ItemIcon>}
				</button>
				{open ? (
					<Popper
						id={id}
						open={open}
						anchorEl={anchorEl}
						placement="right-start"
					>
						<Item
							item={item}
							setItem={(newItem) => setItem(newItem)}
							removeItem={removeItem}
						></Item>
					</Popper>
				) : null}
			</div>
		</ClickAwayListener>
	);
};

export default ItemSlot;
