import {stats, newStats} from "./index"

describe("source/server/robot/components/stats/stats.js", () => {
  test("Should return a blank slate stats object when no inital values are given", () => {
    const expected = {
      [stats.ARMOUR]: 0,
      [stats.WEIGHT]: 0,
      [stats.AGILITY]: 0,

      [stats.SHIELD_CHARGE_RATE]: 0,
      [stats.SHIELD_EFFICIENCY]: 0,
      [stats.SHIELD_CAPACITY]: 0,

      [stats.BATTERY_CHARGE_RATE]: 0,
      [stats.BATTERY_EFFICIENCY]: 0,
      [stats.BATTERY_CAPACITY]: 0
    }
    const actual = newStats()
    expect(actual).toEqual(expected)
  })

  describe("When given inital values", () => {
    test("Should set armour, weight and agility based on the inital values given", () => {
      const expected = {
        [stats.ARMOUR]: 100,
        [stats.WEIGHT]: 25,
        [stats.AGILITY]: 50,

        [stats.SHIELD_CHARGE_RATE]: 0,
        [stats.SHIELD_EFFICIENCY]: 0,
        [stats.SHIELD_CAPACITY]: 0,

        [stats.BATTERY_CHARGE_RATE]: 0,
        [stats.BATTERY_EFFICIENCY]: 0,
        [stats.BATTERY_CAPACITY]: 0
      }
      const actual = newStats({
        [stats.ARMOUR]: 100,
        [stats.WEIGHT]: 25,
        [stats.AGILITY]: 50,
      })
      expect(actual).toEqual(expected)
    })

    test(`Should set shield-capacity, shield-charge-rate and
      shield-charge-capacity based on the inital values given`, () => {

      const expected = {
        [stats.ARMOUR]: 0,
        [stats.WEIGHT]: 0,
        [stats.AGILITY]: 0,

        [stats.SHIELD_CHARGE_RATE]: 100,
        [stats.SHIELD_EFFICIENCY]: 50,
        [stats.SHIELD_CAPACITY]: 20,

        [stats.BATTERY_CHARGE_RATE]: 0,
        [stats.BATTERY_EFFICIENCY]: 0,
        [stats.BATTERY_CAPACITY]: 0
      }
      const actual = newStats({
        [stats.SHIELD_CHARGE_RATE]: 100,
        [stats.SHIELD_EFFICIENCY]: 50,
        [stats.SHIELD_CAPACITY]: 20,
      })
      expect(actual).toEqual(expected)
    })

    test(`Should set battery-capacity, battery-charge-rate and
      battery-charge-capacity based on the inital values given`, () => {
      const expected = {
        [stats.ARMOUR]: 0,
        [stats.WEIGHT]: 0,
        [stats.AGILITY]: 0,

        [stats.SHIELD_CHARGE_RATE]: 0,
        [stats.SHIELD_EFFICIENCY]: 0,
        [stats.SHIELD_CAPACITY]: 0,

        [stats.BATTERY_CHARGE_RATE]: 100,
        [stats.BATTERY_EFFICIENCY]: 50,
        [stats.BATTERY_CAPACITY]: 20
      }
      const actual = newStats({
        [stats.BATTERY_CHARGE_RATE]: 100,
        [stats.BATTERY_EFFICIENCY]: 50,
        [stats.BATTERY_CAPACITY]: 20,
      })
      expect(actual).toEqual(expected)
    })
  })

})
