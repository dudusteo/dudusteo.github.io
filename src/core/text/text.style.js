import { css } from "@emotion/react/macro";

const style = {
  text: (type) => (theme) =>
    css`
      color: ${type === "title" ? theme.text.white : theme.text.white};
      font-size: ${type === "title"
        ? theme.text.size.large
        : theme.text.size.small};
    `,
};

export default style;
