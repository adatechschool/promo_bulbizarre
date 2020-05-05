function draw() {
/*var now = new Date();
var strDateTime = [
  [AddZero(now.getHours()),
    AddZero(now.getMinutes()),
    AddZero(now.getSeconds())].join(":")].join("");
document.getElementById("console").innerHTML = strDateTime;*/

ctx.clearRect(0, 0, canvas.width, canvas.height);
//for (i=0; i<10; i++){
point.drawPoint();
//}
  }
  setInterval(draw,10);