import batteries from "./index"
import {BATTERY} from "./../../../../common/component-types"

describe("source/robot/components/batteries/index.js", () => {
  test("All batteries should have an id", () => {
    batteries.forEach((battery) => {
      expect(battery).toHaveProperty("id")
    })
  })
  test("All batteries should have a type equal to BATTERY", () => {
    batteries.forEach((battery) => {
      expect(battery.type).toEqual(BATTERY)
    })
  })
  test("All batteries should have a name", () => {
    batteries.forEach((battery) => {
      expect(battery).toHaveProperty("name")
    })
  })
  test("All batteries should have a description", () => {
    batteries.forEach((battery) => {
      expect(battery).toHaveProperty("description")
    })
  })
  test("All batteries should have a durability", () => {
    batteries.forEach((battery) => {
      expect(battery).toHaveProperty("durability")
    })
  })
  test("All batteries should have a capacity", () => {
    batteries.forEach((battery) => {
      expect(battery).toHaveProperty("capacity")
    })
  })
})
