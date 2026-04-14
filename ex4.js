function accorder(nombre,singulier,pluriel,booleen=true){
    //vérification paramètres
    if(isNaN(nombre) || !(singulier) || !(pluriel)){
        alert("Erreur paramètres");
        return;
    }
    if(booleen==true){
        console.log("booleen="+booleen+"=>booleen=true")
        booleen=true;
        console.log("booleen=true");
    } else {
        console.log("booleen="+booleen+"=>booleen=false")
        booleen=false;
        console.log("booleen=false");
    }
    //process
    let ret;
    if( nombre > 1 || nombre < -1 ){
        ret=pluriel;
    } else if( nombre <=1 && nombre >= -1 ){
        ret=singulier;
    }
    if(booleen){
        ret=nombre+" "+ret;
    }
    return ret;
}

let param1=prompt("Combien?");
let param2=prompt("Singulier?");
let param3=prompt("Pluriel?");
let param4=prompt("Afficher le nombre? (true/false)");
alert(accorder(param1,param2,param3,param4));