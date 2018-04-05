import chassis from "./index"
import {CHASSY} from "./../../../../common/component-types"

describe("source/robot/components/chassies/index.js", () => {
  test("All chassis should have an id", () => {
    chassis.forEach((chassy) => {
      expect(chassy).toHaveProperty("id")
    })
  })
  test("All chassis should have a type equal to CHASSY", () => {
    chassis.forEach((chassy) => {
      expect(chassy.type).toEqual(CHASSY)
    })
  })
  test("All chassis should have a name", () => {
    chassis.forEach((chassy) => {
      expect(chassy).toHaveProperty("name")
    })
  })
  test("All chassis should have a description", () => {
    chassis.forEach((chassy) => {
      expect(chassy).toHaveProperty("description")
    })
  })
  test("All chassis should have a base weight", () => {
    chassis.forEach((chassy) => {
      expect(chassy).toHaveProperty("baseWeight")
    })
  })
  test("All chassis should have components", () => {
    chassis.forEach((chassy) => {
      expect(chassy).toHaveProperty("components")
    })
  })
  test("All chassis should have a component capacity", () => {
    chassis.forEach((chassy) => {
      expect(chassy).toHaveProperty("componentCapacity")
    })
  })
  test("All chassis should have a total weight", () => {
    chassis.forEach((chassy) => {
      expect(chassy.stats).toHaveProperty("totalWeight")
    })
  })
  test("All chassis should have an armour rating", () => {
    chassis.forEach((chassy) => {
      expect(chassy.stats).toHaveProperty("armour")
    })
  })
  test("All chassis should have an shield rating", () => {
    chassis.forEach((chassy) => {
      expect(chassy.stats).toHaveProperty("shield")
    })
  })
  test("All chassis should have an speed rating", () => {
    chassis.forEach((chassy) => {
      expect(chassy.stats).toHaveProperty("speed")
    })
  })
  test("All chassis should have an battery charge rate", () => {
    chassis.forEach((chassy) => {
      expect(chassy.stats).toHaveProperty("batteryChargeRate")
    })
  })
  test("All chassis should have an battery battery capacity", () => {
    chassis.forEach((chassy) => {
      expect(chassy.stats).toHaveProperty("batteryCapacity")
    })
  })
})
