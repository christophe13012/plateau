let compteur = 0;
let joueurTour = '';

class Mouvement {
    constructor(joueur1, joueur2) {
        joueurTour = joueur1;
        
        // sauter son tour au click
        $('#passerTour').click(function  () {
            compteur=0;
            if(joueurTour == joueur1){
                joueurTour = joueur2;
                joueur1.el.style.backgroundColor = 'white';
                joueur2.el.style.backgroundColor = 'red';
            } else {
                joueurTour = joueur1;
                joueur2.el.style.backgroundColor = 'white';
                joueur1.el.style.backgroundColor = 'red';
            }
        })

        $(document).keydown(function (touche) {
            switch(touche.which)
            {
                case 37:  joueurTour.reculer();
                    break;
                case 38:  joueurTour.monter();
                    break;
                case 39:   joueurTour.avancer();
                    break;
                case 40:    joueurTour.descendre();
                    break; 
            }  
        })
    }


}

