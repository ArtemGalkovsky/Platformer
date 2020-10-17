import {canv, render} from "./canvas.js"//draw} from "./canvas.js"
import Platform from "./classes.js"

var file 

function getFile (file_) {
	//console.log(file_, "F")
	file = file_
	//console.log(file, file_, "gml")
	gameLoop()
	//mapDecoder(file, Levels, canv.width, canv.height)
}

window.getFile = getFile

//var Levels = {}

function mapDecoder (mapFile, levelObject, levelWidth, levelHeight) {
	let row = 0
	let level = 1
	for (let line of mapFile) {
		if (line.includes("#LEVEL")) {
			level = line.slice(line.indexOf("$") + 1, line.indexOf("$", line.indexOf("$") + 1))
			levelObject[level] = {}
			row = 0
		}  else {
			levelObject[level][row] = line.trim().split("")
			levelObject[level][row].forEach((item, index) => {
			//console.log(levelObject[level][row][item])
				if (item === "-") {
					//console.log(canv.height - Math.round(canv.height / row))
					//console.log((canv.height / Object.keys(levelObject[level]).length), canv.height, Object.keys(levelObject[level]).length, "l", Object.keys(levelObject[level]), levelObject[level])
					console.log(levelObject)
					levelObject[level][row][index] = new Platform(0, 0, 30, 30, "#875300")//canv.height - Math.round(canv.height / row), 30, 30, "#875300")//400, 400, 800, 800, "#875300")
				}
			})
			row++
		}
	}

	Object.keys(levelObject).forEach(level => {
		Object.keys(levelObject[level]).forEach(row => {
			Object.keys(levelObject[level][row]).forEach(column => {
				if (typeof levelObject[level][row][column] === "object") {//Platform) {
					//console.log((canv.width / Object.keys(levelObject[level][row]).length) * levelObject[level][row].indexOf(column), "x", (canv.width / Object.keys(levelObject[level][row]).length), column)//levelObject[level][row].indexOf(column), column)
					levelObject[level][row][column].y = (canv.height / Object.keys(levelObject[level]).length) * row 
					levelObject[level][row][column].x = (canv.width / Object.keys(levelObject[level][row]).length) * column//levelObject[level][row].indexOf(column)
					levelObject[level][row][column].height = canv.height / Object.keys(levelObject[level]).length//).length 
					levelObject[level][row][column].width = canv.width / Object.keys(levelObject[level][row]).length

				}
				//console.log(levelObject[level][row][column], "c", typeof levelObject[level][row][column], (canv.height / Object.keys(levelObject[level]).length) * row, canv.height / Object.keys(levelObject[level]).length)//column, "c")
			})
		})
		// Object.keys(level).forEach(row => {
			// Object.keys
		//})
	})
	//console.log(levelObject)
	//Levels = levelObject
	return levelObject
}

// function render (map, ignoreObjects, level=null) {
// 	console.log(map, map[level], level)
// 	for (let row = 0; row < map[level].length; row++)
// 	map[level][row].forEach(obj => {
// 		ignoreObjects.includes(obj) ? undefined : obj.update()
// 	})
// 	//map.forEach(obj => {
// 	//	ignoreObjects.includes(obj) ? undefined : obj.update()

// 	//})
// }

var STATE = "start"
var Levels

var level = 1

var time = 0
function gameLoop () {
	if (STATE === "start") {
		Levels = mapDecoder(file, {}, canv.width, canv.height)
		STATE = "ingame"
		console.log(Levels)
	} else if (STATE === "ingame") {
		//console.log("ingame")
		render(Levels, ["0"], level)
	}

	setTimeout(gameLoop, 1000)
	console.log("game")
	//console.log('game')
	//setTimeout(() => {requestAnimationFrame(gameLoop)}, )//16.6)
	//console.log(STATE)
	//console.log('game')
}