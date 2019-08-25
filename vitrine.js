// // CALENDRIER

// $(function() 
// {  
// 	// définit les options par défaut du calendrier
// 	$.datepicker.setDefaults({ 
// 		showButtonPanel: true,// affiche des boutons sous le calendrier
// 		showOtherMonths: true, // affiche les autres mois
// 		selectOtherMonths: true // possibilités de sélectionner les jours des autres mois
// 		});

// 	//$("#calendar").datepicker(); // affiche le calendrier par défaut
// 	$("#calendar").datepicker($.datepicker.regional["fr"]); // affiche le calendrier en fr 

// });

// MESSAGE DEFILANT

var canevas = document.querySelector('canvas');

var contexte = canevas.getContext('2d'); 

var X = canevas.width; 

var Y = canevas.height; 

contexte.textAlign ='left'; 

contexte.textBaseline = 'middle'; 

contexte.font = "bold 80px impact" ; 

contexte.strokeStyle ='deeppink'; 

contexte.lineWidth = 0.5; 

var x = X ; y = 50; setInterval(deplacement,20) ; 

function deplacement() { contexte.clearRect(0,0,X,Y); x = x-2 ; if(x <-750) x = X ; 

contexte.strokeText('OFFRE DE LANCEMENT : -30% sur toute la collection',x, y); }


// FONCTION RECHERCHE

document
.getElementById('recherche')
.addEventListener("focus", monFocus);
document
.getElementById('recherche')
.addEventListener("blur", monBlur);

function monFocus() {
this.style.cssText = "background-color:white";
document
    .getElementById('recherche')
    .style
    .cssText = "background-color:deeppink";
}
function monBlur() {
this.style.cssText = "background-color:white";
}

