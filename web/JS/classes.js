class Hero {

}

export default class Platform {
	constructor (x, y, width, height, color) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.color = color
	}

	draw (CTX) {
		//CTX.beginPath()
		//console.log("draw")
		//console.log('draw', this.x, this.y, this.width, this.height)
		CTX.fillStyle = this.color//"#fff"
		CTX.fillRect(this.x, this.y, this.width, this.height)
		//CTX.fill()
		//CTX.closePath()
	}
}
