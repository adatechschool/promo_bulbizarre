//source : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/JSON

const jsonURL = 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json'

const request = new XMLHttpRequest();
const header = document.querySelector('header');
request.open('GET', jsonURL);

request.responseType = 'json';
request.send();
request.onload = function() {
  const jsonObj = request.response;
  //affiche le nombre de pokemon
  console.log(jsonObj.pokemon.length);
  //affiche les pokemons qui ont un poids suppersieur à 11kg 
  bigPokemon(jsonObj);
  //affiche les pokémons par ordre croissant par rapport au poids
  sortWeight(jsonObj);
  //affiche les évolutions possible d'un pokemon
  evolutionPokemon(jsonObj);
  
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

function sortWeight(jsonObj) {
  let sortW = jsonObj.pokemon.sort(function(a,b) {
    return a.weught > b.weight;
  });
  console.log(sortW);
}

function evolutionPokemon(array) {
  for (i in array.pokemon) {
    console.log(array.pokemon[i].name);
    if(array.pokemon[i].next_evolution != null) {
      for(j in array.pokemon[i].next_evolution) {
      console.log(array.pokemon[i].next_evolution[j].name);
      }
    }
  }
}
