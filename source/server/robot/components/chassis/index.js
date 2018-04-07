import stats from "./../stats/stats"
import newStats from "./../stats/new-stats"

const chassis = [
  newChassy({
    id: 1,
    name: "Small Chassy",
    description: "A small chassy with a few component slots",
    baseWeight: 50,
    componentCapacity: 4,
  })
]

function newChassy({id, name, description, baseWeight, componentCapacity}){
  return {
    id,
    name,
    description,
    componentCapacity,
    components: [],
    baseWeight: baseWeight,
    stats: newStats([stats.WEIGHT]: baseWeight)
  }
}

export default chassis
