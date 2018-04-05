import chargers from "./index"
import {CHARGER} from "./../../../../common/component-types"

describe("source/robot/components/chargers/index.js", () => {
  test("All chargers should have an id", () => {
    chargers.forEach((charger) => {
      expect(charger).toHaveProperty("id")
    })
  })
  test("All chargers should have a type equal to CHARGER", () => {
    chargers.forEach((charger) => {
      expect(charger.type).toEqual(CHARGER)
    })
  })
  test("All chargers should have a name", () => {
    chargers.forEach((charger) => {
      expect(charger).toHaveProperty("name")
    })
  })
  test("All chargers should have a description", () => {
    chargers.forEach((charger) => {
      expect(charger).toHaveProperty("description")
    })
  })
  test("All chargers should have a durability", () => {
    chargers.forEach((charger) => {
      expect(charger).toHaveProperty("durability")
    })
  })
  test("All chargers should have a recharge rate", () => {
    chargers.forEach((charger) => {
      expect(charger.recharge).toHaveProperty("rate")
    })
  })
  test("All chargers should have a recharge efficency", () => {
    chargers.forEach((charger) => {
      expect(charger.recharge).toHaveProperty("efficency")
    })
  })
})
