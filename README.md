# TPAngular

TP commencé sur la journée du Lundi 16 / 05 / 2022.

## Comment démarrer le projet

Ouvrir le terminal : 
ng serve => permet le build de l'application Angular
npm run api => permet de démarrer une API avec Json-server

### Les fonctionnalités demandé

- Il faut pouvoir sélectionner un utilisateur, ses tâches seront alors accessible : []
- Une tâche pourra être créée / catégorisée / modifiée / supprimée : [x] manquant => création + modification
- Les tâches devront être affichée en deux blocs: les tâches à faire et faites : [x] => le patch ne passe pas mais la fonctionnalité reste bonne
- Un filtre permettra d'afficher uniquement les tâches d'une même catégories : []
- Les tâches devront être persistantes : [x]

#### Les fonctionnalités supplémentaires

- Adopter une architecture en module : [x]
- Authentification utilisateur : [/]
- Gérer l'adminitration et le rôle utilisateur : []
- Générer une documentation du projet : [x]

##### Explication

J'ai voulu appliqué les bases d'angular sur cette journée en travaillant plusieurs points. 
L'@Input par exemple en mettant le composant user parent de la todo-list pour créer une tâche en récupérant l'id dans le parent. 
Je me suis aussi exercé au routing en créant séparement un CRUD (sauf modifier) utilisateur et catégorie. 
J'ai essayé d'utiliser des services, de centraliser le code et de le rendre le plus propre possible pour garder un objectif de code professionnel.

Le TP a été réalisé en 1 jour, il est loin d'être fini mais je le continuerai pour exercer les bases d'Angular

Adrien PINHEIRO.

Petit tp et exercice fait avec @dwaps lors de la semaine du 09 / 05 au 13 / 05 sur Angular
https://github.com/dwaps/dig-d02/tree/Adrien-Pinheiro
