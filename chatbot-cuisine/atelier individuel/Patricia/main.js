function chercherInfos() {
	fetch(
		"https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
	)
		.then((resolve) => resolve.json())
		.then((infos) => {
			// console.log(infos);

			// combien y’a-t-il de pokemon dans les données ?
			console.log(
				"il y a " + (infos.pokemon.length) + " Pokemons dans cette array."
			);

			for (let i = 0; i < infos.pokemon.length; i++) {
				const pokemonName = infos.pokemon[i].name;
				console.log(pokemonName);

				// quels sont ceux dont le poids est supérieur à 10 kg ?

				var pokemonsPoids = infos.pokemon[i].weight;
				var pokemonsPoidsNum = +pokemonsPoids.replace(" kg", "");
				console.log(pokemonsPoidsNum);

				if (pokemonsPoidsNum > 10) {
					console.log(infos.pokemon[i].name + " pèse plus que 10kg");
				} else {
					console.log(infos.pokemon[i].name + " pèse moins que 10kg");
				}
			}
		});
}

chercherInfos();
