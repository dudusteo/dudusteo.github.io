import { css } from "@emotion/react/macro";

const style = {
  dropdown: (input) => (theme) =>
    css`
      color: ${theme.text.gray};
      border-radius: 5px;

      //border: 2px solid ${theme.border.secondary};
    `,
  color: (activeColor) => (theme) =>
    css`
      color: ${theme.rarity[activeColor]};
    `,
};

export default style;
