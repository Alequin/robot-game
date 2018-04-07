import wheels from "./index"
import * as type from "./../../../../common/component-types"

describe("source/robot/components/wheels/index.js", () => {
  test("All wheels should have an id", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("id")
    })
  })
  test("All wheels should have a type of wheels", () => {
    wheels.forEach((wheel) => {
      expect(wheel.type).toEqual(type.WHEELS)
    })
  })
  test("All wheels should have a name", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("name")
    })
  })
  test("All wheels should have a description", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("description")
    })
  })
  test("All wheels should have a durability", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("durability")
    })
  })
  test("All wheels should have stats", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("stats")
    })
  })
})
