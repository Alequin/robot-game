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
  if(!isSpaceForComponents(robot, componentsToAdd.length)) {
    throw overCapacityError(componentCapacity)
  }
  robot.chassy.components = [...components, ...componentsToAdd]
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

function overCapacityError(componentCapacity){
  return new Error(`Cannot add more components that the chassy can support: Max(${componentCapacity})`)
}

export default addComponents
