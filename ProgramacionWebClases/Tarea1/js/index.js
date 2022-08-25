// Pintar un cuadrado con canvas
var cv = document.getElementById('myCanvas');
var ctx = cv.getContext('2d');
// Lineas
ctx.fillStyle= "rgb(0, 0, 0)";
// Pierna derecha
ctx.moveTo(600,350);
ctx.lineTo(530,350);
ctx.lineTo(560,500);
ctx.lineTo(600,500);
//Pierna Izquierda
ctx.moveTo(450,350);
ctx.lineTo(530,350);
ctx.lineTo(480,500);
ctx.lineTo(440,500);
ctx.moveTo(270,280);
ctx.lineTo(390,280);
ctx.fill();

//Torso
ctx.fillStyle = "rgba(201, 27, 27, 0.70)";
ctx.fillRect(450,190,150,160);
ctx.strokeRect(450,190,150,160);

// Texto Playera
ctx.beginPath();
ctx.font = "40px Modeka";
ctx.strokeText("GAP", 490, 260,100);
//cuello
ctx.fillStyle = "rgb(239, 193, 148)";
ctx.fillRect(510,170,40,35);
//cabeza
ctx.beginPath();
ctx.arc(530, 125, 60, 0, 2*Math.PI);
ctx.fillStyle = "rgb(239, 193, 148)";
ctx.fill();


// Mangas
//Derecha
ctx.beginPath();
ctx.moveTo(600,190);
ctx.lineTo(650,240);
ctx.lineTo(600,270);
ctx.fillStyle = "rgba(15, 3, 1, 0.7)";
ctx.stroke()
ctx.fill();
//Izquierda
ctx.beginPath();
ctx.moveTo(449,190);
ctx.lineTo(400,240);
ctx.lineTo(449,270);
ctx.fillStyle = "rgba(15, 3, 1, 0.7)";
ctx.stroke()
ctx.fill();

// Brazos

// Izquierda
ctx.beginPath();
ctx.moveTo(450,300);
ctx.lineTo(450,240);
ctx.lineTo(400,240);
ctx.fillStyle = "rgb(239, 193, 148)";
ctx.fill();

// Derecha
ctx.beginPath();
ctx.moveTo(600,300);
ctx.lineTo(650,240);
ctx.lineTo(600,240);
ctx.fillStyle = "rgb(239, 193, 148)";
ctx.fill();

// cara
//Sonrisa
ctx.beginPath();
ctx.arc(520, 145, 20, 1, 1*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.arc(500, 140, 4, 0, 1*Math.PI);
ctx.stroke();

// Ojos
ctx.beginPath();
ctx.arc(510, 115, 10, 0, 2*Math.PI);
ctx.fillStyle='black';
ctx.fill();
ctx.beginPath();
ctx.arc(548, 115, 10, 0, 2*Math.PI);
ctx.fillStyle='black';
ctx.fill();

// Lentes

ctx.fillStyle = "rgba(201, 27, 27, 0.70)";
ctx.strokeRect(492,100,35,30);

ctx.fillStyle = "rgba(201, 27, 27, 0.70)";
ctx.strokeRect(532,100,35,30);

ctx.beginPath();
ctx.moveTo(472,110);
ctx.lineTo(492,110);
ctx.moveTo(588,110);
ctx.lineTo(566,110);

ctx.moveTo(528,110);
ctx.lineTo(532,110);

ctx.stroke();

//Zapatos

ctx.fillStyle = "rgba(201, 27, 27, 0.70)";
ctx.strokeRect(560,500,60,20);
ctx.fillRect(560,500,60,20);

ctx.fillStyle = "rgba(201, 27, 27, 0.70)";
ctx.strokeRect(420,500,60,20);
ctx.fillRect(420,500,60,20);

//Pelo

ctx.beginPath();
ctx.arc(470, 100, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(475, 95, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(480, 85, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(485, 80, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(493, 72, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(500,68, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(510,65, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(505,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(520,55, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(515,50, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(530,50, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(525,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(530,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(535,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(540,55, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(545,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(550,65, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();
ctx.beginPath();

ctx.arc(555,70, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(560,73, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(565,78, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(570,83, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(575,88, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(580,93, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(101, 62, 53, 0.8)";
ctx.fill();

ctx.beginPath();
ctx.arc(585,98, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

//Pelo mas oscuro
ctx.beginPath();
ctx.arc(470, 100, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(475, 95, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(480, 85, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(485, 80, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(493, 72, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(500,68, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(510,65, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(505,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(520,55, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(515,50, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(530,50, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(525,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(530,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(535,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(540,55, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(545,60, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(550,65, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();
ctx.beginPath();

ctx.arc(555,70, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(560,73, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(565,78, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(570,83, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(575,88, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(580,93, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();

ctx.beginPath();
ctx.arc(585,98, 10, 0, 2*Math.PI);
ctx.fillStyle = "rgba(71, 46, 40, 0.3)";
ctx.fill();