import { css } from "@emotion/react/macro";

const style = {
  calculator: (rarity) => (theme) =>
    css`
      margin: auto;
      border: 2px solid ${theme.border.primary};
      border-radius: 5px;
      background: linear-gradient(
          to bottom,
          #000000ff,
          ${theme.rarity[rarity] + "20"} 40%,
          ${theme.rarity[rarity] + "20"} 60%,
          #000000ff 100%
        ),
        linear-gradient(
          to right,
          #000000ff,
          ${theme.rarity[rarity] + "20"} 40%,
          ${theme.rarity[rarity] + "20"} 60%,
          #000000ff 100%
        );

      width: fit-content;
      width: 500px;
      height: fit-content;
      height: 700px;
    `,
};

export default style;
