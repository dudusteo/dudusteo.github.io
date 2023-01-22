import { css } from "@emotion/react/macro";

const style = {
  horizontalCenter: css`
    text-align: center;
  `,
  twoHorizontal: css`
    display: flex;
    flex-direction: row;
  `,
  lastRight: css`
    & > :last-child {
      margin-left: auto;
    }
  `,
};

export default style;
