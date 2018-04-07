import * as type from "./../../../../common/component-types"
import {stats, newStats} from "./../stats"

const shields = [
  {
    id: 1,
    type: type.SHIELD,
    name: "Simple Shield",
    description: "A basic energy shield",
    durability: 100,
    stats: newStats({
      [stats.SHIELD_CAPACITY]: 100,
      [stats.SHIELD_CHARGE_RATE]: 10,
      [stats.SHIELD_EFFICIENCY]: 2,
    })
  }
]

export default shields
