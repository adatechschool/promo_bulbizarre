#include <iostream>
#include "Personnage.hpp"

int main()
{
    //créer un personnage s'il te plait ?
    Personnage monPersonnage;
    monPersonnage.sePresenter();

    std::string nomDuPersonnage;
    //nomDuPersonnage = monPersonnage.nom; // interdit car la variable
    // d'instance 'nom' est privée dans la classe Personnage
    nomDuPersonnage = monPersonnage.getNom();

    while (true) {
      
    }
    return 0;
}
