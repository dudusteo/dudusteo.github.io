import * as React from 'react'

/** @jsxImportSource @emotion/react */
import style from './button.style';

const Button = ({ children }, props) => {
    const { onClick } = props;
    return (
        <React.Fragment >
            <button css={style.button} type="button" onClick={onClick}>
                {children}
            </button>
        </React.Fragment>
    )
}

export default Button