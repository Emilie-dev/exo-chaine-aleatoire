$(document).ready(function() {

// Exercice 2:

	function randomString(nChar) {
		var result = '';
		var alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
		var rnd = 0;

		for (var i = 0; i < nChar; i++) {
			rnd = Math.floor(Math.random() * alphabet.length);

			result += alphabet.charAt(rnd);
		}
		return result;
	}


	function randomArray(nbligne, nbcol) {  // On créait une fonction avec 2 paramétres (lignes,colonnes)
		var tableau = [];	// On créait une variable "vide" pour le tableau global
		var ligne =[];	    // On créait une variable "vide" pour les lignes du tableau
		var cellule = '';   // On créait une varible "vide" pour les cellules des lignes


		for (var i = 0; i < nbcol; i++) {            // On créait une boucle dans une boucle... **
			for (var j = 0; j < nbligne; j++) {
			cellule = randomString(10);             // On appelle la 1er fonction randomString qui contient 
			ligne.push(cellule);           			// le choix aléatoire dans les cellules
			
			}							  		// puis on push le tirage aléatoire "englobé " par les cellules dans les lignes
			tableau.push(ligne);                // On push les lignes dans le tableau 
			ligne = [];							// On appelle la variable ligne pour éviter de l'écraser à chaque boucle
		}
			return tableau;

	}
		var result = randomArray(10, 10); // 10 lignes pour 10 colonnes

		console.log(result);


});

/* ** On créait une boucle dans une boucle: 1er for pour boucler le nb de colonnes, 2nd for 
à l'intérieur du 1er pour répéter le nb de lignes et de cellules dans les lignes. Les lignes (et cellules)
sont dans les colonnes.
*/ 







