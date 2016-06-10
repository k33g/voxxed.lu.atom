# voxxed.lu.atom

## Coloration syntaxique / `01-golo-color-syntax`

- Nous allons mettre en place le support du langage Golo [http://golo-lang.org/](http://golo-lang.org/)
- Nous allons faire cela en générant un package Atom

Avant toute chose vérifier les settings du `package-generator`: vérifier que la génération de code se fait bien en JavaScript

### Générer un package

- Menu: `Packages/Package Generator/Generate Atom Package`
- Donner le nom de votre package, validez, une arborescence est générée dans le répertoire `/github`

*Remarque: j'ai fait du nettoyage, j'expliquerais par la suite les différents éléments générés.*

**ATTENTION**: Pour le support de la coloration syntaxique il faut toujours un fichier `name.cson` dans un répertoire `/grammars`

> DEMO

- montrer le fichier demo.golo sans coloration
- générer au fur et à mesure les différents éléments en expliquant à chaque fois à quoi ils servent
- recharger la fenêtre

- nous avons bien les couleurs ... sauf pour `DynamicObject` et `struct`

## Theme / `02-golo-color-syntax-theme`

### Générer un "Syntax Theme"

- Menu: `Packages/Package Generator/Generate Atom Syntax Theme`

> DEMO

- Aller dans `index.less`

Souvenez vous dans le fichier `gson` nous avions:

	  {
	    'match': '\\b(DynamicObject)\\b'
	    'name': 'dynamic.object.golo'
	  }
	  {
	    'match': '\\b(struct)\\b'
	    'name': 'dynamic.variable.golo'
	  }

En fait `'dynamic.object.golo'` et `'dynamic.variable.golo'` correspondent à des styles css

Du coup aller dans `index.less` et y copier ceci:

	.dynamic.variable.golo {
	  color: @orange;
	  font-style: oblique;
	}

	.dynamic.object.golo {
	  color: @cyan;
	  font-weight: bold;
	}

et **recharger la fenêtre**

## Snippets / `03-golo-snippets`

Nous allons créer un nouveau package (mais on pourrait pu faire ça dans le 1er package)

### Générer un package (pour les snippets)

- Menu: `Packages/Package Generator/Generate Atom Package`

**ATTENTION**: Pour le support des snippets il faut toujours un ou des fichier(s) `name.cson` dans un répertoire `/snippets`

> DEMO

- Ajouter 2 snippets
- Montrer comment les utiliser dans un fichier golo

## Autocompletion / `04-golo-autocomplete` 

- Menu: `Packages/Package Generator/Generate Atom Package`

**ATTENTION**: Pour le support des providers autocomplete il faut toujours un ou des fichier(s) `name.js` dans un répertoire `/lib` et une référence à ce fichier dans `package.json`

**ATTENTION**:

Dans `package.json` il faut bien penser à ajouter:


	  "providedServices": {
	    "autocomplete.provider": {
	      "versions": {
	        "2.0.0": "provide"
	      }
	    }
	  }

> DEMO

- compléter le provider
- expliquer les types
- montrer dans un fichier golo

## "PlugIn" / `05-golo-plugin` 

**Expliquer ce que j'ai voulu faire**


- Menu: `Packages/Package Generator/Generate Atom Package`
- Décortiquer l'ensemble du projet
  - présenter les dépendances + expliquer
  - présenter le code source
  	- les fichiers de config du plugin
  	- tools
  	- code du plugin
  	- templates


## "PlugIn" Bis / `06-golo-plugin` 

**Expliquer ce que j'ai voulu faire**: un truc plus roots ....














