var c=null;
var ctx=null;
var fig='arc';
var press=false;
var super_x=240;
var super_y=240;
var player1=null;
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

    ctx.fillStyle = 'aquamarine';
    ctx.fillRect(0,0,500,500);

    // ctx.fillStyle = 'black';
    // ctx.fillRect(super_x, super_y, 10, 10);      
    player1.dibujar(ctx);
    update();
}
function update(){
    player1.x += 10;
    if (player1.x>500){
        player1.x=0;
    }
    player1.y += 10;
    if (player1.y>500){
        player1.y=0;
    }
}
// document.addEventListener('keydown', function (e) {
//     console.log(e);
// // Arriba
//     if(e.keyCode==87 || e.keyCode==38){
//         super_y-=15;
//     }
// // Abajo
//     if(e.keyCode==83 || e.keyCode==40){
//         super_y+=15;
//     }
//     // Izquierda
//     if(e.keyCode==65 || e.keyCode==37){
//         super_x-=15;
//     }

//     // Derecha
//     if(e.keyCode==68 || e.keyCode==39){
//         super_x+=15;

//     }
//     paint();
// });

window.addEventListener('load', start);

function start(){
    c=document.getElementById("myCanvas");
    ctx=c.getContext("2d");
    player1 = new Cuadrado(super_x, super_y, 40, 40, 'red');
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
    
    this.dibujar = function(ctx){
        ctx.fillStyle = this.color;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }

}