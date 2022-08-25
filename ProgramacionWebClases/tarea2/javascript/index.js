var cv = document.getElementById('myCanvas');
var ctx = cv.getContext('2d');

//cielo
ctx.beginPath();
ctx.arc(200,140, 50, 0, 2*Math.PI);
ctx.fillStyle='white';
ctx.fill();

ctx.beginPath();
ctx.arc(250,110, 50, 0, 2*Math.PI);
ctx.fillStyle='white';
ctx.fill();

ctx.beginPath();
ctx.arc(250,160, 50, 0, 2*Math.PI);
ctx.fillStyle='white';
ctx.fill();

ctx.beginPath();
ctx.arc(300,140, 50, 0, 2*Math.PI);
ctx.fillStyle='white';
ctx.fill();



ctx.beginPath();
ctx.arc(600,200, 50, 0, 2*Math.PI);
ctx.fillStyle='white';
ctx.fill();

ctx.beginPath();
ctx.arc(650,160, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(255,255,255,0.8)';
ctx.fill();

ctx.beginPath();
ctx.arc(650,200, 50, 0, 2*Math.PI);
ctx.fillStyle='white';
ctx.fill();

ctx.beginPath();
ctx.arc(700,160, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(255,255,255,0.8)';
ctx.fill();

//casa
ctx.beginPath();
ctx.fillStyle = 'white'
ctx.fillRect(300,600,340,200);

ctx.moveTo(470,450);
ctx.lineTo(300,600);
ctx.lineTo(640,600);
ctx.fill();
//garage
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.fillRect(640,680,150,120);

ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.moveTo(640,640);
ctx.lineTo(640,680);
ctx.lineTo(800,680);
ctx.fill();
//porton
ctx.fillRect(650,700,120,100);
//decoracion

ctx.beginPath();
ctx.strokeStyle = 'gray'
ctx.moveTo(445,470);
ctx.lineTo(495,470);

ctx.moveTo(415,500);
ctx.lineTo(525,500);

ctx.moveTo(380,530);
ctx.lineTo(560,530);

ctx.moveTo(350,560);
ctx.lineTo(590,560);

ctx.moveTo(315,590);
ctx.lineTo(630,590);

ctx.stroke();



//Puerta
ctx.beginPath();
ctx.fillStyle = 'rgb(128, 64, 0)';
ctx.fillRect(450,720, 50,80);


//ventanas
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(350,630, 50,80);
ctx.fillRect(550,630, 50,80);

ctx.beginPath();
ctx.strokeStyle = 'black'
ctx.moveTo(400,660);
ctx.lineTo(350,660);

ctx.moveTo(375,710);
ctx.lineTo(375,630);

ctx.moveTo(550,660);
ctx.lineTo(600,660);
ctx.moveTo(575,710);
ctx.lineTo(575,630);
ctx.stroke();

//Sol

ctx.beginPath();
ctx.arc(1500,140, 150, 0, 2*Math.PI);
ctx.fillStyle='yellow';
ctx.fill();

//arbol

ctx.beginPath();
ctx.fillStyle='rgb(128, 64, 0)';
ctx.fillRect(1200, 600, 60, 200)
ctx.fill();

ctx.beginPath();
ctx.arc(1180,630, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(0,255,0,0.7)';
ctx.arc(1200,550, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(0,255,0,0.7)';

ctx.arc(1250,600, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(0,255,0,0.7)';

ctx.arc(1300,580, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(0,255,0,0.7)';

ctx.arc(1200,630, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(0,255,0,0.7)';

ctx.arc(1120,600, 50, 0, 2*Math.PI);
ctx.fillStyle='rgba(0,255,0,0.7)';
ctx.fill();