import { css } from "@emotion/react/macro";

const style = {
  container: (theme) => css`
    & > input {
      text-align: right;
      font-size: ${theme.text.size.small};
      line-height: ${theme.text.size.small};
      color: ${theme.text.gray};
      opacity: 1;

      ::placeholder {
        opacity: 0.3;
      }

      ::focus {
        outline: none;
      }
    }
  `,
};

export default style;
