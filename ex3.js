let rand,color;
color=["red" , "blue", "pink", "green", "yellow", "orange", "purple"];
/*Base
rand=Math.round(Math.random()*color.length);
alert(color[rand]);*/

/*Variante 1
let id=prompt("Saisissez un nombre entre 0 et 6");
if((id>6 || id<0) || isNaN(id)){
    alert("Erreur cet ID n'est pas valide");
} else {
    alert(color[id]);
}*/

//variante 2
let marker=-1;
rand=prompt("Entrez le nom d'une couleur");
for(let index in color){
    if( color[index] == rand ){
        marker=index;
        break;
    }
}
/*if(isNaN(marker)){
    alert("something went wrong");
} else{
    alert("everything seems fine");
}*/
if(marker >= 0){
    alert("L'ID est " + marker);
} else{
    alert("la couleur n'est pas contenu dans le tableau");
}