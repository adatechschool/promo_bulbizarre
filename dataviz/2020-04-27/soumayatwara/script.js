function AddZero(num) {
  return (num >= 0 && num < 10) ? "0" + num : num + "";
}

window.onload = function(){ // permet d'afficher le canvas dés qu'on ouvre le canvas

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("image");
  ctx.drawImage(img , 0, 0, 880, 580);



    var now = new Date();
    var strDateTime = [
        [AddZero(now.getHours()),
        AddZero(now.getMinutes()),
        AddZero(now.getSeconds())].join(":")].join(" ");
    document.getElementById("Console").innerHTML = strDateTime;

    ctx.beginPath();
    ctx.arc(150, 106, 50, 0, Math.PIx2, false);
    ctx.fillStyle = 'rgb(0, 0, 255)';
    ctx.fill();
    ctx.closePath();
};
