var c=null;
var ctx=null;
var fig='arc';
var press=false;
var super_x=240;
var super_y=240;
var obstaculo1_x=70;
var obstaculo1_y=160;
var obstaculo2_x=90;
var obstaculo2_y=60;
var obstaculo3_x=440;
var obstaculo3_y=400;
var player1=null;
var player2=null;
var direction = 'right';
var score = 0;
var pause = false; 
var perder = false;
var obstaculo1 = null;
var obstaculo2 = null;
var obstaculo3 = null;
var obstaculos = [];
var speed = 2; 

function paint(){
    window.requestAnimationFrame(paint)
    
    ctx.fillStyle = 'red';
    ctx.fillRect(0,0,500,500);
    ctx.font = "40px Modeka";
    ctx.strokeText('Score: ' + score, 100,50);    
    
    //Players
    player1.dibujar(ctx);
    player2.dibujar(ctx);

    //Obstaculos
    obstaculo1.dibujar(ctx);
    obstaculo2.dibujar(ctx);
    obstaculo3.dibujar(ctx);
    if(pause){
        ctx.beginPath();
        ctx.fillStyle= "rgba(255,255,255,0.5)";
        ctx.fillRect(0,0,500,500);
        
        ctx.beginPath();
        ctx.fillStyle ='white';
        ctx.fillText("P A U S E", 180,230);
        speed = 0;
    }else{    
        update();
    }

    if(perder){
        ctx.beginPath();
        ctx.fillStyle= "rgba(255,255,255,0.5)";
        ctx.fillRect(0,0,500,500);
        
        ctx.beginPath();
        ctx.fillStyle ='black';
        ctx.fillText("Perdiste", 180,230);
    }
    else{    
        update();
    }
}
function update(){
    if(direction=='right'){
        player1.x += speed;
        if (player1.x>500){
            player1.x=0;
        }
    }
    if(direction == 'down'){
        player1.y += speed;
        if (player1.y>500){
            player1.y=0;
        }
    }

    if(direction=='left'){
        player1.x -= speed;
        if (player1.x<0){
            player1.x=500;
        }
    }
    if(direction=='up'){
        player1.y -= speed;
        if (player1.y<0){
            player1.y=500;
        }
    }
    if(player1.se_tocan(player2)){
        player2.x = generateRandomInteger(500);
        player2.y = generateRandomInteger(500);

        score +=10;
    }
    for(i = 0; i < obstaculos.length; i++){
        if(player1.se_tocan(obstaculos[i])){
            perder = true;
            speed = 0;
            console.log("Si jala");
        }
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
    //Pausa
    if(e.keyCode==32){ 
        pause = (pause)?false:true;
        speed = 2;
    }

});

window.addEventListener('load', start);

function start(){
    c=document.getElementById("myCanvas");
    ctx=c.getContext("2d");
    player1 = new Cuadrado(super_x, super_y, 40, 40, 'white');
    player2 = new Cuadrado(generateRandomInteger(500),generateRandomInteger(500), 40,40,'blue');
    
    obstaculo1 = new Cuadrado(obstaculo1_x,obstaculo1_y, 10,200,'yellow');
    obstaculo2 = new Cuadrado(obstaculo2_x, obstaculo2_y, 150,10,'yellow');
    obstaculo3 = new Cuadrado(obstaculo3_x, obstaculo3_y, 10,50,'yellow');
    obstaculos = [obstaculo1, obstaculo2, obstaculo3];
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