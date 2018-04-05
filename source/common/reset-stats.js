import mapValues from "lodash/mapValues"
import flow from "lodash/flow"

function resetStats(robot){
  const {chassy: {stats}} = robot
  robot.chassy.stats = mapValues(stats, () => 0)
  return robot
}

function applyBaseWeight(robot){
  const {chassy} = robot
  chassy.stats.totalWeight = chassy.stats.totalWeight + chassy.baseWeight
  return robot
}

export default flow(resetStats, applyBaseWeight)
