export const stats = Object.freeze({
    ARMOUR: "Armour",
    WEIGHT: "Weight",
    AGILITY: "Agility",

    SHIELD_CHARGE_RATE: "Shield charge rate",
    SHIELD_EFFICIENCY: "Shield efficiency",
    SHIELD_CAPACITY: "Shield capacity",

    BATTERY_CHARGE_RATE: "Battery charge rate",
    BATTERY_EFFICIENCY: "Battery efficiency",
    BATTERY_CAPACITY: "Battery capacity"
})

export const newStats = (initalStats = {}) => {

  const {
    [stats.ARMOUR]: armour,
    [stats.WEIGHT]: weight,
    [stats.AGILITY]: agility,

    [stats.SHIELD_CHARGE_RATE]: shieldChargeRate,
    [stats.SHIELD_EFFICIENCY]: shieldEfficiency,
    [stats.SHIELD_CAPACITY]: shieldCapacity,

    [stats.BATTERY_CHARGE_RATE]: batteryChargeRate,
    [stats.BATTERY_EFFICIENCY]: batteryEfficiency,
    [stats.BATTERY_CAPACITY]: batteryCapacity
  } = initalStats

  return {
    [stats.ARMOUR]: armour || 0,
    [stats.WEIGHT]: weight || 0,
    [stats.AGILITY]: agility || 0,

    [stats.SHIELD_CHARGE_RATE]: shieldChargeRate || 0,
    [stats.SHIELD_EFFICIENCY]: shieldEfficiency || 0,
    [stats.SHIELD_CAPACITY]: shieldCapacity || 0,

    [stats.BATTERY_CHARGE_RATE]: batteryChargeRate || 0,
    [stats.BATTERY_EFFICIENCY]: batteryEfficiency || 0,
    [stats.BATTERY_CAPACITY]: batteryCapacity || 0
  }
}

export default stats
