function AddZero(num) {
  return (num >= 0 && num < 10) ? "0" + num : num + "";
}

window.onload = function(){ // permet d'afficher le canvas dés qu'on ouvre le canvas

  /*  var canvas = document.createElement('canvas'); // on déclare une variable pour utiliser l'element qui va permettre de dessiner le canvas .
  canvas.width = 900;
  canvas.height = 600;
  canvas.style.border = "1px solid";
  document.body.appendChild(canvas);


  console.log('je suis dans la fonction');
  let canvas = document.getElementById('c1');
  let ctx = canvas.getContext('2d');
  let image = document.getElementById('arbre');
  let drawingImage = function(){
    console.log('je suis avant le canvas.drawImage');
    canvas.drawImage(image, 75, 25, 800, 500);

    console.log('je suis dans la fonction drawingImage');
  }

  image.addEventListener('load', drawingImage, false);
  console.log('fin de la fonction');*/

  /*var c = document.getElementById("c1");
  var ctx = c.getContext("2d");
  var img = document.getElementById("image");
  ctx.drawImage(img, 100, 100);*/


  //function heure() {
    var now = new Date();
    var strDateTime = [
        [AddZero(now.getHours()),
        AddZero(now.getMinutes()),
        AddZero(now.getSeconds())].join(":")].join(" ");
    document.getElementById("Console").innerHTML = strDateTime;
//}
};
