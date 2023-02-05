import * as React from "react";

import Dropdown from "../../core/dropdown";
import Input from "../../core/input";
import Button from "../../core/button";
import * as Image from "../../img/image"

/** @jsxImportSource @emotion/react */
import style from "./calculator.style";
import align from "../../styles/align.style";
import Divider from "../../core/divider";

const rarityOptions = [
    { name: "Epic" },
    { name: "Heroic" },
    { name: "Rare" },
    { name: "Good" },
    { name: "Normal" },
];

const gearLevelOptions = [
    { name: 85 },
    { name: 88 },
    { name: 90 },
]

const gearEnhanceLevelOptions = [
    { name: 0 },
    { name: 1 },
    { name: 2 },
    { name: 3 },
    { name: 4 },
    { name: 5 },
    { name: 6 },
    { name: 7 },
    { name: 8 },
    { name: 9 },
    { name: 10 },
    { name: 11 },
    { name: 12 },
    { name: 13 },
    { name: 14 },
    { name: 15 },
]


const rarityJSON = {
    "Epic": { substats: 4 },
    "Heroic": { substats: 3 },
    "Rare": { substats: 2 },
    "Good": { substats: 1 },
    "Normal": { substats: 0 },
}

const gearScoreEvaluationJSON = {
    85: [
        { higher_than: 0, name: "Low Rolls", },
        { higher_than: 50, name: "Avarage Rolls", },
        { higher_than: 60, name: "High Rolls", },
    ],


    88: [
        { higher_than: 0, name: "Low Rolls", },
        { higher_than: 60, name: "Avarage Rolls", },
        { higher_than: 70, name: "High Rolls", },
    ],


    90: [
        { higher_than: 0, name: "Low Rolls", },
        { higher_than: 60, name: "Avarage Rolls", },
        { higher_than: 70, name: "High Rolls", },
    ],


}

const gearLevelJSON = {
    85: {
        "Attack%": 12,
        "Critical Hit Chance": 11,
        "Critical Hit Damage": 13,
        "Defense%": 12,
        "Effectiveness": 12,
        "Effect Resistance": 12,
        "Health%": 12,
        "Speed": 8,
        "Attack": 100,
        "Defense": 60,
        "Health": 540
    },
    88: {
        "Attack%": 13,
        "Critical Hit Chance": 12,
        "Critical Hit Damage": 14,
        "Defense%": 13,
        "Effectiveness": 13,
        "Effect Resistance": 13,
        "Health%": 13,
        "Speed": 9,
        "Attack": 103,
        "Defense": 62,
        "Health": 553
    },
    90: {
        "Attack%": 13,
        "Critical Hit Chance": 12,
        "Critical Hit Damage": 14,
        "Defense%": 13,
        "Effectiveness": 13,
        "Effect Resistance": 13,
        "Health%": 13,
        "Speed": 9,
        "Attack": 105,
        "Defense": 62,
        "Health": 567
    }
}

const multipliers = [1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.3, 3.6, 3.9, 4.25, 5];

const subStatJSON = {
    "Attack%": { calc: (x) => x, img: Image.stat_atk },
    "Critical Hit Chance": { calc: (x) => x * 1.6, img: Image.stat_cr },
    "Critical Hit Damage": { calc: (x) => x * 1.143, img: Image.stat_cd },
    "Defense%": { img: Image.stat_def, calc: (x) => x },
    "Effectiveness": { calc: (x) => x, img: Image.stat_eff },
    "Effect Resistance": { calc: (x) => x, img: Image.stat_res },
    "Health%": { calc: (x) => x, img: Image.stat_hp },
    "Speed": { calc: (x) => x * 2, img: Image.stat_spd },
    "Attack": { calc: (x) => x * 3.46 / 39, img: Image.stat_atk },
    "Defense": { calc: (x) => x * 4.99 / 41, img: Image.stat_def },
    "Health": { calc: (x) => x * 3.09 / 174, img: Image.stat_hp },
}

const substatOptions = [
    { name: "Attack%" },
    { name: "Critical Hit Chance" },
    { name: "Critical Hit Damage" },
    { name: "Defense%" },
    { name: "Effectiveness" },
    { name: "Effect Resistance" },
    { name: "Health%" },
    { name: "Speed" },
    { name: "Attack" },
    { name: "Defense" },
    { name: "Health" },
];

const calculateGearScore = (subs) => {
    var result = 0.0;
    subs.forEach((object) => {
        var { name, value } = object;
        result += subStatJSON[name].calc(parseFloat(value)) || 0.0;
    })
    return result.toFixed(2);
}

const calculateMainStat = (mainStatName, gearEnhanceLevel, gearLevel) => {
    return gearLevelJSON[gearLevel][mainStatName] * multipliers[gearEnhanceLevel];
}

const Calculator = () => {
    const [rarity, setRarity] = React.useState(rarityOptions[0].name);
    const [stats, setStats] = React.useState({
        main: { name: 'Attack%', value: '' },
        subs: [{ name: 'Critical Hit Chance', value: '' }, { name: 'Critical Hit Damage', value: '' }, { name: 'Speed', value: '' }, { name: 'Effect Resistance', value: '' }]
    })
    const setMain = (newMain) => {
        setStats(prevState => ({
            ...prevState,
            main: newMain,
        }));
    }
    const setSubs = (newSubs) => {
        setStats(prevState => ({
            ...prevState,
            subs: newSubs,
        }));
    }
    const [gearScore, setGearScore] = React.useState(0.0);
    const [mainStat, setMainStat] = React.useState(60);
    const [gearLevel, setGearLevel] = React.useState(85);
    const [gearEnhanceLevel, setGearEnhanceLevel] = React.useState(0);
    const [gearScoreEvaluation, setGearScoreEvaluation] = React.useState("");

    React.useEffect(() => {
        setGearScore(calculateGearScore(stats.subs));
        setMainStat(calculateMainStat(stats.main.name, gearEnhanceLevel, gearLevel))
        gearScoreEvaluationJSON[gearLevel].forEach((object) => object.higher_than <= gearScore && setGearScoreEvaluation(object.name));

    }, [stats, gearLevel, gearEnhanceLevel, gearScore])

    React.useEffect(() => {
        var newSubs = [];
        [...Array(rarityJSON[rarity].substats).keys()].forEach((index) => {
            newSubs.push({ name: substatOptions[index + 1].name, value: '' })
        });
        setSubs(newSubs)

    }, [rarity])

    const handleStat = (newStat, originIndex) => {
        var newSubs = stats.subs;
        var isOnly = true;
        stats.subs.forEach((object, index) => {
            if (object.name === newStat) {
                if (originIndex === -1) {
                    newSubs[index] = { ...stats.subs[index], name: stats.main.name, value: '' }
                } else {
                    newSubs[index] = stats.subs[originIndex];
                    newSubs[originIndex] = object;
                }

                isOnly = false;
            }
        })
        if (originIndex === -1) {
            setMain({ ...stats.main, name: newStat, value: '' });
        } else {
            if (stats.main.name === newStat) {
                setMain({ ...stats.main, name: stats.subs[originIndex].name, value: '' });
            }
            if (isOnly) {
                newSubs[originIndex] = { ...stats.subs[originIndex], name: newStat, value: '' };
            }
            setSubs(newSubs);
        }
    }

    const handleStatValue = (newValue, index) => {
        var newSubs = stats.subs;
        newSubs[index] = { ...stats.subs[index], value: newValue };
        setSubs(newSubs);
    }

    return (
        <div css={style.calculator(rarity.toLowerCase())}>
            <div css={[align.horizontalCenter, style.text("title", "large")]}>
                <span>E7 Gear Score Calculator</span>
            </div>

            <div css={style.item}>
                <div css={[align.twoHorizontal, style.color(rarity.toLowerCase()), style.size("tiny")]}>
                    <Dropdown
                        options={rarityOptions}
                        value={rarity}
                        setValue={setRarity}
                    />
                    <span>Item&nbsp;</span>
                    <Dropdown options={gearLevelOptions} value={gearLevel} setValue={setGearLevel} />
                    <span>&nbsp;</span>
                    <Dropdown options={gearEnhanceLevelOptions} value={gearEnhanceLevel} setValue={setGearEnhanceLevel} />
                </div>
                <Divider />
                <div css={[align.twoHorizontal, align.lastRight, style.text("title", "medium")]}>
                    <img src={subStatJSON[stats.main.name].img} alt=""></img>
                    <Dropdown options={substatOptions} value={stats.main.name} setValue={(x) => handleStat(x, -1)} />
                    <span>{mainStat}</span>
                </div>
                <Divider />
                <div>
                    {
                        stats.subs.map((key, index) => {
                            return (
                                <div css={[align.twoHorizontal, align.lastRight, style.text("else", "small")]} key={index}>
                                    <img src={subStatJSON[key.name].img} alt=""></img>
                                    <Dropdown options={substatOptions} value={key.name} setValue={(x) => handleStat(x, index)} />
                                    <Input placeholder="value here" value={key.value} setValue={(x) => handleStatValue(x, index)} />
                                </div>
                            )
                        })
                    }
                </div>
                <Divider />
                <div css={align.horizontalCenter}>
                    <Button>Enhance</Button>
                </div>
            </div>
            <div css={[align.horizontalCenter, style.text("title", "large")]}>
                <span>Gear Score{" " + gearScore}</span>
            </div>
            <div css={[align.horizontalCenter, style.text("else", "medium")]}>
                <span>{gearScoreEvaluation}</span>
            </div>
        </div >
    );
};

export default Calculator;
