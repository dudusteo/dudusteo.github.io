import { css } from "@emotion/react/macro";

const style = {
  divider: (input) => (theme) =>
    css`
      border-bottom: 1px solid ${theme.secondary};
      height: 0px;
      margin: 10px 0px;
      width: 100%;
    `,
};

export default style;
