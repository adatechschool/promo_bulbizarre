#ifndef PERSONNAGE
#define PERSONNAGE
#include <iostream>


class Personnage
{
    std::string nom;
    int points_de_vie;
    int score;
    public:
        Personnage();
        void sePresenter();
        void function_score();
        // déclarer un accesseur (getter) pour le nom
        // déclarer un accesseur (setter)
};

#endif
