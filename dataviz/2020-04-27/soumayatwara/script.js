window.onload = function(){ // permet d'afficher le canvas dés qu'on ouvre le canvas

  /*  var canvas = document.createElement('canvas'); // on déclare une variable pour utiliser l'element qui va permettre de dessiner le canvas .
  canvas.width = 900;
  canvas.height = 600;
  canvas.style.border = "1px solid";
  document.body.appendChild(canvas);

  */
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
  console.log('fin de la fonction');
}
