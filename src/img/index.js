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

// Class Icons
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

// Elements Icons
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

// Stars Icons
import five from "./star/5.png";
import four from "./star/4.png";
import three from "./star/3.png";

const star = {
	5: five,
	4: four,
	3: three,
};

// Set Icons https://static.smilegatemegaport.com/event/live/epic7/guide/wearingStatus/images/sets/
import attack from "./set/set_att.png";
import counter from "./set/set_counter.png";
import critical from "./set/set_cri.png";
import defense from "./set/set_def.png";
import destruction from "./set/set_cri_dmg.png";
import health from "./set/set_max_hp.png";
import hit from "./set/set_acc.png";
import immunity from "./set/set_immune.png";
import injury from "./set/set_scar.png";
import lifesteal from "./set/set_vampire.png";
import penetration from "./set/set_penetrate.png";
import protection from "./set/protection.png";
import rage from "./set/set_rage.png";
import resist from "./set/set_res.png";
import revenge from "./set/set_revenge.png";
import speed from "./set/set_speed.png";
import torrent from "./set/set_torrent.png";
import unity from "./set/set_coop.png";

const set = {
	attack,
	counter,
	critical,
	defense,
	destruction,
	health,
	hit,
	immunity,
	injury,
	lifesteal,
	penetration,
	protection,
	rage,
	resist,
	revenge,
	speed,
	torrent,
	unity,
};

// Styling
import section_divider from "./section_divider.png";
import epic7_logo from "./epic7_logo.png";

export { heroClass, stat, attribute, star, set, section_divider, epic7_logo };
