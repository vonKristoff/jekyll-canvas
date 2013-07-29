define(['creativejs'],function(MATH){
	
	var bool = false;

	var pattern = {
		config:{
			ctx:true
		},
		init:function(ctx){
			this.config.ctx = ctx;
			
			this.render();
		},
		render:function(){
			var ctx = this.config.ctx,
				num = 150;
				step = 550/num,
				ratio = 1/num,
				col = Math.round(num/6),
				dol = Math.round(num/12),
			
			ctx.fillStyle = '#f00';		
			ctx.fillCircle(300,200,200);
			
	    	
		}
	};
	
	return pattern
})