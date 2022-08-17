var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var fig='arc';
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

c.addEventListener('mouseover', (event) => {
    color = random_rgba();
});

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


c.addEventListener('mouseout', function(e){
    fig = (fig=='arc')?'rec':'arc';
})


c.addEventListener('click', function(e){
    console.log(e);
    ctx.fillStyle = color;
    if(fig=='arc'){
        ctx.beginPath();
        ctx.arc(e.offsetX-10, e.offsetY-10,  30, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fill();
    }else{
        ctx.fillRect (e.offsetX-10, e.offsetY-10, 55,50);
    }
})