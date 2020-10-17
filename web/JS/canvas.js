const canv = document.querySelector(".canvas")
const ctx = canv.getContext("2d")

console.dir(canv)

canv.width = canv.offsetWidth
canv.height = canv.offsetHeight

console.log("canv")

// export function draw (objects) {
// 	objects.forEach(item => item.draw())
// }

//export {canv, ctx}

export function render (map, ignoreObjects, level=null) {
	//console.log(map, map[level], level)
	//console.log('render', map[level])
	for (let row = 0; row < Object.keys(map[level]).length; row++) {
		//console.log('for')
		map[level][row].forEach(obj => {
			//console.log(ignoreObjects.includes(obj), obj, ignoreObjects)
			if (!ignoreObjects.includes(obj)) {
				obj.draw(ctx)
				//console.log(obj, "draw")
			}
		//ignoreObjects.includes(obj) ? undefined : obj.draw()
		})
		//console.log(row)
	}
}
export {canv}