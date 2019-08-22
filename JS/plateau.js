var plateau = $('#plateau');
var listeBrique = [];


class Plateau {
    constructor(){

        this.generationPlateau();
    }
    generationPlateau(){
        for(let i = 0;i<10;i++) {
            for(let j = 0;j<10;j++)
            {
                let brique=document.createElement('p');
                brique.id = 'briqueVide';
                brique.style.marginTop=(j*60)+"px";
                brique.style.marginLeft=(i*60)+"px";
                plateau.append(brique);
                listeBrique.push(brique);
            }
        }
    }
}








