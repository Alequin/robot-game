
function isSpaceForComponents(robot, count){
  const {chassy: {components, componentCapacity}} = robot
  return components.length+count <= componentCapacity
}

export default isSpaceForComponents
