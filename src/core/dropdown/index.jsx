import * as React from 'react'

/** @jsxImportSource @emotion/react */
import style from './dropdown.style';

const Dropdown = (props) => {
    const { options = [], value, setValue } = props;
    
    return (
        <div>
            <select css={[style.dropdown, style.color(value)]} value={value} onChange={(e) => setValue(e.target.value)}>
                {options.map((item, key) => <option css={style.color(item.value)} key={key} value={item.value}>{item.name}</option>)}
            </select>
        </div>
        
    )   
}

export default Dropdown