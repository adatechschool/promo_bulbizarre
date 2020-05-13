const jsonURL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'

const request = new XMLHttpRequest();
const header = document.querySelector('header');
request.open('GET', jsonURL);

request.responseType = 'json';
request.send();
request.onload = function() {
  const pokemon = request.response;
  console.log(pokemon);
  countPokemon(pokemon);
  //bigPokemon(pokemon);
  //sortWeight(pokemon);
  //evolutionPokemon(pokemon);
}

function countPokemon(pokemon) {
  let p1 = document.createElement('p');
  p1.testContent = pokemon;
  header.appendChild(p1);
}
