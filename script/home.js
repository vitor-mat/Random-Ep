
function showStore(){
    const store = JSON.parse(localStorage.getItem("store"))

    const mainColunmName = document.getElementById("main-colunm-name")
    const mainColunmSeasons = document.getElementById("main-colunm-seasons")
    const mainColunmEpisodies = document.getElementById("main-colunm-episodes")
    const mainSeriesListDiv = document.getElementById("main-series-list-div")
    const divBtnGerar = document.getElementById("div-btn-gerar");
    const divBtnDeletar = document.getElementById("div-btn-deletar");

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
            btnGerar.name = store[c].id
            divBtnGerar.appendChild(btnGerar);
            mainSeriesListDiv.appendChild(divBtnGerar);

            const btnDeletar = document.createElement("button");
            btnDeletar.innerHTML = "Deletar";
            btnDeletar.name = store[c].id
            btnDeletar.setAttribute("id", `btn-deletar-${c}`)
            divBtnDeletar.appendChild(btnDeletar);
            mainSeriesListDiv.appendChild(divBtnDeletar);
            document.querySelector(`#btn-deletar-${c}`).addEventListener("click", e => {
                console.log(e.target.name)
            })
        }
    }
}

showStore()