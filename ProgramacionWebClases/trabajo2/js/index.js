var c=null;
var ctx=null;
var fig='arc';
var press=false;
var super_x=240;
var super_y=240;
var player1=null;
var player2=null;
var direction = 'right';
var score = 0;
//Circulo

// c.addEventListener('click', function(e){
//     console.log(e);
//     ctx.beginPath();
//     ctx.fillStyle = color;
//     ctx.arc(e.offsetX-10, e.offsetY-10,  30, 0, 2*Math.PI);
//     ctx.stroke();
//     ctx.fill();
// })


//color

// c.addEventListener('mouseover', (event) => {
//     color = random_rgba();
// });

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


// c.addEventListener('mouseout', function(e){
//     fig = (fig=='arc')?'rec':'arc';
// })


// c.addEventListener('click', function(e){
//     console.log(e);
//     ctx.fillStyle = color;
//     if(fig=='arc'){
//         ctx.beginPath();
//         ctx.arc(e.offsetX-10, e.offsetY-10,  30, 0, 2*Math.PI);
//         ctx.stroke();
//         ctx.fill();
//     }else{
//         ctx.fillRect (e.offsetX-10, e.offsetY-10, 55,50);
//     }
// })


// c.addEventListener('mousemove', (event) => {
//     ctx.fillStyle = 'black';
//     ctx.fillRect(event.offsetX-5, event.offsetY-5, 10, 10);
// });


// c.addEventListener('mousemove', (event) => {
//     if(press){
//         ctx.fillStyle = 'black';
//         ctx.fillRect(event.offsetX-5, event.offsetY-5, 10, 10);      
//     }
// });



// c.addEventListener('mousedown', (event) => {
//     press=true;
// });

// c.addEventListener('mouseup', (event) => {
//     press=false;
// });



function paint(){
    window.requestAnimationFrame(paint)

    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,500,500);

    ctx.strokeText('Score: ' + score, 50,50);
    // ctx.fillStyle = 'black';
    // ctx.fillRect(super_x, super_y, 10, 10);      
    player1.dibujar(ctx);

    player2.dibujar(ctx);
    update();
}
function update(){

    if(direction=='right'){
        player1.x += 1;
        if (player1.x>500){
            player1.x=0;
        }
    }
    if(direction == 'down'){
        player1.y += 1;
        if (player1.y>500){
            player1.y=0;
        }
    }

    if(direction=='left'){
        player1.x -= 1;
        if (player1.x<0){
            player1.x=500;
        }
    }
    if(direction=='up'){
        player1.y -= 1;
        if (player1.y<0){
            player1.y=500;
        }
    }
    if(player1.se_tocan(player2)){
        player2.x = generateRandomInteger(500);
        player2.y = generateRandomInteger(500);

        score +=10;
    }
    
}
document.addEventListener('keydown', function (e) {
    console.log(e);
// Arriba
    if(e.keyCode==87 || e.keyCode==38){
        direction = 'up';
    }
// Abajo
    if(e.keyCode==83 || e.keyCode==40){
        direction = 'down';
    }
    // Izquierda
    if(e.keyCode==65 || e.keyCode==37){
        direction = 'left';
    }

    // Derecha
    if(e.keyCode==68 || e.keyCode==39){
        direction = 'right';

    }
});

window.addEventListener('load', start);

function start(){
    c=document.getElementById("myCanvas");
    ctx=c.getContext("2d");
    player1 = new Cuadrado(super_x, super_y, 40, 40, 'white');
    player2 = new Cuadrado(generateRandomInteger(500),generateRandomInteger(500), 40,40,'blue');
    paint();
}

window.requestAnimationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 17);
        };
}());

function Cuadrado(x,y,w,h,color){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color= color;
    this.se_tocan = function (target) { 



        if(this.x < target.x + target.w &&
        
           this.x + this.w > target.x && 
        
           this.y < target.y + target.h && 
        
           this.y + this.h > target.y)
        
        {
        
        return true;  
        
        }  
        
        };
    
    this.dibujar = function(ctx){
        ctx.fillStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }


}

function generateRandomInteger(max){
    return Math.floor(Math.random() * max);
}