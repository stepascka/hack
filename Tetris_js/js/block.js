var Block = {

	x:8,
	y:8,
	w: 21.375,
	h: 26,

	draw: function(xet, yet) {

		switch(chet % 5) {

            case 0:
            	ctx.drawImage(block_1, xet, yet, this.w, this.h);
               	break;
               	
            case 1:
            	ctx.drawImage(block_2, xet, yet, this.w, this.h);
               	break;
            case 2:
            	ctx.drawImage(block_3, xet, yet, this.w, this.h);
               	break;
            case 3:
            	ctx.drawImage(block_4, xet, yet, this.w, this.h);
               	break;
            case 4:
            	ctx.drawImage(block_5, xet, yet, this.w, this.h);
               	break;	
               	
        }
	},
}