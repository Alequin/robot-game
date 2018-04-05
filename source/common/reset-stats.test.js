import resetStats from "./reset-stats"

describe("source/common/reset-stats.js", () => {

  let mockRobot

  beforeEach(() => {
    mockRobot = {
      "chassy": {
        components: [],
        baseWeight: 50,
        componentCapacity: 4,
        stats: {
          armour: 0,
          shield: 0,
          totalWeight: 50,
          speed: 0,
          batteryChargeRate: 1,
          batteryCapacity: 100,
        }
      }
    }
  })

  test("should set all stats to zero and apply the base weight", () => {
    const expected = {
      armour: 0,
      shield: 0,
      totalWeight: 50,
      speed: 0,
      batteryChargeRate: 0,
      batteryCapacity: 0,
    }
    const {chassy: {stats}} = resetStats(mockRobot)
    expect(stats).toEqual(expected)
  })
})
