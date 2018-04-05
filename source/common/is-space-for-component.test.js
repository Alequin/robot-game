import isSpaceForComponent from "./is-space-for-component"

describe("source/common/should-add-component.js", () => {

  test("should return true when robot has space for components", () => {
    const mockRobot = {
      "chassy": {
        components: [{component: 1}, {component: 2}, {component: 3}],
        componentCapacity: 4,
      }
    }

    expect(isSpaceForComponent(mockRobot)).toBe(true)
  })

  test("should return false when robot does not have space for components", () => {
    const mockRobot = {
      "chassy": {
        components: [{component: 1}, {component: 2}, {component: 3}, {component: 4}],
        componentCapacity: 4,
      }
    }

    expect(isSpaceForComponent(mockRobot)).toBe(false)
  })

})
