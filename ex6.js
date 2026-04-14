function compteur(){
    const pwl=document.getElementById("password").value.length;
    //console.log("Récupération de la longueur du mot de passe: "+ pwl);
    const div=document.getElementById("compteur");
    //console.log("Récupération de l'élément compteur");
    div.innerHTML=pwl;
    if( pwl < 7 ){
        div.innerHTML+=": Mot de passe faible";
    } else if( pwl < 12 ){
        div.innerHTML+=": Mot de passe acceptable";
    } else if( pwl >= 12 ){
        div.innerHTML+=": Mot de passe fort";
    }
}

function togglePassword(){
    const input=document.getElementById("password");
    let time=5;
    input.type="text";
    let div=document.getElementById("compteur");
    div.innerHTML += "<div id=\"time\"></div>";
    timer=document.getElementById("time");
    const timeisrunningout = setInterval( ( ) =>{
            console.log(time);
            timer.innerHTML=time;
            time--;
    }, 1000);
    
    setTimeout( ( ) => {
        clearInterval(timeisrunningout);
        input.type="password";
        timer.innerHTML='';
    },6000);
}