define(['graphics','<%= grunt.file.readJSON('package.json').name + '_code' %>'], function (Graphics,Pattern) {

	var App = {}; 

    App = function(config){ 

    	this.self = this;
		this.ctx = null;
	
    }
    App.prototype.draw = function(){

    	this.ctx.clearRect(0,0,this.width, this.height);
    	
        Pattern.init(this.ctx);
    	
    }
    App.prototype.setup = function(id,width,height){

    	var c = this.initCanvas(id,width,height);
    	
    	this.initVars();
   		this.draw();

		return c;
    }
    App.prototype.initCanvas = function(id,width,height){
	
		canvas = document.createElement('canvas');
		canvas.setAttribute("id", id); 
		this.ctx = canvas.getContext('2d'); 
		
		canvas.width = width; 
		canvas.height = height;

		// document.body.appendChild(canvas); 
    	return canvas;
    }
    App.prototype.initVars = function(){
    	
    	_.extend(this.ctx,Graphics);	

	}
	return App
    
});