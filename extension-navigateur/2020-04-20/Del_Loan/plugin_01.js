
document.body.style.border = "5px solid black";

let h1 = document.getElementsByTagName("h1");
for (elt of h1) {
	elt.style.color = "blue";
}

let p = document.getElementsByTagName("p");
	for (elt of p) {
	elt.style.color = "red";
	elt.style.font = 'italic 20px arial,serif';
}

let img = document.getElementsByTagName("img");//faire un tableau des différentes images de la page.
  console.log(img)

  for (i = 0; i < img.length; i++) {
    console.log(img[i])//1 image précise selon l'index i du tableau img.
    img[i].style.border = "5px dotted black";//mettre une borure de 5 pixel en poitillé en noir autour de l'image
 }