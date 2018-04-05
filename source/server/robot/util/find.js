
function find(propertyToSearchBy){
  return (components, searchValue) => {
    const foundComponent = components.find((components) =>
      components[propertyToSearchBy] === searchValue
    )
    return foundComponent || null
  }
}

export const findById = find("id")
export const findByName = find("name")
