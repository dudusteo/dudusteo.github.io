import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./itemIcon.style";

const ItemIcon = ({ rank }) => {
	return <div css={style.item(rank.toLowerCase())}></div>;
};

export default ItemIcon;
