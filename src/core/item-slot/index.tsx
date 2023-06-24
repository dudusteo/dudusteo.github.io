import * as React from "react";

import style from "./itemSlot.style";
import Item from "../item";
import ItemIcon from "../item-icon";
import { ClickAwayListener, Popper } from "@mui/base";

interface ItemSlotProps {
	item: Item | null;
	setItem: (newItem: Item) => void;
}

const ItemSlot = ({ item, setItem }: ItemSlotProps) => {
	const [anchorEl, setAnchorEl] = React.useState<
		(EventTarget & HTMLButtonElement) | null
	>(null);

	const handleClick = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const removeItem = () => {
		setAnchorEl(null);
		setItem(null);
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
					{item && <ItemIcon item={item}></ItemIcon>}
				</button>
				{open ? (
					<Popper
						id={id}
						open={open}
						anchorEl={anchorEl}
						placement="right-start"
						style={{ zIndex: 10 }}
					>
						<Item
							item={item}
							setItem={setItem}
							removeItem={removeItem}
						></Item>
					</Popper>
				) : null}
			</div>
		</ClickAwayListener>
	);
};

export default ItemSlot;
