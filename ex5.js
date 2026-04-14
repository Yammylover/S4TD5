function greetings(){
    let ret="Bonjour ";
    let prenom1 = document.getElementById("prenom1").value;
    let prenom2 = document.getElementById("prenom2").value;
    let checker1=prenom1.length;
    let checker2=prenom2.length;
    console.log("prenom1:"+prenom1+"prenom2:"+prenom2);
    if( checker1 != 0 ){
        ret += prenom1;
    }
    if( checker1 != 0 && checker2 !=0 ){
        ret += " et ";
    }
    if( checker2 != 0 ){
        ret += prenom2;
    }
    alert( ret );
}