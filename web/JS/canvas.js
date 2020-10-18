const canv = document.querySelector(".canvas")
const ctx = canv.getContext("2d")

console.dir(canv)

canv.width = canv.offsetWidth
canv.height = canv.offsetHeight

console.log("canv")

export function moveObj (keys, ignoreMove) {//(event, ignoreMove) {//obj, ignoreMove) {
	//console.log(event, event.key)
	// console.log('move', keys)
	// for (let key in Object.keys(keys)) {
		// console.log(key.key, "k")
	//console.log(keys)
	for (let key of Object.keys(keys)) {
		console.log(key, "key", keys, ignoreMove)
		if (["W", "w", "arrowUp", " "].includes(key) && !ignoreMove.includes("up") && keys[key] === true) {// === "W") {
				//obj.move("up")
			return "up"
				//return "up"
		} else if (["S", "s", "arrowDown"].includes(key) && !ignoreMove.includes("down") && keys[key] === true) {// === "S") {
				//return "down"
				//obj.move("down")
			return "down"
		} else if (["A", "a", "arrowLeft"].includes(key) && !ignoreMove.includes("left") && keys[key] === true) {// === "A") {
				//return "left"
				//obj.move("left")
			return "left"
		} else if (["D", "d", "arrowRight"].includes(key) && !ignoreMove.includes("right") && keys[key] === true) {// === "D") {
				//return "right"
				//obj.move("right")
			return "right"
		}
	}
}

export function render (map, ignoreObjects, level=null) {
	//console.log(map, )
	let platforms = []
	for (let row = 0; row < Object.keys(map[level]).length; row++) {
		map[level][row].forEach(obj => {
			if (!ignoreObjects.includes(obj)) {
				obj.draw(ctx)
				platforms.push(obj)
			}
		})
	}
	return platforms
}
export {canv, ctx}