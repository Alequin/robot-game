import type from "./../../../../common/component-types"
import {stats, newStats} from "./../stats"

function newArmour({id, type, name, description, durability}){
  return {
    id,
    type,
    name,
    description,
    durability,
    stats: newStats({
      [stats.ARMOUR]: durability,
      [stats.WEIGHT]: 10
    })
  }
}

const armour = [
  newArmour({
    id: 1,
    type: type.ARMOUR,
    name: "Wooden Armour",
    description: "Armour made from wood",
    durability: 100
  })

]

export default armour
