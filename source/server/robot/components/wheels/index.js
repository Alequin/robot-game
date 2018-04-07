import * as type from "./../../../../common/component-types"
import {stats, newStats} from "./../stats"

const wheels = [
  {
    id: 1,
    type: type.WHEELS,
    name: "Small Wheels",
    description: "Basic light weight wheels",
    durability: 100,
    stats: newStats({[stats.WEIGHT]: 10, [stats.AGILITY]: 20})
  }
]

export default wheels
