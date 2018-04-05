
function isSpaceForComponent(robot){
  const {chassy: {components, componentCapacity}} = robot
  return components.length < componentCapacity
}

export default isSpaceForComponent
