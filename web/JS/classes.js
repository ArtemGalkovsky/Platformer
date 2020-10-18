class Hero {
	constructor (x, y, w, h, color) {
		this.x = x
		this.y = y
		this.w = w
		this.h = h
		this.color = "#fff"
		this.dy = 0.5
		this.jumpCounter = 0
		this.doJump = false
		this.gravityCount = 0
	}

	draw (CTX) {
		//console.log(this.x, this.y, this.w, this.h)
		CTX.fillStyle = this.color
		CTX.fillRect(this.x, this.y, this.w, this.h)
	}

	move (side=null) {
		//console.log('Move', side)
		if (side === "right") {
			this.x += 5
		} else if (side === "left") {
			this.x -= 5
		} else if (side === "up") {
			this.doJump = true
		}

		if (this.jumpCounter > 0 && this.doJump === true) {
			this.jumpCounter -= this.dy
			this.y -= this.jumpCounter * this.dy
			this.gravityCount = 0
		} else {
			this.jumpCounter = 20
			this.doJump = false
			this.gravityCount++
			this.y += this.gravityCount * this.dy
		}

		//if (!)
	}

	collide (obj, canv) {
		let ignoreMove = []
		if (this.x < 0) {
			this.x = 0
			ignoreMove.push("left")
		} else if (this.x + this.w > canv.width) {
			this.x = canv.width - this.w
			ignoreMove.push("right")
		} else if (this.y < 0) {
			this.y = 0
			ignoreMove.push("up")
			this.doJump = false
			this.jumpCounter = 0
		} else if (this.y + this.h > canv.height) {
			this.y = canv.height - this.h
			ignoreMove.push("down")
			this.gravityCount = 0
		}
		//this.x < 0 ? this.x= 0; ignoreMove.push("left") : null
		//this.x + this.w> canv.width ? this.x = canv.width; ignoreMove.push("right") : null
		//this.y < 0 ? this.y = 0; ignoreMove.push("up") : null
		//this.y + this.h > canv.height ? this.y = canv.height; ignoreMove.push("down") : null
		// if (this.x < 0) {
		// 	this.x = 0
		// } else
		return ignoreMove
	}
}

class Platform {
	constructor (x, y, width, height, color) {
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.color = color
	}

	draw (CTX) {
		CTX.fillStyle = this.color
		CTX.fillRect(this.x, this.y, this.width, this.height)
	}
}

class Door {

}

export {Hero, Platform, Door}