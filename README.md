## Front End
J'ai utiliser [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Étant donné que ce soit mon premier projet avec Angular, je n'ai pas pu terminer le projet car il m'a fallu d'abord apprendre plusieurs points sur Angular. Je n'ai pas pu aussi styliser l'App j'ai juste utiliser des class simple de bootstrap.

## Mes Modules
J'ai utiliser 4 modules 
-  Repas qui comporte 3 components Create ,Index et Update (je n'ai pas terminé l'Update) Create pour créer les differents repas et mettre leurs prix et Index pour l'affichage

- Ingredient qui comporte 3 components Create,Index et Update (je n'ai pas terminé l'update)  Create pour créer les ingredients associer aux repas deja inserer rt Index pour l'affichage

- Menu qui comporte 1 component Index juste pour l'affichage des Menus disponible pour les clients, c'est d'ailleurs la premiere interface afficher 

- Commande qui comporte 3 componebts Create, Index et Validation (je n'ai pas terminé la validation) Create pour que le client commande et Index pour afficher les commandes pour les admin afin de les valider

5 lien :
- Menu pour Client page pour les Menus disponible pour les client afin qu'ils puissent passer commande
- Repas page pour les repas et aussi la possibilité d'en créer une autre pour les admin. Apres creation, l'admin sera rediriger vers une page d'ajout d'ingredient 
- Ajout ingredient page pour l'ajout des ingredient d'une repas excistante pour l'admin.
- Liste Ingredienta page pour l'affichage des ingredients de chaque repas pour l'admin
- Liste Commande page pour lister les commandes pas encore valider pour l'admin


## Back-end
J'ai utiliser <p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

3 Models:
- Repas : pour la table repas (Create et Read)
- Ingredients : pour la table ingredients (Create et Read)
- Commandes : pour la table commandes (Create et Read)

3 API/Controller pour creer ces fonctions pour chaque Models
et les routes API pour la liaison Angular/laravel pour que Angular utilise les API/Controller de mon code PHP(Laravel)

## concepion.sql

4 tables
- repas
- ingredient
- client
- commande
le fichier conception.mcd est le modele conceptuel que j'ai elaborer sur Win'Design pour ce projet