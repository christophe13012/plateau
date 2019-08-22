var tableauJoueur = [];

class Joueur
{
    constructor(nom, avatar)
    {
        tableauJoueur.push(nom);

        this.el = new Image();
        this.el.id = 'joueur';
        this.el.src = avatar;
        this.el.nom = nom;
        this.el.pointVie = 100;
        this.el.className = nom;
        this.el.imageArme = '';
        let armeJoueur = new Armes(0);
        this.el.arme = armeJoueur.el.nom;
        this.el.armesrc = armeJoueur.el.src;
        this.el.degat = armeJoueur.el.degat;  
        this.el.ancienneArme = '';

        // on choisit la brique joueur aléatoirement
        var numeroBrique = outil.entierAleatoire(0,99);

        // on verifie que la case n'est pas deja un obstacle, ou une arme, ou a coté d'un joueur si joueur2
        if(tableauJoueur.length === 1){
            while ((listeBrique[numeroBrique].id === 'briqueObstacle')||(listeBrique[numeroBrique].classList.contains('arme'))){
                numeroBrique = outil.entierAleatoire(0,99);
            } 
        } else {
            while ((listeBrique[numeroBrique].id === 'briqueObstacle')||(listeBrique[numeroBrique].classList.contains('arme'))||(listeBrique[numeroBrique].classList.contains('joueur'))||(numeroBrique == (joueur1.position+1))||(numeroBrique == (joueur1.position-1))||(numeroBrique == (joueur1.position-10))||(numeroBrique == (joueur1.position+10))){
                numeroBrique = outil.entierAleatoire(0,99);
            } 
        }

        this.position =  numeroBrique;
        listeBrique[this.position].className ='joueur' + ' ' + this.el.className;
        listeBrique[this.position].appendChild(this.el);
    }


    conditionBouger(nouvellePosition, anciennePosition){
        if((listeBrique[nouvellePosition]!== undefined)&&( listeBrique[nouvellePosition].id !== 'briqueObstacle')&&( !listeBrique[nouvellePosition].classList.contains('arme'))&&( !listeBrique[nouvellePosition].classList.contains('joueur'))){

            if (!listeBrique[anciennePosition].classList.contains('arme')){
                // enlever classe joueur
                listeBrique[anciennePosition].className =''}


            this.position = nouvellePosition;

            listeBrique[nouvellePosition].className ='joueur' + ' ' + this.el.className;
            listeBrique[nouvellePosition].appendChild(this.el);

            if( listeBrique[anciennePosition].firstChild) {
                listeBrique[anciennePosition].firstChild.style.display = 'block';
            } 

            // on engage le combat si ils sont à coté
            outil.joueuracote();
            if(joueurCoteACote == 'true'){        
                let combatCommence = new Combat;
            } else { 
                outil.changerJoueur();
            }
        } 


        else if ((listeBrique[nouvellePosition]!== undefined)&&(listeBrique[nouvellePosition].classList.contains('arme'))&&( listeBrique[nouvellePosition].childNodes.length<2)){



            if( listeBrique[anciennePosition].firstChild) {
                listeBrique[anciennePosition].firstChild.style.display = 'block';
            } 

            this.el.ancienneArme = 'arme' + ' ' + this.el.arme;


            var enfant =  listeBrique[nouvellePosition].firstChild;
            let nomEnfant =  enfant.nom;
            let srcEnfant = enfant.src;
            let degatEnfant = enfant.degat;
            enfant.style.display = 'none';
            enfant.src = this.el.armesrc;
            enfant.className ='';
            enfant.className ='arme' + ' ' + this.el.arme;
            enfant.id = this.el.arme;
            enfant.degat = this.el.degat;
            enfant.nom = this.el.arme;
            this.el.arme = nomEnfant;
            this.el.armesrc = srcEnfant;
            this.el.degat = degatEnfant;



            if(tableauJoueur[0]=== this.el.nom ){
                $('#arme1').text(this.el.arme + ' (Dégats ' + this.el.degat + ')');
                $('#imgArme1').attr('src', this.el.armesrc);

            } else {   $('#arme2').text(this.el.arme + ' (Dégats ' + this.el.degat + ')');
                    $('#imgArme2').attr('src', this.el.armesrc);

                   }


            if (!listeBrique[anciennePosition].classList.contains('arme')){
                // enlever class joueur
                listeBrique[anciennePosition].className =''; 
            }  

            this.position = nouvellePosition;
            listeBrique[nouvellePosition].appendChild(this.el);

            // on engage le combat si ils sont à coté
            outil.joueuracote();
            if(joueurCoteACote == 'true'){
                let combatCommence = new Combat;
            } else { 
                outil.changerJoueur();
            }
        }
    }

    avancer(){
        this.conditionBouger(this.position+10, this.position)
    } 
    reculer(){
        this.conditionBouger(this.position-10, this.position)
    }   
    monter(){
        if((this.position !== 10)&&(this.position !== 20)&&(this.position !== 30)&&(this.position !== 40)&&(this.position !== 50)&&(this.position !== 60)&&(this.position !== 70)&&(this.position !== 80)&&(this.position !== 90)){
            this.conditionBouger(this.position-1, this.position)
        }
    } 
    descendre(){
        if((this.position !== 9)&&(this.position !== 19)&&(this.position !== 29)&&(this.position !== 39)&&(this.position !== 49)&&(this.position !== 59)&&(this.position !== 69)&&(this.position !== 79)&&(this.position !== 89)){
            this.conditionBouger(this.position+1, this.position)
        }
    }
}


