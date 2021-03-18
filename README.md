# TP_LY_Audrey
Rendu du TP, entrainement sur angular

Le bonus du TP se trouve sur la branche Rendu_Bonus


Rendu principal :
Création d'un affichage d'articles stockés dans db.json.

Routes :
	|
	|_ / ou articles : 
			- Page d'accueil permettant la consultation des articles
			- Suppression de chaque article et mise à jour de la liste après suppression
			- Lien vers la création d'un nouvel article
			- Liens vers chacun des articles
	|
	|_ /article/:id :
			- Page de consultation d'un article par sélection d'id
			- Suppression de l'article consulté et redirection vers la liste
			- Lien vers la liste
	|
	|_ /create :
			- Page de creation d'un article par un formulaire
			- Redirection vers la liste après création
			- Lien vers la liste
	|
	|_ tout autre route ramène sur la liste des articles

