import * as React from 'react'

/** @jsxImportSource @emotion/react */
import style from './input.style';

const Input = (props) => {
    const { placeholder, value, setValue } = props;
    return (
        <div css={style.container}>
            <input placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)}></input>
        </div >

    )
}

export default Input