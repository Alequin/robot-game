import {findByName} from "./find"

const mockComponents = [
  {
    name: "robot1",
    description: "a robot",
    other: "another stat"
  }
]

describe("source/robot/components/util/find.js", () => {
  test("Can find a component by name from a given list", () => {
    const expected = mockComponents[0]
    const actual = findByName(mockComponents, "robot1")
    expect(actual).toEqual(expected)
  })

  test("If component is not found returns null", () => {
    const actual = findByName(mockComponents, "not here stop looking")
    expect(actual).toBeNull()
  })
})
