var GameMap = {
	x: 0,
	y: 0,
	w: canvas.width,
	h: canvas.heigth,
	

	draw: function() {
		ctx.drawImage(boardImage, this.x, this.y, 360, 240);
	},
}