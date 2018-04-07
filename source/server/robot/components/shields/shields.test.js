import shields from "./index"
import type from "./../../../../common/component-types"

describe("source/robot/components/shields/index.js", () => {
  test("All shields should have an id", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("id")
    })
  })
  test("All shields should have a type equal to SHIELD", () => {
    shields.forEach((shield) => {
      expect(shield.type).toEqual(type.SHIELD)
    })
  })
  test("All shields should have a name", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("name")
    })
  })
  test("All shields should have a description", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("description")
    })
  })
  test("All shields should have a durability", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("durability")
    })
  })
  test("All shields should have stats", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("stats")
    })
  })
})
