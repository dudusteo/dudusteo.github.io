import { css } from "@emotion/react/macro";

const style = {
  calculator: (rank) => (theme) =>
    css`
      margin: auto;
      border: 2px solid ${theme.border.primary};
      border-radius: 15px;
      background: linear-gradient(
          to bottom,
          #000000ff,
          ${theme.rank[rank] + "20"} 40%,
          ${theme.rank[rank] + "20"} 60%,
          #000000ff 100%
        ),
        linear-gradient(
          to right,
          #000000ff,
          ${theme.rank[rank] + "20"} 40%,
          ${theme.rank[rank] + "20"} 60%,
          #000000ff 100%
        );

      width: fit-content;
      width: 500px;
      height: fit-content;
      height: 700px;
    `,
  topItem: (input) => (theme) =>
    css`
      margin-top: 3em;
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
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : size === "small"
          ? theme.text.size.small + "px"
          : theme.text.size.tiny + "px"};
        line-height: ${size === "large"
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : size === "small"
          ? theme.text.size.small + "px"
          : theme.text.size.tiny + "px"};
        height: ${size === "large"
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : size === "small"
          ? theme.text.size.small + "px"
          : theme.text.size.tiny + "px"};
      }
    `,
  colorFromRarity: (activeColor) => (theme) =>
    css`
      color: ${theme.rank[activeColor]};
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
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : size === "small"
          ? theme.text.size.small + "px"
          : theme.text.size.tiny + "px"};
        line-height: ${size === "large"
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : size === "small"
          ? theme.text.size.small + "px"
          : theme.text.size.tiny + "px"};
        height: ${size === "large"
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : size === "small"
          ? theme.text.size.small + "px"
          : theme.text.size.tiny + "px"};
      }
      option {
        font-size: ${theme.text.size.small + "px"};
        color: fieldtext;
      }
      img {
        filter: ${type === "title" || type === "substat_head"
          ? "brightness(255)"
          : "none"};
        line-height: ${size === "large"
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : theme.text.size.small + "px"};
        width: ${size === "large"
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : theme.text.size.small + "px"};
        height: ${size === "large"
          ? theme.text.size.large + "px"
          : size === "medium"
          ? theme.text.size.medium + "px"
          : theme.text.size.small + "px"};
      }
    `,
};

export default style;
