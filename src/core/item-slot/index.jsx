import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./itemSlot.style";
import Item from "../item";
import ItemIcon from "../item-icon";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import Portal from "@mui/base/Portal";

const ItemSlot = ({ item, setItem }) => {
	const [open, setOpen] = React.useState(false);

	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<div>
				<button
					css={style.background("empty")}
					onClick={() => {
						setOpen((prevState) => !prevState);
					}}
				>
					{item?.rank && <ItemIcon item={item}></ItemIcon>}
				</button>
				{open ? (
					<Portal>
						<Item
							item={item}
							setItem={setItem}
							portal="true"
						></Item>
					</Portal>
				) : null}
			</div>
		</ClickAwayListener>
	);
};

export default ItemSlot;
