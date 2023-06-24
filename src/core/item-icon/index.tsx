import style from "./itemIcon.style";

const ItemIcon = ({ item }) => {
	return (
		<div css={style.item(item.rank.toLowerCase())}>
			<div css={style.text}>{item.level}</div>
			<div css={style.text}>{"+" + item.enhance}</div>
		</div>
	);
};

export default ItemIcon;
