import mapValues from "lodash/mapValues"
import set from "lodash/fp/set"
import flow from "lodash/flow"
import {stats, newStats} from "./../server/robot/components/stats"

function resetStats(robot){
  robot.chassy.stats = newStats({
    [stats.WEIGHT]: robot.chassy.baseWeight
  })
  return robot
}

export default resetStats
