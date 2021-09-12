## Front End
J'ai utiliser [Angular CLI](https://github.com/angular/angular-cli) version 12.2.5.

Étant donné que ce soit mon premier projet avec Angular, je n'ai pas pu terminer le projet car il m'a fallu d'abord apprendre plusieurs points sur Angular. Je n'ai pas pu aussi styliser l'App j'ai juste utilisé des class simples de bootstrap.

## Mes Modules
J'ai utilisé 4 modules 
-  Repas qui comporte 3 components Create ,Index et Update (je n'ai pas terminé l'Update) Create pour créer les différents  repas et mettre leurs prix et Index pour l'affichage

- Ingrédient qui comporte 3 components Create, Index et Update (je n'ai pas terminé l'update) Create pour créer les ingrédients associés aux repas déjà insérés et Index pour l'affichage

- Menu qui comporte 1 component Index juste pour l'affichage des Menus disponible pour les clients, c'est d'ailleurs la première interface afficher 

- Commande qui comporte 3 components Create, Index et Validation (je n'ai pas terminé la validation) create pour que le client commande et Index pour afficher les commandes pour les admins afin de les valider


5 liens :
- menu pour Client page pour les Menus disponible pour les clients afin qu'ils puissent passer commande

- Repas page pour les repas et aussi la possibilité d'en créer une autre pour les admins. Après création, l'admin sera redirigé vers une page d'ajout d'ingrédient

- Ajout ingrédient page pour l'ajout des ingrédients d'un repas excistante pour l'admin.

- Liste Ingrédients page pour l'affichage des ingrédients de chaque repas pour l'admin

- Liste Commande page pour lister les commandes pas encore validées pour l'admin


## Back End
J'ai utilisé <p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

3 Models:
- Repas : pour la table repas (Create et Read)

- Ingrédients : pour la table Ingrédients (Create et Read)

- Commandes : pour la table commandes (Create et Read)

3 API/Controller pour créer ces fonctions pour chaque Models
et les routes API pour la liaison Angular/laravel pour que Angular utilise les API/Controller de mon code PHP(Laravel)

## concepion.sql

4 tables
- repas
- Ingrédient
- client
- commande
le fichier conception.mcd est le modèle conceptuel que j'ai conçu sur Win'Design pour ce projet