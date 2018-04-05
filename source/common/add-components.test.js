import addComponents from "./add-components"
import {ARMOUR} from "./component-types"

describe("source/robot/util/addComponents.js", () => {

  describe("When the robot has no components", () => {
    let mockRobot
    let mockArmour
    let mockArmour1

    beforeEach(() => {
      mockRobot = {
        "chassy": {
          components:[],
          baseWeight: 50,
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
      }

      mockArmour = {
        type: ARMOUR,
        durability: 100,
        weight: 5
      }

      mockArmour1 = {
        type: ARMOUR,
        durability: 500,
        weight: 20
      }
    })

    test("Can add a component to a robot", () => {
      const expected = [mockArmour]
      const {addedComponents, robot} = addComponents(mockRobot, [mockArmour])
      expect(addedComponents).toEqual(true)
      expect(robot.chassy.components).toEqual(expected)
    })

    test("Can add multiple components to a robot", () => {
      const expected = [mockArmour, mockArmour1]
      const {addedComponents, robot} = addComponents(mockRobot, [mockArmour, mockArmour1])
      expect(addedComponents).toEqual(true)
      expect(robot.chassy.components).toEqual(expected)
    })

    test("Cannot add multple component to a robot if the capacity is passed", () => {
      const expected = []
      const componentsToAdd = [mockArmour,mockArmour,mockArmour,mockArmour,mockArmour]
      const {addedComponents, robot} = addComponents(mockRobot, componentsToAdd)
      expect(addedComponents).toEqual(false)
      expect(robot.chassy.components).toEqual(expected)
    })

    describe("When component is added the robots stats are changes accordingly", () => {
      test("Adding armour increases armour and total weight", () => {
        const {addedComponents, robot: {chassy}} = addComponents(mockRobot, [mockArmour])
        expect(chassy.stats.armour).toEqual(100)
        expect(chassy.stats.totalWeight).toEqual(55)
      })
    })
  })


  describe("When the robot already has components", () => {

    let mockRobot
    let mockArmour
    let mockArmour1

    beforeEach(() => {
      mockArmour = {
        type: ARMOUR,
        durability: 100,
        weight: 5
      }

      mockArmour1 = {
        type: ARMOUR,
        durability: 500,
        weight: 20
      }

      mockRobot = {
        "chassy": {
          components: [mockArmour],
          baseWeight: 50,
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
      }
    })

    test("it appends new components to the robot when adding", () => {
      const expected = [mockArmour, mockArmour1]
      const {addedComponents, robot} = addComponents(mockRobot, [mockArmour1])
      expect(addedComponents).toEqual(true)
      expect(robot.chassy.components).toEqual(expected)
    })
  })
})
