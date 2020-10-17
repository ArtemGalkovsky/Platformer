class Hero {

}

export default class Platform {
	constructor (x, y, width, height, CTX) {
		this.x = x
		this.y = y
		this.width = width
		this.heigt = height
	}

	draw () {
		CTX.beginPath()
		CTX.fillStyle = "#fff"
		CTX.fillRect(x, y, width, height)
		CTX.fill()
		CTX.closePath()
	}
}
