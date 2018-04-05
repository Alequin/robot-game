import {findById} from "./find"

const mockComponents = [
  {
    id: 10,
    name: "robot1",
    description: "a robot",
    other: "another stat"
  }
]

describe("source/robot/components/util/find.js", () => {
  test("Can find a component by id from a given list", () => {
    const expected = mockComponents[0]
    const actual = findById(mockComponents, 10)
    expect(actual).toEqual(expected)
  })

  test("If component is not found returns null", () => {
    const actual = findById(mockComponents, -100)
    expect(actual).toBeNull()
  })
})
