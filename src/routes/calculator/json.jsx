export const mainStatValues = {
    85: {
        AttackPercent: 12,
        CriticalHitChancePercent: 11,
        CriticalHitDamagePercent: 13,
        DefensePercent: 12,
        EffectivenessPercent: 12,
        EffectResistancePercent: 12,
        HealthPercent: 12,
        Speed: 8,
        Attack: 100,
        Defense: 60,
        Health: 540,
    },
    88: {
        AttackPercent: 13,
        CriticalHitChancePercent: 12,
        CriticalHitDamagePercent: 14,
        DefensePercent: 13,
        EffectivenessPercent: 13,
        EffectResistancePercent: 13,
        HealthPercent: 13,
        Speed: 9,
        Attack: 103,
        Defense: 62,
        Health: 553,
    },
    90: {
        AttackPercent: 13,
        CriticalHitChancePercent: 12,
        CriticalHitDamagePercent: 14,
        DefensePercent: 13,
        EffectivenessPercent: 13,
        EffectResistancePercent: 13,
        HealthPercent: 13,
        Speed: 9,
        Attack: 105,
        Defense: 62,
        Health: 567,
    },
};

export const rankInfo = {
    Epic: { rolls: { min: 4, max: 9 } },
    Heroic: { rolls: { min: 3, max: 8 } },
    Rare: { rolls: { min: 2, max: 7 } },
    Good: { rolls: { min: 1, max: 6 } },
    Normal: { rolls: { min: 0, max: 5 } },
};

export const rollsInfo = {
    85: {
        AttackPercent: { min: 4, max: 8 },
        CriticalHitChancePercent: { min: 3, max: 5 },
        CriticalHitDamagePercent: { min: 3, max: 7 },
        DefensePercent: { min: 4, max: 8 },
        EffectivenessPercent: { min: 4, max: 8 },
        EffectResistancePercent: { min: 4, max: 8 },
        HealthPercent: { min: 4, max: 8 },
        Speed: { min: 1, max: 5 },
        Attack: { min: 30, max: 47 },
        Defense: { min: 25, max: 34 },
        Health: { min: 147, max: 212 },
    },
    90: {
        AttackPercent: { min: 4, max: 9 },
        CriticalHitChancePercent: { min: 3, max: 6 },
        CriticalHitDamagePercent: { min: 3, max: 8 },
        DefensePercent: { min: 4, max: 9 },
        EffectivenessPercent: { min: 4, max: 9 },
        EffectResistancePercent: { min: 4, max: 9 },
        HealthPercent: { min: 4, max: 9 },
        Speed: { min: 2, max: 5 },
        Attack: { min: 30, max: 58 },
        Defense: { min: 25, max: 43 },
        Health: { min: 147, max: 268 },
    }
};

export const substatJSON = {
    AttackPercent: {
        calc: (x) => x,
        reforge: (rolls) => plainStatRollsToValue[rolls],
    },
    CriticalHitChancePercent: {
        calc: (x) => x * 1.6,
        reforge: (rolls) => parseInt(rolls),
    },
    CriticalHitDamagePercent: {
        calc: (x) => x * 1.143,
        reforge: (rolls) => critDamageRollsToValue[rolls],
    },
    DefensePercent: {
        calc: (x) => x,
        reforge: (rolls) => plainStatRollsToValue[rolls],
    },
    EffectivenessPercent: {
        calc: (x) => x,
        reforge: (rolls) => plainStatRollsToValue[rolls],
    },
    EffectResistancePercent: {
        calc: (x) => x,
        reforge: (rolls) => plainStatRollsToValue[rolls],
    },
    HealthPercent: {
        calc: (x) => x,
        reforge: (rolls) => plainStatRollsToValue[rolls],
    },
    Speed: {
        calc: (x) => x * 2,
        reforge: (rolls) => speedRollsToValue[rolls],
    },
    Attack: {
        calc: (x) => (x * 3.46) / 39,
        reforge: (rolls) => rolls * 11,
    },
    Defense: {
        calc: (x) => (x * 4.99) / 41,
        reforge: (rolls) => rolls * 9,
    },
    Health: {
        calc: (x) => (x * 3.09) / 174,
        reforge: (rolls) => rolls * 56,
    },
};

export const plainStatRollsToValue = {
    1: 1,
    2: 3,
    3: 4,
    4: 5,
    5: 7,
    6: 8,
};

export const critDamageRollsToValue = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 6,
    6: 7,
};

export const speedRollsToValue = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 4,
};

// 11 attack
// 9 defense
// 56 health
