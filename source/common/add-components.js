import reduce from "lodash/reduce"
import flow from "lodash/flow"

import resetStats from "./reset-stats"
import isSpaceForComponents from "./is-space-for-components"

import {
  WEAPON, ARMOUR,
  SHIELD, CHASSY,
  WHEELS, BATTERY,
  CHARGER
} from "./component-types"

function addComponents(robot, componentsToAdd){
  const {chassy: {components, componentCapacity}} = robot

  robot.chassy.components = isSpaceForComponents(robot, componentsToAdd.length) ?
  [...components, ...componentsToAdd]
  : components

  return setRobotStats(robot)
}

const setRobotStats = flow(
  resetStats,
  applyComponents
)

function applyComponents(robot){
  const {components, stats} = robot.chassy
  robot.chassy.stats = reduce(components, statModifier, stats)
  return robot
}

function statModifier(stats, component){
  const modifer = statModifiersByType[component.type]
  return modifer(stats, component)
}

const statModifiersByType = {
  [ARMOUR]: (stats, armour) => {
    return Object.assign(stats, {
      totalWeight: stats.totalWeight + armour.weight,
      armour: stats.armour + armour.durability
    })
  },
  [WEAPON]: (stats, weapon) => {
    return Object.assign(stats, {
      totalWeight: stats.totalWeight + weapon.weight
    })
  }
}

export default addComponents
