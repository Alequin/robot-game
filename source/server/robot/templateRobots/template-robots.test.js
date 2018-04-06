import templateRobots from "./index"

describe("source/robot/template-robots/index.js", () => {
  test("All templateRobots should have an id", () => {
    templateRobots.forEach((templateRobot) => {
      expect(templateRobot).toHaveProperty("id")
    })
  })
  test("All templateRobots should have a name", () => {
    templateRobots.forEach((templateRobot) => {
      expect(templateRobot).toHaveProperty("name")
    })
  })
  test("All templateRobots should have a description", () => {
    templateRobots.forEach((templateRobot) => {
      expect(templateRobot).toHaveProperty("description")
    })
  })
  test("All templateRobots should have a chassy", () => {
    templateRobots.forEach((templateRobot) => {
      expect(templateRobot).toHaveProperty("chassy")
    })
  })
})
