import { css } from "@emotion/react/macro";

const style = {
  calculator: (rarity) => (theme) =>
    css`
      margin: auto;
      border: 2px solid ${theme.border.primary};
      border-radius: 15px;
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
  item: (input) => (theme) =>
    css`
      border: 2px solid ${theme.border.primary};
      padding: 1em;
      border-radius: 15px;
      margin: 3em;
    `,
  size: (size) => (theme) =>
    css`
      span,
      input,
      select {
        font-size: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : size === "small"
          ? theme.text.size.small
          : theme.text.size.tiny};
        line-height: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : size === "small"
          ? theme.text.size.small
          : theme.text.size.tiny};
        height: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : size === "small"
          ? theme.text.size.small
          : theme.text.size.tiny};
      }
    `,
  color: (activeColor) => (theme) =>
    css`
      color: ${theme.rarity[activeColor]};
    `,

  text: (type, size) => (theme) =>
    css`
      span,
      input,
      select {
        color: ${type === "title" || type === "substat_head"
          ? theme.text.white
          : theme.text.gray};
        font-size: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : size === "small"
          ? theme.text.size.small
          : theme.text.size.tiny};
        line-height: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : size === "small"
          ? theme.text.size.small
          : theme.text.size.tiny};
        height: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : size === "small"
          ? theme.text.size.small
          : theme.text.size.tiny};
      }
      option {
        font-size: ${theme.text.size.small};
        color: fieldtext;
      }
      img {
        filter: ${type === "title" || type === "substat_head"
          ? "brightness(255)"
          : "none"};
        line-height: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : theme.text.size.small};
        width: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : theme.text.size.small};
        height: ${size === "large"
          ? theme.text.size.large
          : size === "medium"
          ? theme.text.size.medium
          : theme.text.size.small};
      }
    `,
};

export default style;
