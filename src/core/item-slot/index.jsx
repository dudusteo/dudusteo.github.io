import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./itemSlot.style";
import Item from "../item";
import ItemIcon from "../item-icon";

const ItemSlot = ({ item, setItem }) => {
	const [show, setShow] = React.useState(false);

	return (
		<>
			<button
				css={style.background("empty")}
				onClick={() => {
					setShow((oldShow) => !oldShow);
				}}
			>
				{item?.rank && <ItemIcon item={item}></ItemIcon>}
			</button>
			{show && <Item item={item} setItem={setItem}></Item>}
		</>
	);
};

export default ItemSlot;
