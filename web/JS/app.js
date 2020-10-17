import {canv, ctx, draw} from "./canvas.js"
import Platform from "./classes.js"

var MAP = []
var Levels

function getMapFile () {
	console.log('get')
	eel.get_map_file("web/JS/maps.map")().then(file =>{
		mapDecoder(file, {}, canv.width, canv.height)
	})
	//mapDecoder(mapDecoder(file.then(file => {}), {}, canv.width, canv.height))
	//console.log(file.then(value => {get})
	//console.log('End')
	//file = file.then(file => {
		//MAP = getMapFile(Array.from(file))
	//	console.log('FILE GET', file)
		//return file
	//})
	//console.log(file, "f")
	//console.log(file["[[PromiseResult]]"])
}

//let file = eel.get_map_file("web/JS/maps.map")()
//file.then(file => {
//	MAP = getMapFile(Array.from(file))
//	console.log('FILE GET', MAP)
//})
getMapFile()

//console.log(MAP, "MAP")

// mapDecoder(MAP, {}, canv.width, canv.height)

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