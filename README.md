# TP_LY_Audrey
Rendu Bonus pour le TP


Bonus: 
Tirer la version ici : git reset --hard ee004794da44549c7a951520999cc131b019ba63 
Mettre a jour la version de v9 a la v11 d'angular
Expliquer les grands changement entre ses versions (pas seulement un copie collé de la release note)
Et surtout expliquer les differentes etapes que vous avez pu suivre :slight_smile:



J'ai suivi les instructions suivantes : https://update.angular.io/?v=9.1-11.0

Ajout du module localize
-> ng add @angular/localize
UPDATE src/polyfills.ts (1567 bytes)

Mise à jour version par version :
D'abord de v9 à v10
-> ng update @angular/core@10 @angular/cli@10
Ensuite de v10 à v11
-> ng update @angular/core @angular/cli

Il n'y a pas de barre de chargement sur l'execution de la commande ng update. On peut donc lancer ng  (commence par la modification du package.json pour la montée en version), y mettre fin au moment où il utilise npm, puis lancer npm install qui se basera sur le package.json mis à jour et enfin relancer ng update à la fin du npm install pour s'assurer que rien n'a été oublié. Cela est plus rapide et permet un retour à l'utilisateur quant au statut du npm install.

Installation de typescript@4.0.0 :
-> npm install typescript@4.0.0


-> ng --version 
     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
Angular CLI: 11.2.5
Node: 14.15.5
OS: win32 x64
Angular: 11.2.6
... animations, common, compiler, compiler-cli, core, forms
... language-service, localize, platform-browser
... platform-browser-dynamic, router
Ivy Workspace: Yes
Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.5
@angular-devkit/build-angular   0.1102.5
@angular-devkit/core            11.2.5
@angular-devkit/schematics      11.2.5
@angular/cli                    11.2.5
@schematics/angular             11.2.5
@schematics/update              0.1102.5
rxjs                            6.6.6
typescript                      4.0.7
