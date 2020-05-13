const jsonURL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'

const request = new XMLHttpRequest();

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

function countPokemon(jsonObj) {
  //for(i=0; i<length(pokemon[]); i++) {
   //return i
  //}
}
