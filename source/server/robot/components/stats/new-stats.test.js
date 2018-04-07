import {stats, newStats} from "./index"

describe("source/server/robot/components/stats/stats.js", () => {
  test("Should return a blank slate stats object when no inital values are given", () => {
    const expected = {
      [stats.ARMOUR]: 0,
      [stats.SHIELD]: 0,
      [stats.WEIGHT]: 0,
      [stats.AGILITY]: 0,
      [stats.BATTERY_CHARGE_RATE]: 0,
      [stats.BATTERY_EFFICIENCY]: 0,
      [stats.BATTERY_CAPACITY]: 0
    }
    const actual = newStats()
    expect(actual).toEqual(expected)
  })

  describe("When given inital values", () => {
    test("Should set armour, shield and weight based on the inital values given", () => {
      const expected = {
        [stats.ARMOUR]: 100,
        [stats.SHIELD]: 50,
        [stats.WEIGHT]: 25,
        [stats.AGILITY]: 0,
        [stats.BATTERY_CHARGE_RATE]: 0,
        [stats.BATTERY_EFFICIENCY]: 0,
        [stats.BATTERY_CAPACITY]: 0
      }
      const actual = newStats({
        [stats.ARMOUR]: 100,
        [stats.SHIELD]: 50,
        [stats.WEIGHT]: 25,
      })
      expect(actual).toEqual(expected)
    })

    test("Should set agility, battery-charge-rate and battery-capacity based on the inital values given", () => {
      const expected = {
        [stats.ARMOUR]: 0,
        [stats.SHIELD]: 0,
        [stats.WEIGHT]: 0,
        [stats.AGILITY]: 100,
        [stats.BATTERY_CHARGE_RATE]: 50,
        [stats.BATTERY_EFFICIENCY]: 200,
        [stats.BATTERY_CAPACITY]: 25
      }
      const actual = newStats({
        [stats.AGILITY]: 100,
        [stats.BATTERY_CHARGE_RATE]: 50,
        [stats.BATTERY_CAPACITY]: 25,
        [stats.BATTERY_EFFICIENCY]: 200,
      })
      expect(actual).toEqual(expected)
    })
  })

})
