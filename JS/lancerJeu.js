class lancerJeu {
    constructor(){
        this.lancementJeu();
    }
    lancementJeu(){
        let nomJoueur1 = inputNomPerso1.value;
        let nomJoueur2 = inputNomPerso2.value;
        let genePlateau = new Plateau();
        let geneObstacle = new Obstacle();
        for (let j = 1;  j < 5;  j++) {
            let geneArme = new Armes(j);
            geneArme.placerArme();
        }
        joueur1 = new Joueur(nomJoueur1, avatar1);
        joueur1.el.style.backgroundColor = 'red';
        joueur2 = new Joueur(nomJoueur2, avatar2);



        // sinon on engage les mouvements
        let mvts = new Mouvement(joueur1, joueur2);

        // initialisation des infos joueurs + animation page
        $('#arme1').text(joueur1.el.arme+ ' (Dégats ' + joueur1.el.degat + ')');
        $('#arme2').text(joueur2.el.arme+ ' (Dégats ' + joueur2.el.degat + ')');
        $('#imgArme1').attr('src', joueur1.el.armesrc);
        $('#imgArme2').attr('src', joueur2.el.armesrc);
        $('#nomPerso1').text(joueur1.el.nom);
        $('#nomPerso2').text(joueur2.el.nom);
        $('#pointVie1').text(joueur1.el.pointVie);
        $('#pointVie2').text(joueur2.el.pointVie);
        $('#imgAvatar1').attr('src', joueur1.el.src);
        $('#imgAvatar2').attr('src', joueur2.el.src);
        $('#titreSecondaire').hide();
        $('#choixPerso').hide();
        $('#detailPerso').show();
        $('#plateau').show();
        $('#controleJeu').show();
        
    }
}





// lancement jeu suivant le bouton cliqué

let joueur1Pret = 'non';
let joueur2Pret = 'non';
let joueur1 = '';
let joueur2 = '';
let nomJoueur1 = '';
let nomJoueur2 = '';


$('#formPerso1').submit(function () {
    $('#messageAvatar1').text('');
    event.preventDefault();
    joueur1Pret = 'oui';
    if (joueur2Pret === 'oui'){
        if (avatar1 == avatar2) {
            $('#messageAvatar1').text("Cet avatar n'est plus disponible, merci de changer");
        }
        else {
            let jeu = new lancerJeu();
        }
    } 
});  


$('#formPerso2').submit(function () {
    $('#messageAvatar2').text('');
    event.preventDefault();
    joueur2Pret = 'oui';
    if (joueur1Pret === 'oui'){
        if (avatar1 == avatar2) {
            $('#messageAvatar2').text("Cet avatar n'est plus disponible, merci de changer");
        }
        else {
            let jeu = new lancerJeu();
        }
    } 
});   









