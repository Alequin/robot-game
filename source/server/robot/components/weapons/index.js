import type from "./../../../../common/component-types"
import {stats, newStats} from "./../stats"

const weapons = [
  {
    id: 1,
    type: type.WEAPON,
    name: "Air Soft Gun",
    description: "A simple pellet gun",
    durability: 100,
    stats: newStats({[stats.WEIGHT]: 10}),
    baseDamage: 100,
    cooldown: 2,
    energyCost: 3
  }
]

export default weapons
