
function showStore(){
    const store = JSON.parse(localStorage.getItem("store"))

    const mainColunmName = document.getElementById("main-colunm-name")
    const mainColunmSeasons = document.getElementById("main-colunm-seasons")

    if(store){

        for(let c = 0; c<store.length; c++){
            const names = document.createElement("p");
            names.innerHTML = store[c].name
            mainColunmName.appendChild(names)

            const seasons = document.createElement("p");
            seasons.innerHTML = store[c].season
            mainColunmSeasons.appendChild(seasons)
        }
    }
}

showStore()