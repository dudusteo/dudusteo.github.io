// Stats Icons
import AttackPercent from "./stat/stat_atk.png";
import CriticalHitChancePercent from "./stat/stat_cr.png";
import CriticalHitDamagePercent from "./stat/stat_cd.png";
import DefensePercent from "./stat/stat_def.png";
import EffectivenessPercent from "./stat/stat_eff.png";
import EffectResistancePercent from "./stat/stat_res.png";
import HealthPercent from "./stat/stat_hp.png";
import Speed from "./stat/stat_spd.png";
import Attack from "./stat/stat_atk.png";
import Defense from "./stat/stat_def.png";
import Health from "./stat/stat_hp.png";

const CriticalHitChance = CriticalHitChancePercent;
const CriticalHitDamage = CriticalHitDamagePercent;
const Effectiveness = EffectivenessPercent;
const EffectResistance = EffectResistancePercent;

const stat = {
	AttackPercent,
	CriticalHitChance,
	CriticalHitChancePercent,
	CriticalHitDamage,
	CriticalHitDamagePercent,
	DefensePercent,
	Effectiveness,
	EffectivenessPercent,
	EffectResistance,
	EffectResistancePercent,
	HealthPercent,
	Speed,
	Attack,
	Defense,
	Health,
};

import assassin from "./class/assassin.png";
import knight from "./class/knight.png";
import mage from "./class/mage.png";
import manauser from "./class/manauser.png";
import ranger from "./class/ranger.png";
import warrior from "./class/warrior.png";

const heroClass = {
	assassin,
	knight,
	mage,
	manauser,
	ranger,
	warrior,
};

import dark from "./attribute/dark.png";
import light from "./attribute/light.png";
import wind from "./attribute/wind.png";
import fire from "./attribute/fire.png";
import ice from "./attribute/ice.png";

const attribute = {
	dark,
	light,
	wind,
	fire,
	ice,
};

// Styling
import section_divider from "./section_divider.png";
import epic7_logo from "./epic7_logo.png";

export { heroClass, stat, attribute, section_divider, epic7_logo };
