var button1 = document.getElementsByName("button1")[0];
button1.onclick = afficherSymbole ;
var tours = 1;
​
function afficherCroix()
{
  button1.insertAdjacentText('afterbegin','X')
}
function afficherRond()
{
  button1.insertAdjacentText('afterbegin','O')
}
function afficherSymbole(e)
{
  console.log(e)

  if (tours%2==0){
​
    afficherCroix()
  }
​
  else{
    afficherRond()
  }
}
