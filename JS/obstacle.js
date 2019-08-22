class Obstacle {
    constructor(){
       this.generationObtacle();
        
    }
    generationObtacle(){
        var nombreObstacle = 10;
        for(let j = 0;j<nombreObstacle;j++)
        {   
            var numeroBrique = outil.entierAleatoire(0,99);
            // on verifie que la case n'est pas deja un obstacle
            while (listeBrique[numeroBrique].id !== 'briqueVide'){
                numeroBrique = outil.entierAleatoire(0,99);
            }
            listeBrique[numeroBrique].id = 'briqueObstacle';
        }
    }
}

