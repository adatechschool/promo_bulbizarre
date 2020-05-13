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

def assezlourd (data, limite)
  ensemble = data['pokemon'].select { |p| p['weight'].to_i >= limite }
  return ensemble
end

nbp = nbpokemon data
plusdixkg = assezlourd data, 10
nomsdixkg = []
plusdixkg.each { |p| nomsdixkg << p['name'] }


puts "Il y a #{nbp} pokemons"
puts "Les pokemons de plus de 10 kg sont : #{nomsdixkg.join(', ')}"
