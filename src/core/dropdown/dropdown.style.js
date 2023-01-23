import { css } from "@emotion/react/macro";

const style = {
  dropdown: (input) => (theme) =>
    css`
      &:hover {
        opacity: 0.5;
        cursor: pointer;
      }
    `,
  color: (activeColor) => (theme) =>
    css`
      color: ${theme.rarity[activeColor]};
    `,
};

export default style;
