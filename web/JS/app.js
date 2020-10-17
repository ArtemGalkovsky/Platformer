import {canv, ctx, draw} from "./canvas.js"
import Platform from "./classes.js"

//const map = 
//function getMap () {

var MAP = []

function getMapFile (map) {
	MAP = map
	//console.log(MAP)
	mapDecoder(MAP, {}, canv.width, canv.height)
}

eel.get_map_file("web/JS/maps.map")().then(file => {
	getMapFile(Array.from(file))
})

//console.log(MAP, "M")

//console.log(getMapFile(), "l")
//var mapFile = eel.get_map_file("web/JS/maps.map")()
//console.log(mapFile.then(file => {return file}))
//let mapFile = eel.get_map_file("web/JS/maps.map")()
//mapFile.then(file => {
//	return file
	//console.log(file, mapFile)
//})
//}

//console.log(mapFile.then(file => {console.log(file)}))

//getMap()

function mapDecoder (mapFile, levelObject, levelWidth, levelHight) {
	//console.log(mapFile)
	var row = 0
	var level
	for (let line of mapFile) {//= 0; line < mapFile.length; line++) {
		//console.log(line, "line")//(mapFile[line], "l")
		if (line.includes("#LEVEL")) {
			level = line.slice(line.indexOf("$") + 1, line.indexOf("$", line.indexOf("$") + 1))
			levelObject[level] = {}
			row = 0
			//console.log('LEVEL LINE', line, levelObject)
		}  else {
		levelObject[level][row] = line.trim().split("")//.forEach((item, index) => {
		levelObject[level][row].forEach((item, index) => {
			console.log(levelObject[level][row][item])
			if (item === "-") {
				levelObject[level][row][index] = new Platform(100, 100, 100, 100, ctx)
			}
		})
		//	if 
		//})
		// for (let item in levelObject[level][row].split()) {
		// 	if (item == 0) {
		// 		levelObject
		// 	} 
		// }
		row++
		//console.log(row)
		}
	}
	console.log(levelObject)
}

function render (LEVELS, ) {
	
}

//mapDecoder(mapFile, {}, canv.width, canv.height)