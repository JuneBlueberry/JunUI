// Abner 2018-09-26 帮助通用类

// 判断参数是否是其中之一
export function oneOf (value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}

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

// Find component downward
function findComponentDownward (context, componentName) {
  const childrens = context.$children
  let children = null

  if (childrens.length) {
    childrens.forEach(child => {
      const name = child.$options.name
      if (name === componentName) {
        children = child
      }
    })

    for (let i = 0; i < childrens.length; i++) {
      const child = childrens[i]
      const name = child.$options.name
      if (name === componentName) {
        children = child
        break
      } else {
        children = findComponentDownward(child, componentName)
        if (children) break
      }
    }
  }
  return children
}
export {findComponentDownward}

// Find components upward
function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
export {findComponentUpward}


//Get clientWidth
function getClientWidth (min, max, domid) {
  let width
  if(domid != undefined){
    width = document.getElementsByClassName(domid)[0].clientWidth
  }else{
    width = document.body.clientWidth
  }
  
  if(min != undefined && min != '' && min > 0){
    if(width < min){
      return min
    }
  }
  if(max != undefined && max != '' && max > 0){
    if(width > max){
      return max
    }
  }
  return width
}
export {getClientWidth}
