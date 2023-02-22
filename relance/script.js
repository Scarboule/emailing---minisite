const btn = document.getElementById("btn");
const valid = document.getElementById("valid");
let choix = document.getElementsByName("Oui");


btn.addEventListener("click", event =>{
    for(let i = 0; i < choix.length; i++)
        if(choix[i].checked){
            if(choix[i].value === "oui"){
                while(valid.classList.contains("is-not")|| valid.classList.contains("is-valid")){
                    valid.classList.remove("is-not");
                    valid.classList.remove("is-valid");
                }
                valid.classList.add("is-valid");
                valid.innerHTML = ("Vous serez relancer avant le rendu");
            }else{
                while(valid.classList.contains("is-not")|| valid.classList.contains("is-valid")){
                    valid.classList.remove("is-not");
                    valid.classList.remove("is-valid");
                }
                valid.classList.add("is-not");
                valid.innerHTML = ("OK.");
            }
        }
    
    
});
