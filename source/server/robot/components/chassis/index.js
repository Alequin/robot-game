import {CHASSY} from "./../../../../common/component-types"

const chassis = [
  {
    id: 1,
    type: CHASSY,
    name: "Small Chassy",
    description: "A small chassy with a few component slots",
    baseWeight: 50,
    components:[],
    componentCapacity: 4,
    stats: {
      armour: 0,
      shield: 0,
      totalWeight: 50,
      speed: 0,
      batteryChargeRate: 1,
      batteryCapacity: 100,
    }
  }
]

export default chassis
