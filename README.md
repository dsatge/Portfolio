 1/ Description

 Ce projet a été réalisé dans le but de développer mes compétences dans le développement de sites internet. 
 De plus, il permet de voir de manière plus interactive les différents projets sur lesquels j'ai pu travailler, 
 mais également les technologies et langages utilisés.


 2/ Outils
 
Pour la partie backend :

- J'ai mis en place la base de données avec l'ORM Prisma. Grâce à lui, j'ai pu établir les liens entre les différentes bases de données dans lesquelles j'ai pu intégrer mes projets ainsi que mes compétences. Prisma s'est ensuite connecté à la base de données PostgreSQL.
- J'ai utilisé Node.js pour la communication serveur. Cela permet également de rester en JavaScript sur le back comme sur le front. Je l'ai utilisé accompagné du framework Express.

Pour la partie frontend :

- J'ai utilisé Vite combiné à React.
- J'ai utilisé le framework Tailwind pour une mise en forme simplifiée.

 3/ Instructions
 
Ce projet présente 2 pages principales : la page Projets et la page Compétences. Une 3e page annexe renvoie vers une page contact, mais également un lien vers mon CV au format PDF.

 a/ La page projets :
 
Sur cette page, une liste de projets est présentée sous forme de vignettes. Chacune est cliquable. En cliquant dessus une fenêtre s'ouvre permettant de voir plus d'infos sur celui-ci. Ainsi, une description complète du projet s'affiche sur une fenêtre modale en pop-in. Dans cette même fenêtre, un lien pour ouvrir le projet GitHub sur une autre page apparaît.

Il y a également moyen de trier les projets par compétences. Ainsi, une section au-dessus des projets nommée "Filtrer par compétences :" présente l'ensemble des compétences présentes dans la base de données. L'utilisateur peut sélectionner des filtres et ainsi trier les projets par compétences. Uniquement les projets contenant l'ensemble des filtres sélectionnés seront affichés. Ainsi, si une compétence est sélectionnée, tous les projets avec cette compétence resteront dans la liste de projets. Si plusieurs compétences sont sélectionnées, les projets ayant toutes les compétences sélectionnés (cela peut signifier que les projets affichés ont strictement ces compétences, mais également qu'ils peuvent en avoir d'autres dans le même projet.).

Pour désélectionner des compétences, il suffit de cliquer dessus à nouveau, ou bien de cliquer sur la croix. Une option réinitialisée est également disponible dès le moment où des filtres seront actifs et en cliquant dessus, tous les filtres seront retirés.

b/ La page compétences :

Sur cette page, la liste de toutes mes compétences inscrites dans la base de données s'affiche sous forme de vignettes. En cliquant sur une vignette, une fenêtre modale en pop-in s'affiche. Depuis cette fenêtre, une liste de projets ayant cette compétence s'affiche. Un lien GitHub est cliquable dans les cas où le projet est lié à la programmation informatique.

Il y a également moyen de trier les compétences en fonction de leur type : langage, Hard Skills ou Soft Skills. Dans ce tri, si plusieurs filtres sont actifs les compétences affichées sont cumulatifs. Comme les types de compétences sont à chaque fois dans une seule catégorie, en sélectionner plusieurs pour masquer les autres n'avait pas de sens.

Pour désélectionner des compétences, il suffit de cliquer dessus à nouveau, ou bien de cliquer sur la croix. Une option réinitialisée est également disponible dès le moment où des filtres seront actifs et en cliquant dessus, tous les filtres seront retirés.
