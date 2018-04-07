import mapValues from "lodash/mapValues"
import reduce from "lodash/reduce"
import flow from "lodash/flow"

import resetStats from "./reset-stats"
import isSpaceForComponents from "./is-space-for-components"

import type from "./component-types"

function addComponents(robot, componentsToAdd){
  const {chassy: {components, componentCapacity}} = robot
  if(!isSpaceForComponents(robot, componentsToAdd.length)) {
    throw overCapacityError(componentCapacity)
  }
  robot.chassy.components = [...components, ...componentsToAdd]
  return robot
}

function overCapacityError(componentCapacity){
  return new Error(`Cannot add more components that the chassy can support: Max(${componentCapacity})`)
}

export default addComponents
