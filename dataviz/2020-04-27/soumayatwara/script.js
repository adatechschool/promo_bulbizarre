function AddZero(num) {
  return (num >= 0 && num < 10) ? "0" + num : num + "";
}

function draw(){  // permet d'afficher le canvas dés qu'on ouvre le canvas

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  var img = document.getElementById("image");
  ctx.drawImage(img , 0, 0, 880, 580);


  // dessein pour la feuille

  ctx.beginPath();
  ctx.lineWidth = '400';
  ctx.fillStyle = '#A4A';
  ctx.arc(150/*y*/,85/*x*/,50 /*taille rayon*/,0,2*Math.PI);
  ctx.fill();


    var now = new Date();
    var strDateTime = [
        [AddZero(now.getHours()),
        AddZero(now.getMinutes()),
        AddZero(now.getSeconds())].join(":")].join(" ");
    document.getElementById("Console").innerHTML = strDateTime;


}
setInterval(draw,10);
