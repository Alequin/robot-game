import weapons from "./index"
import type from "./../../../../common/component-types"

describe('source/robot/components/weapons/index.js', () => {
  test("All weapons should have an id", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("id")
    })
  })
  test("All weapons should have a type equal to WEAPON", () => {
    weapons.forEach((weapon) => {
      expect(weapon.type).toEqual(type.WEAPON)
    })
  })
  test("All weapons should have a name", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("name")
    })
  })
  test("All weapons should have a description", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("description")
    })
  })
  test("All weapons should have a durability", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("durability")
    })
  })
  test("All weapons should have stats", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("stats")
    })
  })
  test("All weapons should have a baseDamage", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("baseDamage")
    })
  })
  test("All weapons should have a cooldown", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("cooldown")
    })
  })
  test("All weapons should have a energyCost", () => {
    weapons.forEach((weapon) => {
      expect(weapon).toHaveProperty("energyCost")
    })
  })
});
