import chassis from "./../components/chassis"
import weapons from "./../components/weapons"
import armours from "./../components/armours"

import {findById} from "./../util/find"
import addComponents from "./../../../common/add-components"

function newRobot({id, name, description, chassy, components}){
  const robot = {
    id,
    name,
    description,
    chassy
  }

  return addComponents(robot, components)
}

const robots = [
  newRobot({
    id: 1,
    name: "smallRobot",
    description: "A small fighting robot",
    chassy: findById(chassis, 1),
    components: [findById(weapons, 1)]
  }),
  newRobot({
    id: 2,
    name: "Armour Robot",
    description: "A small fighting robot with armout",
    chassy: findById(chassis, 1),
    components: [findById(weapons, 1), findById(armours, 1)]
  })
]

module.exports = robots
