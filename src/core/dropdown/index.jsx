import * as React from 'react'

/** @jsxImportSource @emotion/react */
import style from './dropdown.style';

const Dropdown = (props) => {
    const { options = [], value, setValue } = props;

    return (
        <select css={[style.dropdown]} value={value} onChange={(e) => setValue(e.target.value)}>
            {options.map((item, key) =>
                <option
                    css={[typeof item.name === "string" && style.color(item.name.toLowerCase())]}
                    key={key}
                    value={item.name}>
                    {item.name}
                </option>)}
        </select>
    )
}

export default Dropdown