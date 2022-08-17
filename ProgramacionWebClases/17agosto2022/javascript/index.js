var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
// var gradient=ctx.createLinearGradient(0,0,250,0);
// gradient.addColorStop(0,"white");
// gradient.addColorStop(0.5,"red");
// gradient.addColorStop(1,"black");
// ctx.fillStyle= gradient;
// ctx.fillRect(20,20,250,100);

// var grd = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
// grd.addColorStop(0, "black");
// grd.addColorStop(1, "white");

// Fill with gradient
// ctx.fillStyle = grd;
// ctx.fillRect(10, 10, 150, 100);

//Images

var img = document.getElementById('image');
ctx.drawImage(img, 0,0)