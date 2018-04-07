import addComponents from "./add-components"
import type from "./component-types"
import {stats, newStats} from "./../server/robot/components/stats"

describe("source/robot/util/addComponents.js", () => {

  describe("When the robot has no components", () => {
    let mockRobot
    let mockComponent
    beforeEach(() => {
      mockComponent = {
        stats: newStats()
      }

      mockRobot = {
        "chassy": {
          components:[],
          baseWeight: 50,
          componentCapacity: 4,
          stats: newStats({[stats.WEIGHT]: 50})
        }
      }
    })

    test("Can add a component to a robot", () => {
      const expected = [mockComponent]
      const robot = addComponents(mockRobot, [mockComponent])
      expect(robot.chassy.components).toEqual(expected)
    })

    test("Can add multiple components to a robot", () => {
      const expected = [mockComponent,mockComponent]
      const robot = addComponents(mockRobot, [mockComponent,mockComponent])
      expect(robot.chassy.components).toEqual(expected)
    })

    test("Cannot add multple component to a robot if the capacity is passed", () => {
      const componentsToAdd = [mockComponent,mockComponent, mockComponent,mockComponent, mockComponent]
      const actual  = () => addComponents(mockRobot, componentsToAdd)
      expect(actual).toThrow()
    })
  })

  describe("When the robot already has components", () => {
    let mockRobot
    let mockComponent
    beforeEach(() => {
      mockComponent = {
        stats: newStats()
      }

      mockRobot = {
        "chassy": {
          components:[mockComponent],
          baseWeight: 50,
          componentCapacity: 4,
          stats: newStats({[stats.WEIGHT]: 50})
        }
      }
    })
    test("it appends new components to the robot when adding", () => {
      const expected = [mockComponent, mockComponent]
      const robot = addComponents(mockRobot, [mockComponent])
      expect(robot.chassy.components).toEqual(expected)
    })
  })
})
