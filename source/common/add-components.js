import reduce from "lodash/reduce"
import flow from "lodash/flow"
import mapValues from "lodash/mapValues"

import {
  WEAPON, ARMOUR,
  SHIELD, CHASSY,
  WHEELS, BATTERY,
  CHARGER
} from "./component-types"

function addComponents(robot, componentsToAdd){
  const {chassy: {components, componentCapacity}} = robot
  const addComponents = shouldAddComponent(components, componentsToAdd, componentCapacity)

  robot.chassy.components = addComponents ?
    [...components, ...componentsToAdd]
    : components

  return {addedComponents: addComponents, robot: setRobotStats(robot)}
}

function shouldAddComponent(currentComponents, componentsToAdd, componentCapacity){
  const newTotalLength = componentsToAdd.length + currentComponents.length
  return newTotalLength <= componentCapacity
}

const setRobotStats = flow(
  resetAllStats,
  applyBaseWeight,
  applyComponents
)

function resetAllStats(robot){
  const {chassy: {stats}} = robot
  robot.chassy.stats = mapValues(stats, () => 0)
  return robot
}

function applyBaseWeight(robot){
  const {chassy} = robot
  chassy.stats.totalWeight = chassy.stats.totalWeight + chassy.baseWeight
  return robot
}

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
  }
}

export default addComponents
