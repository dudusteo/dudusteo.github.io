import * as React from 'react'

/** @jsxImportSource @emotion/react */
import style from './text.style';

const Text = (props) => {
    const { children, type } = props;
    return (
        <span css={style.text(type)}>{children}</span>
    )
}

export default Text