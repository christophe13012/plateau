class Combat {
    constructor(){
        this.relancerCombat();
        let combat = this;
        // on affiche le message le combat commence
        $('#modalDebutCombat').modal();
        // on desactive les mouvements
        $(document).off('keydown');
        // on active les boutons et remplissons les infos du combat
        $('#attaquer').removeClass('disabled');
        $('#defendre').removeClass('disabled');
        $('#actionJoueur1').text("Ici s'affichera l'action décidée par " + joueur1.el.nom);
        $('#actionJoueur2').text("Ici s'affichera l'action décidée par " + joueur2.el.nom);
        $('#resultatJoueur1').text("Ici le resultat de cette action");
        $('#resultatJoueur2').text("Ici le resultat de cette action");
        // on donne une hauteur aux resultats de l'action pour pas faire le yoyo entre les tours
        $('#resultatJoueur1').css("height", "17px");
        $('#resultatJoueur2').css("height", "17px");

        // compteurPair permet de définir si le tour est fini (si pair)
        let compteurPair = 0;
        let derniereAction = '';

        // on définit qui commence le combat
        outil.changerJoueur();
        $('#premierCombattant').text(joueurTour.el.nom);

        //  SI ATTAQUE
        $('#attaquer').click(function  () {
            
            // si le tour est fini, on vide les champs texte
            combat.viderChamps(compteurPair);

            compteurPair++;

            // on decompte les points selon les joueurs
            if(joueurTour == joueur1){
                joueur2.el.pointVie -= joueur1.el.degat;
                $('#actionJoueur1').text(joueur1.el.nom + ' attaque');
                joueurTour = joueur2;
                joueur1.el.style.backgroundColor = 'white';
                joueur2.el.style.backgroundColor = 'red';
            } else {
                $('#actionJoueur2').text(joueur2.el.nom + ' attaque');
                joueur1.el.pointVie -= joueur2.el.degat;
                joueurTour = joueur1;
                joueur2.el.style.backgroundColor = 'white';
                joueur1.el.style.backgroundColor = 'red';
            }

            // on affiche le decompte des points seulement si chacun a joué
            if(compteurPair%2 == 0){
                $('#pointVie1').text(joueur1.el.pointVie);
                $('#pointVie2').text(joueur2.el.pointVie);
                if(derniereAction == 'attaque'){
                    $('#resultatJoueur2').text(joueur2.el.nom + ' a perdu ' + joueur1.el.degat + ' points de vie'); 
                    $('#resultatJoueur1').text(joueur1.el.nom + ' a perdu ' + joueur2.el.degat + ' points de vie'); 
                } else {
                    if(joueurTour == joueur1){
                        // en fait tour joueur2
                        $('#resultatJoueur2').text(joueur2.el.nom + " n'a pas perdu de point"); 
                        $('#resultatJoueur1').text(joueur1.el.nom + ' a perdu ' + (joueur2.el.degat/2) + ' points de vie'); 
                    } else {
                        $('#resultatJoueur1').text(joueur1.el.nom + " n'a pas perdu de point"); 
                        $('#resultatJoueur2').text(joueur2.el.nom + ' a perdu ' + (joueur1.el.degat/2) + ' points de vie'); 
                    }
                }

            }
            derniereAction = 'attaque';
            combat.finCombat(compteurPair);
        })  


        // DEFENSE
        $('#defendre').click(function  () {
            
            combat.viderChamps(compteurPair);
            
            compteurPair++;
            if((compteurPair%2 == 0)&&(derniereAction == 'defendre')){
                if(joueurTour == joueur1){
                    $('#actionJoueur1').text(joueur1.el.nom + ' défend');
                    joueur2.el.pointVie -= (joueur1.el.degat/2);
                    joueurTour = joueur2;
                    joueur1.el.style.backgroundColor = 'white';
                    joueur2.el.style.backgroundColor = 'red';
                } else {
                    $('#actionJoueur2').text(joueur2.el.nom + ' défend');
                    joueur1.el.pointVie -= (joueur2.el.degat/2);
                    joueurTour = joueur1;
                    joueur2.el.style.backgroundColor = 'white';
                    joueur1.el.style.backgroundColor = 'red';
                }
            }
            else {
                if(joueurTour == joueur1){
                    $('#actionJoueur1').text(joueur1.el.nom + ' défend');
                    joueur1.el.pointVie += (joueur2.el.degat/2);
                    joueurTour = joueur2;
                    joueur1.el.style.backgroundColor = 'white';
                    joueur2.el.style.backgroundColor = 'red';
                } else {
                    $('#actionJoueur2').text(joueur2.el.nom + ' défend');
                    joueur2.el.pointVie += (joueur1.el.degat/2);

                    joueurTour = joueur1;
                    joueur2.el.style.backgroundColor = 'white';
                    joueur1.el.style.backgroundColor = 'red';
                }
            }

            if(compteurPair%2 == 0){
                $('#pointVie1').text(joueur1.el.pointVie);
                $('#pointVie2').text(joueur2.el.pointVie);
                if(derniereAction == 'attaque'){
                    if(joueurTour == joueur1){
                        // en fait tour joueur2
                        $('#resultatJoueur1').text(joueur1.el.nom + " n'a pas perdu de point"); 
                        $('#resultatJoueur2').text(joueur2.el.nom + ' a perdu ' + (joueur1.el.degat/2) + ' points de vie'); 
                    } else {
                        $('#resultatJoueur2').text(joueur2.el.nom + " n'a pas perdu de point"); 
                        $('#resultatJoueur1').text(joueur1.el.nom + ' a perdu ' + (joueur2.el.degat/2) + ' points de vie'); 
                    } 
                } else {
                    $('#resultatJoueur2').text(joueur2.el.nom + " n'a pas perdu de point"); 
                    $('#resultatJoueur1').text(joueur1.el.nom + " n'a pas perdu de point"); 
                }
            }
            derniereAction = 'defendre';
            combat.finCombat(compteurPair);
        })  
    }

    finCombat(finTour){
        if(finTour%2 == 0){
            if((joueur1.el.pointVie <1)&&(joueur2.el.pointVie <1)){
                $('#jeu').hide();
                $('#finCombatSansVainqueur').fadeIn();
            }
            else if((joueur1.el.pointVie <1)||(joueur2.el.pointVie <1)){
                if(joueur1.el.pointVie>joueur2.el.pointVie){
                    $('#vainqueur').text(joueur1.el.nom);
                    $('#imgVainqueur').attr('src', joueur1.el.src)
                    $('#jeu').hide();
                    $('#finCombatVainqueur').fadeIn();

                } else {
                    $('#vainqueur').text(joueur2.el.nom);
                    $('#imgVainqueur').attr('src', joueur2.el.src)
                    $('#jeu').hide();
                    $('#finCombatVainqueur').fadeIn();

                }
            }}
    }


    relancerCombat(){
        $('#rejouer, #rejouerNul').click(function() {
            location.reload();
        })
    }

    viderChamps(fintour){
        if(fintour%2 == 0){
            $('#resultatJoueur1').text(''); 
            $('#resultatJoueur2').text(''); 
            $('#actionJoueur1').text('');  
            $('#actionJoueur2').text('');

        }
    }
}