
// tout mettre dans tableau d'objet

let listeArme = [];

let arme1 = new Object();
arme1.src = 'armes/003-shuriken.png'; 
arme1.degat = 10;
arme1.nom = 'shuriken';
listeArme.push(arme1);

let arme2 = new Object();
arme2.src = 'armes/004-sword.png'; 
arme2.degat = 15;
arme2.nom = 'épée';
listeArme.push(arme2);

let arme3 = new Object();
arme3.src = 'armes/005-nunchaku.png';
arme3.degat = 15;
arme3.nom = 'nunchaku';
listeArme.push(arme3);

let arme4 = new Object();
arme4.src = 'armes/006-arrow.png';
arme4.degat = 20;
arme4.nom = 'arc';
listeArme.push(arme4);

let arme5 = new Object();
arme5.src = 'armes/007-bomb.png';
arme5.degat = 25;
arme5.nom = 'bombe';
listeArme.push(arme5);




class Armes {
    constructor(j){
        this.el = new Image();
        this.el.src = listeArme[j].src;
        this.el.id = listeArme[j].nom;
        this.el.className = 'arme' + ' ' + listeArme[j].nom;
        this.el.nom = listeArme[j].nom;
        this.el.degat = listeArme[j].degat;

    }

    placerArme(){
        var numeroBrique = outil.entierAleatoire(0,99);
        // on verifie que la case n'est pas deja un obstacle
        while ((listeBrique[numeroBrique].id === 'briqueObstacle')||(listeBrique[numeroBrique].classList.contains('arme'))){
            numeroBrique = outil.entierAleatoire(0,99);
        }
        listeBrique[numeroBrique].className = 'arme';
        listeBrique[numeroBrique].appendChild(this.el);
    }




}



