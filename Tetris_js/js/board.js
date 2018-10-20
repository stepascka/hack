var Board = {

	dx: 21.375,
	dy: 27,

	clean: function(){

		for (var i = 1; i < m+1; i++){
    		for (var j = 0; j < n; j++){
        		
        		cell[i][j] = 0;
			}
		}
	},

	draw: function() {

		for (var i = 1; i < m+1; i++){
    		for (var j = 0; j < n; j++){
        		
        		if (cell[i][j] == 1){
        			
        			ctx.drawImage(fon[i][j], (i-1)*this.dx + Block.x, (j)*this.dy + Block.y, Block.w, Block.h);
        		}
			}
		}
		
	},

	text: function(){

		pass;
	},
}