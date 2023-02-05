import { css } from "@emotion/react/macro";

const style = {
  button: (size) => (theme) =>
    css`
      border: 1px solid black;
      border-radius: 15px;
      padding: ${theme.text.size.small * 0.8 +
      "px " +
      theme.text.size.small * 0.8 * 2.0 +
      "px"};
      background: linear-gradient(
          to bottom,
          #052415ff,
          #052415f0 60%,
          #6dd91f00 100%
        ),
        linear-gradient(to right, #052415ff, #6dd91ff0 50%, #052415ff 100%);
      color: ${theme.text.white};
      font-size: ${theme.text.size.small + "px"};
    `,
};

export default style;
