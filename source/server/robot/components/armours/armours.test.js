import armours from "./index"
import * as type from "./../../../../common/component-types"

describe("source/robot/components/armours/index.js", () => {
  test("All armours should have an id", () => {
    armours.forEach((armour) => {
      expect(armour).toHaveProperty("id")
    })
  })
  test("All armours should have a type equal to ARMOUR", () => {
    armours.forEach((armour) => {
      expect(armour.type).toEqual(type.ARMOUR)
    })
  })
  test("All armours should have a name", () => {
    armours.forEach((armour) => {
      expect(armour).toHaveProperty("name")
    })
  })
  test("All armours should have a description", () => {
    armours.forEach((armour) => {
      expect(armour).toHaveProperty("description")
    })
  })
  test("All armours should have a durability", () => {
    armours.forEach((armour) => {
      expect(armour).toHaveProperty("durability")
    })
  })
  test("All armours should have stats", () => {
    armours.forEach((armour) => {
      expect(armour).toHaveProperty("stats")
    })
  })
})
