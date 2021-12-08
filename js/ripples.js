class Ripple{
    constructor(xx, yy){
        this.x = xx;
        this.y = yy;
        this.radius = 5;
    }

    playRipple() {
        var radius = 2;
        //var water;
        var waterLight;
        var waterShadow;
        
        //water = color(136,221,221,50);
        frameRate(10);
        noFill();
        strokeWeight((windowWidth/100)+(random(3,2+(this.y-this.x)/20)));
        radius+=10;
        if (radius < windowWidth)  {
        waterLight = color(195,238,238, (windowWidth/1.5-radius));
        waterShadow = color(106,213,213, (windowWidth/3-radius));
        
        stroke(waterShadow);
        ellipse(this.x, this.y, radius-20, radius-20);
        ellipse(this.x, this.y, radius+20, radius+20);
        
        radius += (random(((this.x)/6), ((windowWidth-this.x)/6)));
        stroke(waterLight);
        ellipse(this.x, this.y, radius, radius);
        }
    }
  
   render() {
        ellipse(this.x,this.y, 200,200)
        let water = color(136,221,221,70);
        background(water);
        this.playRipple();
        console.log(this.x);
   }
}

