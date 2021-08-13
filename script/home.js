
function showStore(){
    const store = JSON.parse(localStorage.getItem("store"))

    const principal = document.getElementById("main-colunm-name")

    if(store){

        for(let c = 0; c<store.length; c++){
            const paragrafo = document.createElement("p");
        
            paragrafo.innerHTML = store[c].name
    
            principal.appendChild(paragrafo)
        }
    }
}

showStore()