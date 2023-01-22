import * as React from "react";
import Dropdown from "../../core/dropdown";
import Input from "../../core/input";
import Text from "../../core/text";

/** @jsxImportSource @emotion/react */
import style from "./calculator.style";
import align from "../../styles/align.style";

const options = [
    { name: "Epic", value: "epic" },
    { name: "Heroic", value: "heroic" },
    { name: "Rare", value: "rare" },
    { name: "Good", value: "good" },
    { name: "Normal", value: "normal" },
];

const substatOptions = [
    { name: "Attack%", value: 0, placeholder: "%", calc: (x) => x },
    { name: "Critical Hit Chance", value: 1, placeholder: "%", calc: (x) => x * 1.6 },
    { name: "Critical Hit Damage", value: 2, placeholder: "%", calc: (x) => x * 1.14 },
    { name: "Defense%", value: 3, placeholder: "%", calc: (x) => x },
    { name: "Effectiveness", value: 4, placeholder: "%", calc: (x) => x },
    { name: "Effect Resistance", value: 5, placeholder: "%", calc: (x) => x },
    { name: "Health%", value: 6, placeholder: "%", calc: (x) => x },
    { name: "Speed", value: 7, placeholder: "Flat", calc: (x) => x * 2 },
    { name: "Attack", value: 8, placeholder: "Flat", calc: (x) => x * 3.46 / 39 },
    { name: "Defense", value: 9, placeholder: "Flat", calc: (x) => x * 3.46 / 39 },
    { name: "Health", value: 10, placeholder: "Flat", calc: (x) => x * 3.46 / 39 },
];

const calculate = (stats) => {
    var result = 0.0;
    Object.keys(stats).map((key) => {
        var { id, value } = stats[key];
        result += substatOptions[id].calc(parseFloat(value)) || 0.0;
    })
    return result.toFixed(2);
}

const Calculator = () => {
    const [rarity, setRarity] = React.useState(options[0].value);
    const [stats, setStats] = React.useState({
        "1": { id: 0, value: '' },
        "2": { id: 1, value: '' },
        "3": { id: 2, value: '' },
        "4": { id: 3, value: '' }
    })


    const handleStat = (newStat, index) => {
        setStats({
            ...stats,
            [index]: {
                ...stats[index],
                id: newStat,
            }
        })
    }

    const handleStatValue = (newValue, index) => {
        setStats({
            ...stats,
            [index]: {
                ...stats[index],
                value: newValue,
            }
        })
    }



    return (
        <div css={style.calculator(rarity)}>
            <div css={align.horizontalCenter}>
                <Text type="title">E7 Substat Calculator</Text>
            </div>
            <div>
                <Dropdown
                    options={options}
                    value={rarity}
                    setValue={setRarity}
                ></Dropdown>
            </div>
            {
                Object.keys(stats).map((key) => {
                    return (
                        <div css={[align.twoHorizontal, align.lastRight]} key={key}>
                            <Dropdown options={substatOptions} value={stats[key].id} setValue={(x) => handleStat(x, key)}></Dropdown>
                            <Input placeholder={substatOptions[stats[key].id].placeholder} setValue={(x) => handleStatValue(x, key)}></Input>
                        </div>
                    )
                })
            }
            <div css={align.horizontalCenter}>
                <Text type="title">Gear Score{" " + calculate(stats)}</Text>
            </div>

        </div >
    );
};

export default Calculator;
