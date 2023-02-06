import { substatJSON } from "./json"


export const rollsFromSubstat = (substat) => {
    const substatInfo = substatJSON[substat.name];
    console.log({ name: substat.name, rolls: (substat.value / ((substatInfo.rollValue.min + substatInfo.rollValue.max) / 2)).toFixed(0) })
    return parseInt(substat.value / ((substatInfo.rollValue.min + substatInfo.rollValue.max) / 2)).toFixed(0);
}

export const reforgeItem = (substat) => {
    return substat.map((object) => { return { name: object.name, value: parseInt(object.value) + substatJSON[object.name].reforge(rollsFromSubstat(object)) } }
    )
}