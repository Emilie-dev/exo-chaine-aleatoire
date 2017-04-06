$(document).ready(function() {


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
			
			}
										  		// puis on push le tirage aléatoire "englobé " par les cellules dans les lignes
			tableau.push(ligne);                // On push les lignes dans le tableau 
			ligne = [];							// On appelle la variable ligne pour éviter de l'écraser à chaque boucle
		}
			return tableau;

	}

	var result = randomArray(10, 10); // 10 lignes pour 10 colonnes

		//console.log(result);


/* ** On créait une boucle dans une boucle: 1er for pour boucler le nb de colonnes, 2nd for 
à l'intérieur du 1er pour répéter le nb de lignes et de cellules dans les lignes. Les lignes (et cellules)
sont dans les colonnes.
*/   
 
	var monTableau = randomArray(10,10);
 	//console.log(monTableau);	

    function htmlarray (monTableau) {

 		var result = "<table class = 'table table-bordered'>";
     	result = result + "<thead>";
     	result = result + "<tr><th>eureka</th>";		
  
 		console.log(monTableau);

     		for (var h = 0 ; h < monTableau.length; h++) {
     			result = result + " <th><input id = 'x"+ [h] +"' type='radio' name='absisses'></th> ";
 
     		}
 
     			result = result + "</tr>" 
     			result = result + "</thead><tbody>";
     			result = result + "<tr>";
      	
   			for (var i = 0; i < monTableau.length; i++) {
    			result = result + " <td><input id = 'y" + [i] +"' type ='radio' name='ordonnees'></td> ";
     			
     			var change = monTableau[i];

     				for (var j = 0; j < change.length; j++) {
     					result = result + "<td id = '"+[i]+[j]+"'>" + change[j] +"</td>";
     				}

     					result = result + "</tr>";
     		}
 
     				result = result + "</tbody></table>";
 
     				return result;
 
    }

	var monTableauhtml = htmlarray(monTableau);
    console.log(monTableauhtml);
     	
    /*	var tablalpha=[];
 
    var idalpha= $('td').attr('id');
    tablalpha.push(idalpha);
     					
    console.log(idalpha);
    console.log(tablalpha);*/
 
    var tableaucoordonnees = [];
 
    function coordonnees (absisses, ordonnees) {
  
     	var absisses = $("input[name=absisses]:checked").attr("id");
     	var ordonnees = $("input[name=ordonnees]:checked").attr("id");
  
     	tableaucoordonnees.push(absisses,ordonnees);
 
     	console.log(tableaucoordonnees);
      
 
    }
 
    var tablalpha = [];
  
 	var tableauHtml=htmlarray(monTableau);
 			
 	$('#emplacement').append(tableauHtml);
  	//console.log(tableauHtml);
 
    $("#action").click(function() {
 
		coordonnees();
      			
      		if (tableaucoordonnees ) {
 
     		}
  	});

});