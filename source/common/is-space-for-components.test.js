import isSpaceForComponents from "./is-space-for-components"

describe("source/common/should-add-component.js", () => {

  test("should return true when robot has space for components", () => {
    const mockRobot = {
      "chassy": {
        components: [{component: 1}, {component: 2}, {component: 3}],
        componentCapacity: 4,
      }
    }

    expect(isSpaceForComponents(mockRobot, 1)).toBe(true)
  })

  test("should return false when robot does not have space for one component", () => {
    const mockRobot = {
      "chassy": {
        components: [{component: 1}, {component: 2}, {component: 3}, {component: 4}],
        componentCapacity: 4,
      }
    }

    expect(isSpaceForComponents(mockRobot, 1)).toBe(false)
  })

  test("should return false when robot does not have enough space for two components", () => {
    const mockRobot = {
      "chassy": {
        components: [{component: 1}, {component: 2}, {component: 3}],
        componentCapacity: 4,
      }
    }

    expect(isSpaceForComponents(mockRobot, 2)).toBe(false)
  })

})
