const el = wp.element.createElement

function makeIcon(iconObject) {
    let iconArray = iconObject.icon
    let width = iconArray[0]
    let height = iconArray[1]
    let path = iconArray[4]
    return el('svg', { viewBox: `0,0,${width},${height}`},
        el('path', { d: path })
    )
}

export { makeIcon }