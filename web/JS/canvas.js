const canv = document.querySelector(".canvas")
const ctx = canv.getContext("2d")

console.log("canv")

export function draw (objects) {
	objects.forEach(item => item.draw())
}

export {canv, ctx}