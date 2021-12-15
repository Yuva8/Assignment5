class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    Circle(){
        console.log("this is circle")
    }
    Circle(radius){
        console.log("this is radius")
    }
    Circle(radius,color){
        console.log(this.radius,this.color)
    }
    getRadius(){
        console.log("this is the radius of the cicrle " + this.radius)
    }
    setRadius(newradius){
        this.radius = newradius;
        console.log(this.radius)
    }
    getcolor(){
        console.log("this is the color of the cicrle " + this.color)
    }
    setcolor(newcolor){
        this.color = newcolor;
        console.log(this.color)
    }
    tostring(){
        console.log(`Circle radius is ${this.radius} Circle color is ${this.color}`)
    }
    getArea(){
        console.log((Math.PI*this.radius*this.radius).toFixed(2))
    }
    getCircumference(){
        console.log((2*Math.PI*this.radius).toFixed(2))
    }
    

}
var circle1 = new Circle(2,"red");
circle1.Circle()
circle1.getRadius()
circle1.setRadius(5)
circle1.getcolor()
circle1.setcolor("yellow")
circle1.tostring()
circle1.getArea()
circle1.getCircumference()
