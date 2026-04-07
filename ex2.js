        
        function caller(){
            //console.log("ça marche mais pas comme prévu");
            let pays1,boleur=0;
            let liste=["France","Espagne","Allemagne"];
            let span;
            liste[0]="France";
            liste[1]="Espagne";
            liste[2]="Italie";
            liste[3]="Allemagne";
            liste[4]="Pologne";
            liste[5]="Belgique";
            pays1=prompt("Saisissez un pays:");
            for(let index in liste){    //comparaison de format avec for ... of ...: value of liste. Légèrement moins pratique, mais un peu plus rapide à écrire occasionnellement
                if(liste[index]==pays1){
                    console.log("liste["+index+"]="+liste[index]+"=pays1"+"=="+pays1);
                    boleur=1;
                    break;
                } else {
                    console.log("liste["+index+"]="+liste[index]+"=pays1"+"!="+pays1);
                }
            }
            /*for(let index in liste){
                console.log("liste["+index+"]="+liste[index]);
            }*/
            if(boleur==1){
                span=document.getElementById("span");
                span.innerHTML="C'est un pays de l'union Européenne";
                console.log("membre de l'union Européenne");
            } else if(boleur==0) {
                span=document.getElementById("span");
                span.innerHTML="lol pays du tier monde";
                console.log("pas membre de l'union Européenne");
            }
    }

    caller();