#include <iostream>
#include <vector>
#include <algorithm>
#include <string>
#include <bits/stdc++.h>

using namespace std;

vector<unsigned int> prix_min_max (vector<unsigned int>, vector<string>);

int main ()
{
  vector<unsigned int> prix = {12, 10, 7, 3, 1, 5, 6, 9};
  vector<string> liste_course = {"salade", "tomate", "oignon", "tomate", "salade", "tomate"};

  vector<unsigned int> minmax = prix_min_max (prix, liste_course);

  cout << "Prix minimum : " << minmax[0] << endl;
  cout << "Prix maximum : " << minmax[1] << endl;

  return 0;
}

vector<unsigned int> prix_min_max (vector<unsigned int> prix, vector<string> liste)
{
  unsigned int min = 0, max = 0;
  map<string, unsigned int> multiples;
  vector<unsigned int> prix_croissants, prix_décroissants;

  for (string article: liste)
    multiples[article] = multiples.find(article) == multiples.end() ? 1 : multiples[article] + 1;

  typedef function<bool(pair<string, unsigned int>, pair<string, unsigned int>)> Comparator;

  Comparator comp = [](pair<string, unsigned int> elem1, pair<string, unsigned int> elem2)
  {
    return elem1.second != elem2.second ? elem1.second > elem2.second : elem1.first < elem2.first;
  };

  set<pair<string, unsigned int>, Comparator> tri_mult (multiples.begin(), multiples.end(), comp);

  prix_croissants = prix;
  sort (prix_croissants.begin(), prix_croissants.end());
  prix_décroissants = prix_croissants;
  reverse (prix_décroissants.begin(), prix_décroissants.end());

  vector<unsigned int>::iterator cr_it = prix_croissants.begin(), dec_it = prix_décroissants.begin();
  for (pair<string, unsigned int> art_mult: tri_mult)
  {
    min += art_mult.second * (*cr_it);
    max += art_mult.second * (*dec_it);

    cout << art_mult.second << " × " << art_mult.first << " à " << (*cr_it) << " € pièce (min)";
    cout << " ou à " << (*dec_it) << " € pièce (max)" << endl;

    cr_it++;
    dec_it++;
  }

  return (vector<unsigned int> { min, max });
}

