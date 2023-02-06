import * as React from "react";

import Dropdown from "../../core/dropdown";
import Input from "../../core/input";
import Button from "../../core/button";

/** @jsxImportSource @emotion/react */
import style from "./calculator.style";
import align from "../../styles/align.style";
import Divider from "../../core/divider";

import { gearLevelJSON, gearScoreEvaluationJSON, rarityJSON, substatJSON } from "./json";
import { reforgeItem } from "./utils";

const rarityOptions = [
    { name: "Epic" },
    { name: "Heroic" },
    { name: "Rare" },
    { name: "Good" },
    { name: "Normal" },
];

const gearLevelOptions = [{ name: 85 }, { name: 88 }, { name: 90 }];

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
];

const multipliers = [
    1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.3, 3.6, 3.9, 4.25, 5,
];

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
        result += substatJSON[name].calc(parseFloat(value)) || 0.0;
    });
    return result.toFixed(2);
};

const calculateMainStat = (mainStatName, gearEnhanceLevel, gearLevel) => {
    return gearLevelJSON[gearLevel][mainStatName] * multipliers[gearEnhanceLevel];
};

const returnMissingSubstat = (substats) => {
    var arr = [];
    var res = "";
    substats.forEach((object) => arr.push(object.name));
    substatOptions.some((object) => {
        return !arr.includes(object.name) ? res = object.name : false;
    });

    return res;
}

const Calculator = () => {
    const [rarity, setRarity] = React.useState(rarityOptions[0].name);
    const [stats, setStats] = React.useState({
        main: { name: "Attack%", value: "" },
        subs: [
            { name: "Critical Hit Chance", value: "" },
            { name: "Critical Hit Damage", value: "" },
            { name: "Speed", value: "" },
            { name: "Effect Resistance", value: "" },
        ],
    });
    const setMain = (newMain) => {
        setStats((prevState) => ({
            ...prevState,
            main: newMain,
        }));
    };
    const setSubs = (newSubs) => {
        setStats((prevState) => ({
            ...prevState,
            subs: newSubs,
        }));
    };
    const [gearScore, setGearScore] = React.useState(0.0);
    const [mainStat, setMainStat] = React.useState(60);
    const [gearLevel, setGearLevel] = React.useState(85);
    const [gearEnhanceLevel, setGearEnhanceLevel] = React.useState(0);
    const [gearScoreEvaluation, setGearScoreEvaluation] = React.useState("");

    React.useEffect(() => {
        setGearScore(calculateGearScore(stats.subs));
        setMainStat(
            calculateMainStat(stats.main.name, gearEnhanceLevel, gearLevel)
        );
        gearScoreEvaluationJSON[gearLevel].forEach(
            (object) =>
                object.higher_than <= gearScore && setGearScoreEvaluation(object.name)
        );
    }, [stats, gearLevel, gearEnhanceLevel, gearScore]);

    React.useEffect(() => {
        var newSubs = [];
        [...Array(rarityJSON[rarity].substats).keys()].forEach((index) => {
            newSubs.push({ name: substatOptions[index + 1].name, value: "" });
        });
        setSubs(newSubs);
    }, [rarity]);

    const hardReset = () => {
        var newSubs = [];
        [...Array(rarityJSON[rarity].substats).keys()].forEach((index) => {
            newSubs.push({ name: substatOptions[index + 1].name, value: "" });
        });
        setSubs(newSubs);
        setGearEnhanceLevel(0);
    }

    React.useEffect(() => {
        var old_subs = [...stats.subs];
        if (!["Epic", "Heroic", "Rare", "Good"].includes(rarity)) {
            if (gearEnhanceLevel >= 3) {
                if (old_subs.length < 1) {
                    old_subs.push({ name: returnMissingSubstat([...old_subs, stats.main]), value: "" });
                    setSubs(old_subs);
                }
            } else {
                while (stats.subs.length >= 1) {
                    stats.subs.pop();
                }
            }
        }
        if (!["Epic", "Heroic", "Rare"].includes(rarity)) {
            if (gearEnhanceLevel >= 6) {
                if (old_subs.length < 2) {
                    old_subs.push({ name: returnMissingSubstat([...old_subs, stats.main]), value: "" });
                    setSubs(old_subs);
                }
            } else {
                while (stats.subs.length >= 2) {
                    stats.subs.pop();
                }
            }
        }
        if (!["Epic", "Heroic"].includes(rarity)) {
            if (gearEnhanceLevel >= 9) {
                if (old_subs.length < 3) {
                    old_subs.push({ name: returnMissingSubstat([...old_subs, stats.main]), value: "" });
                    setSubs(old_subs);
                }
            } else {
                while (stats.subs.length >= 3) {
                    stats.subs.pop();
                }
            }
        }
        if (!["Epic"].includes(rarity)) {
            if (gearEnhanceLevel >= 12) {
                if (old_subs.length < 4) {
                    old_subs.push({ name: returnMissingSubstat([...old_subs, stats.main]), value: "" });
                    setSubs(old_subs);
                }
            } else {
                while (stats.subs.length >= 4) {
                    stats.subs.pop();
                }
            }
        }
    }, [stats, rarity, gearEnhanceLevel]);

    const handleStat = (newStat, originIndex) => {
        var newSubs = [...stats.subs];
        var isOnly = true;
        stats.subs.forEach((object, index) => {
            if (object.name === newStat) {
                if (originIndex === -1) {
                    newSubs[index] = {
                        ...stats.subs[index],
                        name: stats.main.name,
                        value: "",
                    };
                } else {
                    newSubs[index] = stats.subs[originIndex];
                    newSubs[originIndex] = object;
                }
                isOnly = false;
            }
        });
        if (originIndex === -1) {
            setMain({ ...stats.main, name: newStat, value: "" });
        } else {
            if (stats.main.name === newStat) {
                setMain({
                    ...stats.main,
                    name: stats.subs[originIndex].name,
                    value: "",
                });
            }
            if (isOnly) {
                newSubs[originIndex] = {
                    ...stats.subs[originIndex],
                    name: newStat,
                    value: "",
                };
            }
            setSubs(newSubs);
        }
    };

    const handleStatValue = (newValue, index) => {
        var newSubs = stats.subs;
        newSubs[index] = { ...stats.subs[index], value: newValue };
        setSubs(newSubs);
    };

    return (
        <div css={style.calculator(rarity.toLowerCase())}>
            <div css={[align.verticalCenter, align.horizontalCenter, style.text("title", "large"), style.topItem]}>
                <span>E7 Gear Score Calculator</span>
            </div>

            <div css={style.item}>
                <div css={[align.twoHorizontal, align.lastRight]}>
                    <div>
                        <div
                            css={[
                                align.twoHorizontal,
                                style.colorFromRarity(rarity.toLowerCase()),
                                style.size("tiny"),
                            ]}
                        >
                            <Dropdown
                                options={rarityOptions}
                                value={rarity}
                                setValue={setRarity}
                            />
                            <span>Item&nbsp;</span>
                            <Dropdown
                                options={gearLevelOptions}
                                value={gearLevel}
                                setValue={setGearLevel}
                            />
                            <span>&nbsp;+</span>
                            <Dropdown
                                options={gearEnhanceLevelOptions}
                                value={gearEnhanceLevel}
                                setValue={(x) => setGearEnhanceLevel(parseInt(x))}
                            />
                        </div>
                        <div css={style.text("title", "medium")}>
                            <span>Equipment name</span>
                        </div>
                    </div>
                    <Button size="tiny" color="blue" onClick={hardReset}>Reset</Button>
                </div>
                <Divider />
                <div
                    css={[
                        align.twoHorizontal,
                        align.lastRight,
                        style.text("title", "medium"),
                    ]}
                >
                    <img src={substatJSON[stats.main.name].img} alt=""></img>
                    <Dropdown
                        options={substatOptions}
                        value={stats.main.name}
                        setValue={(x) => handleStat(x, -1)}
                    />
                    <span>{mainStat.toFixed(0)}</span>
                </div>
                <Divider />
                <div>
                    {stats.subs.map((key, index) => {
                        return (
                            <div
                                css={[
                                    align.twoHorizontal,
                                    align.lastRight,
                                    style.text("else", "small"),
                                ]}
                                key={index}
                            >
                                <img src={substatJSON[key.name].img} alt=""></img>
                                <Dropdown
                                    options={substatOptions}
                                    value={key.name}
                                    setValue={(x) => handleStat(x, index)}
                                />
                                <Input
                                    placeholder="value here"
                                    value={key.value}
                                    setValue={(x) => handleStatValue(x, index)}
                                />
                            </div>
                        );
                    })}
                </div>
                <Divider />
                <div css={[align.horizontalCenter, align.twoHorizontal, align.verticalCenter]}>
                    <div>
                        <Button
                            onClick={() =>
                                setGearEnhanceLevel(
                                    gearEnhanceLevel < 15 ? gearEnhanceLevel + 1 : gearEnhanceLevel
                                )
                            }
                        >
                            Enhance
                        </Button>
                    </div>
                    {parseInt(gearEnhanceLevel) === 15 && parseInt(gearLevel) === 85 && <div><Button color="blue" onClick={(x) => { setSubs(reforgeItem(stats.subs)); setGearLevel(90); }}>Reforge</Button> </div>}
                </div>
            </div>
            <div css={[align.horizontalCenter, style.text("title", "large")]}>
                <span>Gear Score{" " + gearScore}</span>
            </div>
            <div css={[align.horizontalCenter, style.text("else", "medium")]}>
                <span>{gearScoreEvaluation}</span>
            </div>
            <div css={[align.horizontalCenter, style.text("else", "small")]}>
                <span>Reforge is working, but not properly :)</span>
            </div>
        </div>
    );
};

export default Calculator;
