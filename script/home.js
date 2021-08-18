
function showStore(){
    const store = JSON.parse(localStorage.getItem("store")).sort((a, b) => {
        if(b){
            return Number(a.name.charCodeAt()) - Number(b.name.charCodeAt())
        }
            return true
    })

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
            btnGerar.innerHTML = `<a href="./random_ep.html">Gerar</a>`;
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

                removeItem(e.target.name, store)

            })
        }
    }
}

showStore()

function removeItem(id, store){
    const itemsFilted = store.filter( value => {
        if(Number(id) == Number(value.id)){
          return false
        }
        return true
      })
    
      const itemsFiltedJSON = JSON.stringify(itemsFilted)
      localStorage.setItem("store", itemsFiltedJSON);
      document.getElementById("logo").click()
}
