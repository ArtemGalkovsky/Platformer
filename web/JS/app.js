import {canv, ctx, render, moveObj} from "./canvas.js"//draw} from "./canvas.js"
import {Platform, Hero} from "./classes.js"

var file 

function getFile (file_) {
	file = file_
	gameLoop()
}

window.getFile = getFile

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
				if (item === "-") {
					//console.log(levelObject)
					levelObject[level][row][index] = new Platform(0, 0, 30, 30, "#875300")
				}
			})
			row++
		}
	}
	var w, h, x, y
	Object.keys(levelObject).forEach(level => {
		Object.keys(levelObject[level]).forEach(row => {
			Object.keys(levelObject[level][row]).forEach(column => {
				if (typeof levelObject[level][row][column] === "object") {
					w = Math.round(canv.width / Object.keys(levelObject[level][row]).length)
					h = Math.round(canv.height / Object.keys(levelObject[level]).length)
					x = Math.round((canv.width / Object.keys(levelObject[level][row]).length) * column)
					y = Math.round((canv.height / Object.keys(levelObject[level]).length) * row)
					levelObject[level][row][column].y = y
					levelObject[level][row][column].x =  x
					levelObject[level][row][column].height = h 
					levelObject[level][row][column].width = w

				}
			})
		})
	})

	return [levelObject, w, h]//canv.width / Object.keys(levelObject[level][row]).length, )
}

var STATE = "start"
//var Levels

// var level = 1
var time = 0

//const hero = Hero(100, 100, )

var level, Levels
var hero
var ignoreMove = []
//var keysPressed = {}
var keysPressed = {}

function gameLoop () {

	// document.onkeydown = event => {
	// 		//console.log(event)
	// 		keysPressed[event] = true
	// }
	// console.log(keysPressed, "l")
	if (STATE === "start") {
		//[Levels, hero] 
		//console.log(
		//document.onkeydown = document.onkeyup = event => {
			//console.log(event)
			//keysPressed[event.key] = true
		//}//event => {moveObj(event, hero, ignoreMove)}//.addEventListener("keydown", event => {moveObj(event, hero, ignoreMove)})// console.log("Event")})
		
		document.addEventListener("keydown", event => {
			keysPressed[event.key] = true
		})//keysPressed[event.key] = true})

		document.addEventListener("keyup", event => {
			keysPressed[event.key] = false
		})

		level = 1
		let W, H
		[Levels, W, H] = mapDecoder(file, {}, canv.width, canv.height)//, "RETURN")
		hero = new Hero(100, 700, W - W/5, H - H/5)
		//console.log(Levels, hero)
		//console.dir(Hero)
		//console.log(Levels, W, H, "h")
		STATE = "ingame"
		//console.log(Levels)
	} else if (STATE === "ingame") {
		//console.log(Levels, level, "d")
		ctx.clearRect(0, 0, canv.width, canv.height)
		let platforms = render(Levels, ["0"], level)
		//console.dir(hero)
		//console(Platform)
		//console.dir(hero)
		ignoreMove = hero.collide(platforms, canv)
		hero.move(moveObj(keysPressed, ignoreMove))//keysPressed, ignoreMove))
		//console.log(keysPressed, "KP")
		hero.draw(ctx)
		
	}
	//console.log(keysPressed)
	//console.log(keysPressed)
	setTimeout(gameLoop, 16.6)//1000)
	//console.log("game")
}