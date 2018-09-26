// Abner 2018-09-26 帮助通用类

// Find components downward
function findComponentsDownward (context, componentName, components = []) {
  const childrens = context.$children

  if (childrens.length) {
    childrens.forEach(child => {
      const name = child.$options.name
      const childs = child.$children

      if (name === componentName) components.push(child)
      if (childs.length) {
        const findChilds = findComponentsDownward(child, componentName, components)
        if (findChilds) components.concat(findChilds)
      }
    })
  }
  return components
}
export {findComponentsDownward}
