import {canv, ctx, draw} from "./canvas.js"
import Platform from "./classes.js"
//import { FILE } from "./link.js"

//var MAP

function getFile (file, type) {
	console.log(file, "F")
	//MAP = file
}

window.getFile = getFile

//console.log(MAP)

//console.log(FILE)

//console.log(getFile("web/JS/maps.map"), "func")

var Levels

//let map = []

//console.log(map, "map")

function mapDecoder (mapFile, levelObject, levelWidth, levelHight) {
	var row = 0
	var level
	for (let line of mapFile) {
		if (line.includes("#LEVEL")) {
			level = line.slice(line.indexOf("$") + 1, line.indexOf("$", line.indexOf("$") + 1))
			levelObject[level] = {}
			row = 0
		}  else {
		levelObject[level][row] = line.trim().split("")
		levelObject[level][row].forEach((item, index) => {
			console.log(levelObject[level][row][item])
			if (item === "-") {
				levelObject[level][row][index] = new Platform(100, 100, 100, 100, ctx)
			}
		})
		row++
		}
	}
	console.log(levelObject)
	Levels = levelObject
	render()
}

function render (LEVELS, ) {
	console.log(LEVELS, "L")
	//requestAnimationFrame(render)
}

//render(Levels, "L")//levelObject)