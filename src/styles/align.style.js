import { css } from "@emotion/react/macro";

const style = {
  horizontalCenter: css`
    align-items: center;
    text-align: center;
  `,
  verticalCenter: css`
    justify-content: center;
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
