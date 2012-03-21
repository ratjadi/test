
function screenStationary (sprite) {
	this.lastWindowX = (document.all)?window.screenLeft:window.screenX;
	this.lastWindowY = (document.all)?window.screenTop:window.screenY;
	this.spriteDestinationX=0;
	this.spriteDestinationY=0;
	this.moveTimer = 0;
	this.changeTimer;
	this.Sprite = sprite;
	
	this.spriteDestinationX=this.Sprite.position().left;
	this.spriteDestinationY=this.Sprite.position().top;
	
};


screenStationary.prototype.checkPosition = function () {
	
	diff = this.windowDiff();	

	if (Math.abs(diff.distance) > 0) {
		
		this.lastWindowX = diff.winX;
		this.lastWindowY = diff.winY;
		this.spriteDestinationX += diff.dX;
		this.spriteDestinationY += diff.dY;
		
		actdiffX = this.Sprite.position().left - this.spriteDestinationX;
		actdiffY = this.Sprite.position().top - this.spriteDestinationY;
		duration = Math.min((1.00/Math.sqrt((actdiffX*actdiffX) + (actdiffY*actdiffY)))*100000,500);

		this.Sprite.animate(
					{"left": this.spriteDestinationX, "top": this.spriteDestinationY},
					{
					    duration: duration,
						complete: function(){
		      				clearTimeout(this.moveTimer);
							clearTimeout(this.changeTimer);
					      	this.moveTimer = setTimeout(this.checkPosition.bind(this), 20);
					    }.bind(this)
					}
		);
		this.changeTimer = setTimeout(this.checkWindowMoveDuringAnimation.bind(this),150);
	}
	else {
		this.moveTimer = setTimeout(this.checkPosition.bind(this), 20);
	}
	
}

screenStationary.prototype.checkWindowMoveDuringAnimation = function () {
  	if (Math.abs(this.windowDiff().distance) > 70) {
      	//console.log("kill");
		clearTimeout(this.moveTimer);
		clearTimeout(this.changeTimer);
		$("#pic").stop(); 
      	this.moveTimer = setTimeout(this.checkPosition.bind(this), 10);
	}
	else {
		this.changeTimer = setTimeout(this.checkWindowMoveDuringAnimation.bind(this),150);
	}	
}

screenStationary.prototype.windowDiff = function () {
	winX = (document.all)?window.screenLeft:window.screenX;
	winY = (document.all)?window.screenTop:window.screenY;
	
	diffX = this.lastWindowX - winX;
	diffY = this.lastWindowY - winY;
	
	var result = {
		distance: Math.sqrt((diffX*diffX)+(diffY*diffY)),
		dX: diffX,
		dY: diffY,
		winX: winX,
		winY: winY
	}
	return(result);
}

screenStationary.prototype.start = function () {
	this.moveTimer = setTimeout(this.checkPosition.bind(this), 20);
}
	
