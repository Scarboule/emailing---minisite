const btn = document.getElementById("btn");
const valid = document.getElementById("valid");


//random appel state (Ok or closed)
let appelState = (Math.floor(Math.random() * 10)) % 2;
console.log(appelState);




btn.addEventListener("click", event =>{
    
    if(appelState === 1){
        
        valid.classList.add("is-valid");
        valid.innerHTML = ("Vous avez été noté présent ");
    }else if(appelState === 0){
        valid.classList.add("is-not");
        valid.innerHTML = ("L'appel est clôturer.")
    }else{
        console.log("Qu'es que je fait ici ?")
    }
})