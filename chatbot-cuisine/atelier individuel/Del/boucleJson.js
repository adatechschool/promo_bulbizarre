//source : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

const jsonURL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'

const request = new XMLHttpRequest();
const header = document.querySelector('header');
request.open('GET', jsonURL);

request.responseType = 'json';
request.send();
request.onload = function() {
  const jsonObj = request.response;
  //affiche le nombre de pokemon dans la console
  console.log(jsonObj.pokemon.length);
  //affiche les pokemons qui ont un poids suppersieur à 11kg dans la console
  bigPokemon(jsonObj);
  //affiche les pokémons par ordre croissant par rapport au poids
  jsonObj.pokemon.sort(function(a, b) {
    return a.weight > b.weight;
  });
  console.log(jsonObj.pokemon);
  //affiche les évolutions possible d'un pokemon
  //evolutionPokemon(pokemon);
}

  
function bigPokemon(array) {
  for (i in array.pokemon) {
    const pWeight = parseInt(array.pokemon[i].weight, 10);
    if (pWeight > 10) {
      console.log(array.pokemon[i].name);
      console.log(array.pokemon[i].weight);
    }
  }
}


