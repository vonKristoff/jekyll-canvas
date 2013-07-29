define(function(){

	var resources = {

		random:function(min, max) { 
			if(min===undefined) { 
				min = 0; 
				max = 1; 
			} else if(max=== undefined) { 
				max = min; 
				min = 0; 
			}
			return (Math.random() * (max-min)) + min;
		},
		randomInteger:function(min, max) {
			if(max===undefined) {
				max = min; 
				min = 0; 
			}
			return Math.floor(Math.random() * (max+1-min)) +min;
		},
		clamp:function(value, min, max) { 
			if(max<min) { 
				var temp = min; 
				min = max; 
				max = temp; 
			}
			return Math.max(min, Math.min(value, max)); 
		},
		map:function(value, min1, max1, min2, max2, clampResult) { 
			var returnvalue = ((value-min1) / (max1 - min1) * (max2-min2)) + min2; 
			if(clampResult) return this.clamp(returnvalue, min2, max2); 
			else return returnvalue; 
		},
		dist:function(x1, y1, x2, y2) { 
			x2-=x1; y2-=y1; 
			return Math.sqrt((x2*x2) + (y2*y2)); 
		},
		scale: function(value, inMin, inMax, outMin, outMax) {
	    	var inSpan = inMax - inMin;
	    	var outSpan = outMax - outMin;
	    	var valueScaled = (value - inMin) / inSpan;
	    	return outMin + (valueScaled * outSpan);
	    },
	    dist2D: function(a, b) { // faster than dist
	        var dx = a.x - b.x;
	        var dy = a.y - b.y;
	        return dx*dx + dy*dy;
	    },
		radians:function(deg) {return deg*Math.PI/180;}, 
		degrees:function(rad) {return rad*180/Math.PI;},
		rgb:function(r, g, b) { return 'rgb('+this.clamp(Math.round(r),0,255)+', '+this.clamp(Math.round(g),0,255)+', '+this.clamp(Math.round(b),0,255)+')';},
		rgba:function(r, g, b, a) { return 'rgba('+this.clamp(Math.round(r),0,255)+', '+this.clamp(Math.round(g),0,255)+', '+this.clamp(Math.round(b),0,255)+', '+this.clamp(a,0,1)+')';},
		hsl:function(h, s, l) { return 'hsl('+h+', '+this.clamp(s,0,100)+'%, '+this.clamp(l,0,100)+'%)';},
		hsla:function(h, s, l, a) { return 'hsla('+h+', '+this.clamp(s,0,100)+'%, '+this.clamp(l,0,100)+'%, '+this.clamp(a,0,1)+')';}
	};

	return resources;
});