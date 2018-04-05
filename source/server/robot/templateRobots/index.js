import chassies from "./../components/chassis"
import weapons from "./../components/weapons"
import {findById} from "./../util/find"

const smallRobot = {
  "id": 1,
  "name": "Small Robot",
  "description": "A small fighting robot",
  "chassy": findById(chassies, 1)
}

const weapon = findById(weapons, 1)

module.exports = [
  smallRobot
]
