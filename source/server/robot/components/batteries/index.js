import * as type from "./../../../../common/component-types"
import {stats, newStats} from "./../stats"

const battery = [
  {
    id: 1,
    type: type.BATTERY,
    name: "Small Battery",
    description: "A basic battery",
    durability: 100,
    stats: newStats({
      [stats.BATTERY_CAPACITY]: 150
    })
  }
]

export default battery
