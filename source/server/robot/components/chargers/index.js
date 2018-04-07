import * as type from "./../../../../common/component-types"
import {stats, newStats} from "./../stats"

const chargers = [
  {
    id: 1,
    type: type.CHARGER,
    name: "Small Solar Panel",
    description: "A small basic charger",
    durability: 100,
    stats: newStats({
      [stats.BATTERY_CHARGE_RATE]: 10,
      [stats.BATTERY_EFFICIENCY]: 2
    })
  }
]

export default chargers
