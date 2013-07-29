define(function(){

	var Graphics = {};

	Graphics.circle = function(x, y, radius) { 
		this.beginPath(); 
		this.arc(x, y, radius, 0, Math.PI*2, true); 
	};
	Graphics.fillCircle = function(x, y, radius) { 
		this.circle(x, y, radius); 
		this.fill(); 
		this.beginPath();
	};
	Graphics.strokeCircle = function(x, y, radius) { 
		this.circle(x, y, radius); 
		this.stroke(); 
		this.beginPath();
	};
	Graphics.ellipse = function(x, y, width, height) { 
		this.beginPath(); 
		for(var i=0;i<Math.PI*2;i+=Math.PI/16) { 
			this.lineTo(x+(Math.cos(i)*width/2), y+(Math.sin(i)*height/2));
		}
		this.closePath(); 
	};
	Graphics.fillEllipse = function(x, y, width, height) { 
		this.ellipse(x,y,width, height); 
		this.fill(); 
		this.beginPath();
	};
	Graphics.strokeEllipse = function(x, y, width, height) { 
		this.ellipse(x,y,width, height); 
		this.stroke(); 
		this.beginPath();
	};

	Graphics.line = function(x1, y1, x2, y2){
		this.beginPath(); 
		this.moveTo(x1,y1); 
		this.lineTo(x2,y2); 
		this.stroke(); 
		this.beginPath();
	};

	return Graphics;

})