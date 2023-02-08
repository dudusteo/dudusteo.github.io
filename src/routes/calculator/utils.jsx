import { mainStatValues, rankInfo, rollsInfo, substatJSON } from "./json";
import * as Image from "../../img/image";
import { typeToName } from "../../json";

export const handleStatType = (item, newType, originIndex) => {
    var newStats = [item.main, ...item.substats];
    newStats.forEach((object, index) => {
        if (object.type === newType) {
            newStats[index] = { ...newStats[originIndex + 1], value: 0 };
        }
    });
    newStats[originIndex + 1] = {
        ...newStats[originIndex + 1],
        type: newType,
        value: 0,
    };

    const newItem = { ...item, main: newStats[0], substats: [...newStats.slice(1)] };
    newItem.main.value = calculateMainStat(newItem);
    return newItem;
};

export const handleStatValue = (item, newValue, originIndex) => {
    var newSubs = [...item.substats];
    newSubs[originIndex] = { ...item.substats[originIndex], value: newValue };
    return { ...item, substats: [...newSubs] };
};

export const reforgeItem = (item) => {
    item.level = 90;
    item.main.value = calculateMainStat(item);
    return item.substats.map((substat) => {
        var { type, value, rolls } = substat;
        return {
            type: type,
            value: value + substatJSON[type].reforge(rolls),
            rolls: rolls,
        };
    });
};

export const upgradeItem = (item, index, newValue) => {
    if (item.enhance < 15) {
        item.enhance += 3;
        item.main.value = calculateMainStat(item);
        item.substats[index].value += newValue;
        item.substats[index].rolls += 1;
    }
    return item;
};

export const getImage = (name) => {
    return Image[name];
};

export const calculateGearScore = (item) => {
    var result = 0.0;
    item.substats.forEach((substat) => {
        var { type, value } = substat;
        result += substatJSON[type].calc(value) || 0.0;
    });
    return result.toFixed(2);
};

export const calculatePercent = (item) => {
    var base = 0.0;
    var max = 0.0;
    item.substats.forEach((substat) => {
        var { type, value, rolls } = substat;
        base += substatJSON[type].calc(value) || 0.0;
        max +=
            substatJSON[type].calc(rollsInfo[item.level][type].max * rolls) || 0.0;
    });
    var result = (base / max) * 100 || 0.0;
    return result.toFixed(2);
};

export const calculateMainStat = (item) => {
    const { level, enhance } = item;
    const multipliers = [
        1, 1.2, 1.4, 1.6, 1.8, 2, 2.2, 2.4, 2.6, 2.8, 3, 3.3, 3.6, 3.9, 4.25, 5,
    ];
    return (mainStatValues[level][item.main.type] * multipliers[enhance]).toFixed(0)
};

export const returnMissingSubstat = (substats) => {
    var arr = [];
    var res = "";
    substats.forEach((object) => arr.push(object.type));
    Object.keys(typeToName).some((key) => {
        return !arr.includes(key) ? (res = key) : false;
    });
    return res;
};

export const getBaseItem = (level, rank) => {
    const baseItem = {
        level: level,
        rank: rank,
        enhance: 0,
        main: { type: "Attack", value: 100 },
        substats: [],
    };
    for (var i = 0; i < rankInfo[rank].rolls.min; i++) {
        baseItem.substats.push({
            type: returnMissingSubstat([baseItem.main, ...baseItem.substats]),
            value: 0,
            rolls: 1,
        });
    }

    return baseItem;
};
