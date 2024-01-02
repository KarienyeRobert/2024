let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;

canvas.height = innerHeight;
canvas.width = innerWidth;

canvas.style.background = "#ffa";

context.fillStyle = "blue";

context.fillRect(300,0,100,200);
context.fillRect(100,500,100,200);

// context.beginPath();
// context.strokeStyle= "red";
// context.lineWidth = 20 ;
// context.arc(100,100,50,0,Math.PI*2, false);
// context.stroke();
// context.closePath();

class Circle{
    constructor(xpos, ypos, radius, color, text){
       this.xpos = xpos;
       this.ypos = ypos;
       this.radius = radius;
       this.color = color;
       this.text = 'Text';
    }
    draw(context){
        context.beginPath();
        
        context.strokeStyle = this.color;
        context.textAlign = 'center';
        context.baseLine = 'middle';
        context.font = '20px Arial ';
        context.fillText(this.text, this.xpos, this.ypos);

        context.lineWidth = 5 ;
        context.arc(this.xpos, this.ypos, this.radius, 0 , Math.PI * 2);
        context.stroke();
        context.closePath();
    }
}

let circle_Counter = 1;

let all_Circles = [];
let createCircle = function (Circle){
    Circle.draw(context);
}

for (var n = 0; n < 10; n++){
    let random_x = Math.random()* window_width;
    let random_y = Math.random()* window_height;
    let my_Circle = new Circle(random_x ,random_y ,50 ,'black', circle_Counter);
    all_Circles.push(my_Circle);
    createCircle(all_Circles[n]);
    circle_Counter++;
}


