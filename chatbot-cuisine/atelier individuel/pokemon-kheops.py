#!/usr/bin/env ruby

# Fichier de données à télécharger et à mettre dans le même dossier que ce
# script :
# https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json

require "json"

datafile = "pokedex.json"

fh = File.open datafile
data = JSON.load fh
fh.close

def nbpokemon (data)
  return data['pokemon'].length
end

nbp = nbpokemon data

puts "Il y a #{nbp} pokemons"
