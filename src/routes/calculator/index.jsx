import * as React from "react";

import Dropdown from "../../core/dropdown";
import Input from "../../core/input";
import Button from "../../core/button";

/** @jsxImportSource @emotion/react */
import style from "./calculator.style";
import align from "../../styles/align.style";
import Divider from "../../core/divider";

import {
    calculateGearScore,
    calculatePercent,
    getBaseItem,
    getImage,
    handleStatType,
    handleStatValue,
    reforgeItem,
    upgradeItem,
} from "./utils";

import {
    gearEnhanceLevelOptions,
    gearLevelOptions,
    rarityOptions,
    substatOptions,
} from "./dropdown";

import { nameToType, typeToName } from "../../json";

const Calculator = () => {
    const [item, setItem] = React.useState(getBaseItem(85, "Epic"));

    const setRank = (newRank) => {
        setItem((prevState) => ({
            ...prevState,
            rank: newRank,
        }));
    }

    const updateItem = (newItem) => {
        setItem((prevState) => ({
            ...prevState,
            ...newItem,
        }));
    }

    const setLevel = (newLevel) => {
        setItem((prevState) => ({
            ...prevState,
            level: newLevel,
        }));
    }

    const setSubs = (newSubs) => {
        setItem((prevState) => ({
            ...prevState,
            substats: newSubs,
        }));
    };

    const setEnhance = (newEnhance) => {
        setItem((prevState) => ({
            ...prevState,
            enhance: newEnhance,
        }));
    };

    const hardReset = (newRank) => {
        setItem(getBaseItem(85, newRank));
    };

    React.useEffect(() => {
        hardReset(item.rank);
    }, [item.rank])

    return (
        <div css={style.calculator(item.rank.toLowerCase())}>
            <div
                css={[
                    align.verticalCenter,
                    align.horizontalCenter,
                    style.text("title", "large"),
                    style.topItem,
                ]}
            >
                <span>{"E7 Gear Score Calculator (Beta)"}</span>
            </div>

            <div css={style.item}>
                <div css={[align.twoHorizontal, align.lastRight]}>
                    <div>
                        <div
                            css={[
                                align.twoHorizontal,
                                style.colorFromRarity(item.rank.toLowerCase()),
                                style.size("tiny"),
                            ]}
                        >
                            <Dropdown
                                options={rarityOptions}
                                value={item.rank}
                                setValue={(x) => setRank(x)}
                            />
                            <span>{"Item"}&nbsp;</span>
                            <Dropdown
                                options={gearLevelOptions}
                                value={item.level}
                                setValue={(x) => setLevel(x)}
                            />
                            <span>&nbsp;{"+"}</span>
                            <Dropdown
                                options={gearEnhanceLevelOptions}
                                value={item.enhance}
                                setValue={(x) => setEnhance(parseInt(x))}
                            />
                        </div>
                        <div css={style.text("title", "medium")}>
                            <span>{"Equipment name"}</span>
                        </div>
                    </div>
                    <Button size="tiny" color="blue" onClick={() => hardReset(item.rank)}>
                        {"Reset"}
                    </Button>
                </div>
                <Divider />
                <div
                    css={[
                        align.twoHorizontal,
                        align.lastRight,
                        style.text("title", "medium"),
                    ]}
                >
                    <img src={getImage(item.main.type)} alt=""></img>
                    <Dropdown
                        options={substatOptions}
                        value={typeToName[item.main.type]}
                        setValue={(x) => updateItem(handleStatType(item, nameToType[x], -1))}
                    />
                    <span>{item.main.value}</span>
                </div>
                <Divider />
                <div>
                    {item.substats.map((substat, index) => {
                        return (
                            <div
                                css={[
                                    align.twoHorizontal,
                                    align.lastRight,
                                    style.text("else", "small"),
                                ]}
                                key={index}
                            >
                                <img src={getImage(substat.type)} alt=""></img>
                                <Dropdown
                                    options={substatOptions}
                                    value={typeToName[substat.type]}
                                    setValue={(x) => updateItem(handleStatType(item, nameToType[x], index))}
                                />
                                <Input
                                    placeholder="value here"
                                    value={substat.value}
                                    setValue={(x) => updateItem(handleStatValue(item, parseFloat(x), index))}
                                />
                                {/* <Input placeholder={"+"} /> */}
                            </div>
                        );
                    })}
                </div>
                <Divider />
                <div
                    css={[
                        align.horizontalCenter,
                        align.twoHorizontal,
                        align.verticalCenter,
                    ]}
                >
                    <div>
                        <Button
                            onClick={() => {
                                updateItem(upgradeItem(item, 0, 0));
                            }}
                        >
                            {"Enhance +3"}
                        </Button>
                    </div>
                    {parseInt(item.enhance) === 15 && parseInt(item.level) === 85 && (
                        <div>
                            <Button
                                color="blue"
                                onClick={() => setSubs(reforgeItem(item))}
                            >
                                {"Reforge"}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            <div css={[align.horizontalCenter, style.text("title", "large")]}>
                <span>{"Gear Score " + calculateGearScore(item)}</span>
            </div>
            <div css={[align.horizontalCenter, style.text("else", "medium")]}>
                <span>{"Quality: " + calculatePercent(item) + " %"}</span>
            </div>
            <div css={[align.horizontalCenter, style.text("else", "small")]}>
                <span>{"Reforge is working, but not properly :)"}</span>
            </div>
        </div>
    );
};

export default Calculator;
