import shields from "./index"
import {SHIELD} from "./../../../../common/component-types"

describe("source/robot/components/shields/index.js", () => {
  test("All shields should have an id", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("id")
    })
  })
  test("All shields should have a type equal to SHIELD", () => {
    shields.forEach((shield) => {
      expect(shield.type).toEqual(SHIELD)
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
  test("All shields should have a weight", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("weight")
    })
  })
  test("All shields should have a capacity", () => {
    shields.forEach((shield) => {
      expect(shield).toHaveProperty("capacity")
    })
  })
  test("All shields should have a recharge rate", () => {
    shields.forEach((shield) => {
      expect(shield.recharge).toHaveProperty("rate")
    })
  })
  test("All shields should have a recharge efficency", () => {
    shields.forEach((shield) => {
      expect(shield.recharge).toHaveProperty("efficency")
    })
  })
})
