#ifndef PERSONNAGE
#define PERSONNAGE
#include <iostream>
#include <vector>
#include "Item.hpp"

class Personnage
{
    std::string nom;
    int points_de_vie;
    int score;
    // sprite sheet (?) apparence; // cf. diagramme de classe
    vector<Item> inventaire;
    public:
        Personnage();
        void sePresenter();
        void function_score();
        // déclarer un accesseur (getter) pour le nom
        std::string getNom ();
        // déclarer un accesseur (setter)
        void setNom (std::string);
};

#endif
