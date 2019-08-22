// SELECTION AVATAR *****************

let avatar1 = $('#avatarSelect0').attr('src');
let avatar2 = $('#avatarSelect5').attr('src');

// fonction pour selectionner les avatars au click
function clickAvatar (id) {
    $('#'+id).click(function(){
        if(id[12]<5){
            for (let i = 0; i < 5; i++) {
                $('#avatarSelect'+i).css('border-style', 'none');
                avatar1 = $('#'+id).attr('src');
            }
        }
        else {
            for (let i = 5; i < 10; i++) {
                $('#avatarSelect'+i).css('border-style', 'none');
                avatar2 = $('#'+id).attr('src');
            }
        }
        $('#'+id).css('border', '3px dashed black');


    })
}

// boucle sur la fonction pour tous les avatars
for (let i = 0; i < 10; i++) {
    clickAvatar('avatarSelect'+i);
}
     



// ajout des fichiers JS au HTML

let classes=["outils", "obstacle", "armes", "plateau", "mouvements", "joueur",  "combat", "lancerJeu" ];

document.addEventListener("DOMContentLoaded",function()
{
	for(let i = 0;i<classes.length;i++)
	{
		let sEl=document.createElement('script');
		sEl.src="JS/"+classes[i]+".js";
		document.body.appendChild(sEl);
	}
});

