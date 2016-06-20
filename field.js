function Field(elementId){	
	this.currentPoint = 0;
	this.currentPlayY = 10;
	
	this.ctx = document.getElementById(elementId).getContext('2d');
	
	this.draw = function(){
			this.ctx.fillStyle = "rgb(0, 153, 41)"
			this.ctx.fillRect(0, 0, 720, 300);
			this.fillEndZones();
			this.createLines();
	}
	
	this.createLines = function(){
		this.ctx.strokeStyle = "rgb(255, 255, 255)";
		this.ctx.lineWidth = 2;
		
		//create yard lines
		for(var i = 0; i < 11; i++){
			this.drawLine(60 + i*60);
		}
	}
	
 	this.drawLine = function(x){
		this.ctx.beginPath();
		this.ctx.moveTo(x, 0);
		this.ctx.lineTo(x, 300);
		this.ctx.stroke();
	}
	
	this.fillEndZones = function(){
		this.ctx.fillStyle = "Black";
		this.ctx.fillRect(0, 0, 60, 300);
		this.ctx.fillStyle = "Black";
		this.ctx.fillRect(660, 0, 60, 300);
		
	}
	
	this.setStartingPoint = function(yards){
		this.currentPoint = yards * 2 * 3 + 60;
	}
	
	
	
	
	
	
	
	this.draw();
}