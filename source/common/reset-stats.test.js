import resetStats from "./reset-stats"
import {stats, newStats} from "./../server/robot/components/stats"

describe("source/common/reset-stats.js", () => {

  let mockRobot

  beforeEach(() => {
    mockRobot = {
      "chassy": {
        components: [],
        baseWeight: 50,
        componentCapacity: 4,
        stats: newStats({
          [stats.WEIGHT]: "bad value",
          [stats.ARMOUR]: "bad value",
          wrong: "bad value"
        })
      }
    }
  })

  test("should set all stats to zero and apply the base weight", () => {
    const expected = newStats({[stats.WEIGHT]: 50})
    const {chassy} = resetStats(mockRobot)
    expect(chassy.stats).toEqual(expected)
  })
})
