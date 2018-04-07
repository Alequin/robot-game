import stats from "./stats"

function newStats(initalStats = {}){

  const {
    [stats.ARMOUR]: armour,
    [stats.SHIELD]: shield,
    [stats.WEIGHT]: weight,
    [stats.AGILITY]: agility,
    [stats.BATTERY_CHARGE_RATE]: batteryChargeRate,
    [stats.BATTERY_CAPACITY]: batteryCapacity
  } = initalStats

  return {
    [stats.ARMOUR]: armour || 0,
    [stats.SHIELD]: shield || 0,
    [stats.WEIGHT]: weight || 0,
    [stats.AGILITY]: agility || 0,
    [stats.BATTERY_CHARGE_RATE]: batteryChargeRate || 0,
    [stats.BATTERY_CAPACITY]: batteryCapacity || 0
  }
}

export default newStats
