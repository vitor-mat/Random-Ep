
function showStore(){
    const store = JSON.parse(localStorage.getItem("store"))

    const mainColunmName = document.getElementById("main-colunm-name")
    const mainColunmSeasons = document.getElementById("main-colunm-seasons")
    const mainColunmEpisodies = document.getElementById("main-colunm-episodes")
    const mainSeriesListDiv = document.getElementById("main-series-list-div")
    const divBtnGerar = document.getElementById("div-btn-gerar");

    if(store){

        for(let c = 0; c<store.length; c++){
            const names = document.createElement("p");
            names.innerHTML = store[c].name
            mainColunmName.appendChild(names)

            const seasons = document.createElement("p");
            seasons.innerHTML = store[c].season
            mainColunmSeasons.appendChild(seasons)

            const episodes = document.createElement("p");
            episodes.innerHTML = store[c].episode
            mainColunmEpisodies.appendChild(episodes)

            const btnGerar = document.createElement("button");
            
            btnGerar.innerHTML = "Gerar";

            divBtnGerar.appendChild(btnGerar);
            mainSeriesListDiv.appendChild(divBtnGerar);
        }
    }
}

showStore()