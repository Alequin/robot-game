import wheels from "./index"
import {WHEELS} from "./../../../../common/component-types"

describe("source/robot/components/wheels/index.js", () => {
  test("All wheels should have an id", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("id")
    })
  })
  test("All wheels should have a type of wheels", () => {
    wheels.forEach((wheel) => {
      expect(wheel.type).toEqual(WHEELS)
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
  test("All wheels should have a weight", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("weight")
    })
  })
  test("All wheels should have a speed", () => {
    wheels.forEach((wheel) => {
      expect(wheel).toHaveProperty("speed")
    })
  })
})
