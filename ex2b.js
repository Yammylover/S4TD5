        
        function caller(){
            //console.log("ça marche mais pas comme prévu");
            let pays="none",boleur=0;
            let span;
            span=document.getElementById("span");
            do{
                span.innerHTML="";
                pays=prompt("Saisissez un pays tout en minuscules ou tout en majuscules:");
                if(pays==pays.toLowerCase()){
                    console.log("minuscules");
                    switch(pays){
                        case "france":
                        case "espagne":
                        case "allemagne":
                        case "pologne":
                        case "belgique":
                            span.innerHTML="C'est un pays de l'union Européenne";
                            break;
                        case "russie":
                        case "biélorussie":
                        case "ukraine":
                        case "estonie":
                            span.innerHTML="C'est un pays de l'ex-URSS";
                            break;
                        default:
                            span.innerHTML="Ce n'est pas un pays de l'union Européenne ni de l'ex-URSS";
                            break;
                    }
                } else if(pays==pays.toUpperCase()){
                    console.log("majuscules");
                    switch(pays){
                        case "FRANCE":
                        case "ESPAGNE":
                        case "ALLEMAGNE":
                        case "POLOGNE":
                        case "BELGIQUE":
                            span.innerHTML="C'est un pays de l'union Européenne";
                            break;
                        case "RUSSIE":
                        case "BIELORUSSIE":
                        case "UKRAINE":
                        case "ESTONIE":
                            span.innerHTML="C'est un pays de l'ex-URSS";
                            break;
                        default:
                            span.innerHTML="Ce n'est pas un pays de l'union Européenne ni de l'ex-URSS";
                            break;
                    }
                } else if (pays!=null){
                    console.log("autre");
                    switch(pays){
                        case "France":
                        case "Espagne":
                        case "Allemagne":
                        case "Pologne":
                        case "Belgique":
                            span.innerHTML="C'est un pays de l'union Européenne";
                            break;
                        case "Russie":
                        case "Biélorussie":
                        case "Ukraine":
                        case "Estonie":
                            span.innerHTML="C'est un pays de l'ex-URSS";
                            break;
                        default:
                            span.innerHTML="Ce n'est pas un pays de l'union Européenne ni de l'ex-URSS";
                            break;
                    }
                }
            } while(pays != pays.toLowerCase() && pays != pays.toUpperCase());
    }

    caller();