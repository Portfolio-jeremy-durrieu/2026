# Portfolio Jeremy Durrieu

Portfolio professionnel statique conçu pour être publié gratuitement sur GitHub Pages.

## Objectif

Ce projet permet à Jeremy Durrieu de présenter :

- son profil professionnel ;
- son parcours ;
- ses compétences ;
- ses projets ;
- son CV ;
- ses informations de contact.

## Structure du projet

```text
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── cv/
│   │   └── Jeremy-Durrieu-CV.pdf
│   ├── images/
│   │   ├── profile-portrait.svg
│   │   └── projects/
│   │       ├── project-01.svg
│   │       ├── project-02.svg
│   │       └── project-03.svg
│   └── icons/
│       ├── github.svg
│       ├── linkedin.svg
│       └── email.svg
├── README.md
└── .nojekyll
```

## Modifier les informations

Ouvrez le fichier `index.html` et remplacez les placeholders suivants :

- `[POSTE DE JEREMY]`
- `[DESCRIPTION]`
- `[VILLE / RÉGION]`
- `[Domaine principal]`
- `[DATE]`
- `[ENTREPRISE / ÉCOLE]`
- `[POSTE / FORMATION]`
- `[LIEU]`
- `[TECHNOLOGIES]`
- `[EMAIL]`
- `[LIEN LINKEDIN]`
- `[LIEN GITHUB]`
- `[UTILISATEUR]`

Le site est pensé pour être facilement personnalisable sans backend.

## Ajouter un projet

1. Créez une image dans `assets/images/projects/`.
2. Ajoutez un nouvel élément de type `article` dans la section `#projects` de `index.html`.
3. Remplacez le nom, la description, la problématique et les liens.

## Changer les images

Les visuels de profil et de projet sont dans `assets/images/`.

- `profile-portrait.svg` : photo de profil de remplacement.
- `projects/*.svg` : visuels de projets.

Pour remplacer une image :

- conservez le même nom de fichier ou mettez à jour le chemin dans `index.html` ;
- utilisez une image de bonne qualité et adaptée au format web.

## Remplacer le CV

1. Placez votre fichier PDF dans `assets/cv/`.
2. Mettez à jour le chemin du lien dans `index.html` si nécessaire.

Le bouton `Télécharger mon CV` pointe actuellement vers :

```text
assets/cv/Jeremy-Durrieu-CV.pdf
```

## Lancer le site localement

Depuis le dossier du projet, vous pouvez utiliser un serveur local simple :

```bash
python -m http.server 8000
```

Ensuite, ouvrez :

```text
http://localhost:8000
```

## Publier sur GitHub Pages

1. Créez un dépôt GitHub.
2. Poussez les fichiers du projet.
3. Dans le dépôt, ouvrez :
   - Settings
   - Pages
4. Sélectionnez la branche principale (ou `main`) et le dossier racine.
5. Enregistrez.
6. GitHub Pages publiera le site automatiquement.

## Notes

- Le projet est compatible avec GitHub Pages sans backend.
- Une feuille `.nojekyll` est recommandée pour éviter certains traitements par Jekyll.
- Le site respecte les bonnes pratiques de navigation, de responsive design et d’accessibilité.

## Personnalisation

Le style global se trouve dans `css/style.css`.

Les animations et les interactions se trouvent dans `js/script.js`.

Le portfolio est prêt à être adapté aux informations réelles de Jeremy Durrieu.
