var Figures = {

    numberFigure: 4, // номер фигуры

    B0_x: startX,
    B0_y: startY,

    angle: Math.PI/2,

    B1_x: 0,
    B1_y: 0,
    B2_x: 0,
    B2_y: 0,
    B3_x: 0,
    B3_y: 0,

    term_x: 0,
    summLine: 0,

    x: 0, 
    y: 0,
    fn: block_1,

    getRandom: function(min, max) {

        return Math.floor(Math.random()*(max-min)+min);
        //return 1;
    },

    coordinate: function() {

        switch(this.numberFigure) {

            case 1:
                this.B1_x = this.B0_x - 1;  this.B1_y = this.B0_y;
                this.B2_x = this.B0_x + 1;  this.B2_y = this.B0_y;
                this.B3_x = this.B0_x + 2;  this.B3_y = this.B0_y;
                break;
            case 2:
                this.B1_x = this.B0_x - 1;  this.B1_y = this.B0_y;
                this.B2_x = this.B0_x;      this.B2_y = this.B0_y - 1;
                this.B3_x = this.B0_x + 1;  this.B3_y = this.B0_y - 1;
                break;
            case 3:
                this.B1_x = this.B0_x - 1;   this.B1_y = this.B0_y - 1;
                this.B2_x = this.B0_x;       this.B2_y = this.B0_y - 1;
                this.B3_x = this.B0_x + 1;   this.B3_y = this.B0_y;
                break;
            case 4:
                this.B1_x = this.B0_x - 1;   this.B1_y = this.B0_y;
                this.B2_x = this.B0_x;       this.B2_y = this.B0_y - 1;
                this.B3_x = this.B0_x + 1;   this.B3_y = this.B0_y;
                break;
            case 5:
                this.B1_x = this.B0_x - 1;   this.B1_y = this.B0_y - 1;
                this.B2_x = this.B0_x - 1;   this.B2_y = this.B0_y;
                this.B3_x = this.B0_x + 1;   this.B3_y = this.B0_y;
                break;
            case 6:
                this.B1_x = this.B0_x - 1;   this.B1_y = this.B0_y;
                this.B2_x = this.B0_x + 1;   this.B2_y = this.B0_y;
                this.B3_x = this.B0_x + 1;   this.B3_y = this.B0_y - 1;
                break;
            case 7:
                this.B1_x = this.B0_x;       this.B1_y = this.B0_y - 1;
                this.B2_x = this.B0_x + 1;   this.B2_y = this.B0_y - 1;
                this.B3_x = this.B0_x + 1;   this.B3_y = this.B0_y;
                break;

        }
    },

    sin: function(t){

        if (t == 0){return 0;}
        else if (t == Math.PI/2){return 1;}
        else if (t == Math.PI){return 0;}
        else if (t == Math.PI*3/2){return -1;}
    },

    cos: function(t){

        if (t == 0){return 1;}
        else if (t == Math.PI/2){return 0;}
        else if (t == Math.PI){return -1;}
        else if (t == Math.PI*3/2){return 0;}
    },

    rotation: function() {


        this.term_x = this.B0_x + (this.B1_x - this.B0_x)*this.cos(this.angle) - (this.B1_y - this.B0_y)*this.sin(this.angle); //alert(this.B1_x); 
        this.B1_y = this.B0_y + (this.B1_x - this.B0_x)*this.sin(this.angle) + (this.B1_y - this.B0_y)*this.cos(this.angle); //alert(this.B1_y);
        this.B1_x = this.term_x;
        this.term_x = this.B0_x + (this.B2_x - this.B0_x)*this.cos(this.angle) - (this.B2_y - this.B0_y)*this.sin(this.angle); //alert(this.B2_x); 
        this.B2_y = this.B0_y + (this.B2_x - this.B0_x)*this.sin(this.angle) + (this.B2_y - this.B0_y)*this.cos(this.angle); //alert(this.B2_y);
        this.B2_x = this.term_x;
        this.term_x = this.B0_x + (this.B3_x - this.B0_x)*this.cos(this.angle) - (this.B3_y - this.B0_y)*this.sin(this.angle); //alert(this.B3_x);
        this.B3_y = this.B0_y + (this.B3_x - this.B0_x)*this.sin(this.angle) + (this.B3_y - this.B0_y)*this.cos(this.angle); //alert(this.B3_y);
        this.B3_x = this.term_x;

    },

    removeLine: function() {

        for (var i = 1; i < m+1; i++) {

            this.summLine += cell[i][removeY];
        }

        if (this.summLine == m) {

                for (var i = removeY; i>0; i--){
                    for (var j = 1; j<m+1; j++){

                        cell[j][i] = cell[j][i-1];
                    }
                }

                for (var j = 1; j<m+1; j++){

                    cell[j][0] = 0;
                }

            removeY ++;
            score += 10;
        }

            this.summLine = 0;
    },

    checkLine: function() {

        this.coordinate();
        this.rotation();
        if ((cell[this.B0_x][this.B0_y] == 0)  && (cell[this.B1_x][this.B1_y] == 0) && (cell[this.B2_x][this.B2_y] == 0) && (cell[this.B3_x][this.B3_y] == 0)) 
            {return false;}
        
        else {return true;}
    },

    putFigure: function() {

        cell[this.B0_x][this.B0_y] = 1;
        cell[this.B1_x][this.B1_y] = 1;
        cell[this.B2_x][this.B2_y] = 1;
        cell[this.B3_x][this.B3_y] = 1;

        switch((chet-1) % 5) {

            case 0:
                this.fn = block_1;
                break;
                
            case 1:
                this.fn = block_2;
                break;
            case 2:
                this.fn = block_3;
                break;
            case 3:
                this.fn = block_4;
                break;
            case 4:
                this.fn = block_5;
                break;  
                
        }

        fon[this.B0_x][this.B0_y] = this.fn;
        fon[this.B1_x][this.B1_y] = this.fn;
        fon[this.B2_x][this.B2_y] = this.fn;
        fon[this.B3_x][this.B3_y] = this.fn;
    },

    draw: function() {

        Block.draw((this.B0_x - 1)*Board.dx + Block.x, (this.B0_y)*Board.dy + Block.y);
        Block.draw((this.B1_x - 1)*Board.dx + Block.x, (this.B1_y)*Board.dy + Block.y);
        Block.draw((this.B2_x - 1)*Board.dx + Block.x, (this.B2_y)*Board.dy + Block.y);
        Block.draw((this.B3_x - 1)*Board.dx + Block.x, (this.B3_y)*Board.dy + Block.y);
    }
  
}