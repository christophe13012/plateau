class Outils {
    changerJoueur(){
        compteur++;
        if(compteur==3){
            if(joueurTour == joueur1){
                joueurTour = joueur2;
                joueur1.el.style.backgroundColor = 'white';
                joueur2.el.style.backgroundColor = 'red';
            } else {
                joueurTour = joueur1;
                joueur2.el.style.backgroundColor = 'white';
                joueur1.el.style.backgroundColor = 'red';
            }
            compteur=0
        }
    }
    entierAleatoire(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    joueuracote(){
         if((joueur1.position == (joueur2.position+1))||(joueur1.position == (joueur2.position-1))||(joueur1.position == (joueur2.position-10))||(joueur1.position == (joueur2.position+10))){
            joueurCoteACote = 'true';
        }
    }
}

let outil = new Outils;
let joueurCoteACote = 'false';
