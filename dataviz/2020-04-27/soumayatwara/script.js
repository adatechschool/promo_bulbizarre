window.onload = function(){ // permet d'afficher le canvas dés qu'on ouvre le canvas

  var canvas;
  var ctx;                                            // initialisation du canvas

  function init(){

    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    var img = document.getElementById("image");
    ctx.drawImage(img , 0, 0, 880, 580);
  }
                                                // Feuilles couleurs et leurs tailles
/*  function getRandomInt(max) {
     let variableAletoire = Math.floor(Math.random() * Math.floor(max))
     return variableAletoire;
  }*/

 function getRndInteger(min, max) {

  let variableAletoire = Math.floor(Math.random() * (max - min) ) + min;
    return variableAletoire
}

function getRndInteger2(min, max) {

let variableAletoire2 = Math.floor(Math.random() * (max - min) ) + min;
  return variableAletoire2
}

  function dessinFeuilleOrange(){
    let positionFeuille = getRndInteger(95,880)
    let positionFeuille2 = getRndInteger2(95,380)

    console.log("positionFeuille = " + positionFeuille2)
    ctx.beginPath();
    ctx.lineWidth = '400';
    ctx.fillStyle = '#EC9116';
    ctx.arc(positionFeuille/*y*/,positionFeuille2/*x*/,15 /*taille rayon*/,0,2*Math.PI);
    ctx.fill();
  }

  function dessinFeuilleVert(){
    //salut c'est florian j'écris n'importe quoi
    ctx.beginPath();
    ctx.lineWidth = '400';
    ctx.fillStyle = '#208129';
    ctx.arc(positionFeuille/*y*/,positionFeuille/*x*/,15 /*taille rayon*/,0,2*Math.PI);
    ctx.fill();
  }

  function dessinFeuilleJaune(){

    ctx.beginPath();
    ctx.lineWidth = '400';
    ctx.fillStyle = '#FCFC29';
    ctx.arc(positionFeuille/*y*/,positionFeuille/*x*/,15 /*taille rayon*/,0,2*Math.PI);
    ctx.fill();
  }

  function dessinFeuilleRouge(){

    ctx.beginPath();
    ctx.lineWidth = '400';
    ctx.fillStyle = '#E61D1D';
    ctx.arc(positionFeuille/*y*/,positionFeuille/*x*/,15 /*taille rayon*/,0,2*Math.PI);
    ctx.fill();
  }
                                                // Fonction heure
  function dessinerFeuille()

 {
    var date = new Date();
    var heure = date.getHours();
    console.log("heure = " + heure) ;

    if(heure > 0 && heure < 6){
      console.log("je dessine une feuille rouge");
      dessinFeuilleRouge();
    }
    if(heure <= 6 && heure >= 12){
        console.log("je dessine une feuille verte");
        dessinFeuilleVert();
    }
    if(heure > 12 && heure < 18){
      console.log("je dessine une feuille jaune");
      dessinFeuilleJaune();
    }
    if (heure > 18 && heure < 23) {
      console.log("je dessine une feuille orange");
      dessinFeuilleOrange();
    }

    /*
    dessinFeuilleVert();
    dessinFeuilleJaune();
    dessinFeuilleOrange();
    dessinFeuilleRouge();

    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    if(minutes < 10)
         minutes = "0" + minutes;

    if(secondes < 10)
      secondes = "0" + secondes;
    return heure + "h" + minutes + "min" + secondes;
    */
 }

  init();
  dessinerFeuille();


  //document.getElementById("lhr").innerHTML = heure();

  setInterval(dessinerFeuille,5000);

};
