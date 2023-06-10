import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";

const Hero = () => {
	const [items, setItems] = React.useState([{}, {}, {}, {}, {}, {}]);

	return (
		<div css={style.hero}>
			{items.map((item, index) => (
				<ItemSlot
					key={index}
					item={item}
					setItem={(setItem) =>
						setItems((prevItems) => {
							const newItems = [...prevItems];

							newItems[index] =
								setItem instanceof Function
									? setItem(prevItems[index])
									: setItem;

							return newItems;
						})
					}
				></ItemSlot>
			))}
		</div>
	);
};

export default Hero;