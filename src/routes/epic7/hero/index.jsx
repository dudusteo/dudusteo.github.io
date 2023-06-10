import * as React from "react";

/** @jsxImportSource @emotion/react */
import style from "./hero.style";
import ItemSlot from "../../../core/item-slot";
import characters from "../../../img/characters";

const Hero = () => {
	const [items, setItems] = React.useState([{}, {}, {}, {}, {}, {}]);

	React.useEffect(() => {
		console.log(items);
	}, [items]);

	return (
		<div css={style.background}>
			<div css={style.hero}>
				<img alt="" src={characters.c1144} />
			</div>

			<div css={style.items}>
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
					/>
				))}
			</div>
		</div>
	);
};

export default Hero;
