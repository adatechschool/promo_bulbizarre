//source : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

const jsonURL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'

const request = new XMLHttpRequest();
const header = document.querySelector('header');
request.open('GET', jsonURL);

request.responseType = 'json';
request.send();
request.onload = function() {
  const pokemon = request.response;
  console.log(pokemon);
  console.log(pokemon.pokemon);
  countPokemon(pokemon);
  //bigPokemon(pokemon);
  //sortWeight(pokemon);
  //evolutionPokemon(pokemon);
}

function countPokemon(pokemon) {
   for(let i = 0; i < pokemon.length; i++) {
    console.log(pokemone.name);
  }
  
  //let p1 = document.createElement('p');
  //p1.testContent = pokemon;
  //header.appendChild(p1);
}

/*
pokemon.sort(function(a, b) {
    return a.weight > b.weight;
});

console.log(data);
*/
