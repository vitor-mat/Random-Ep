const formDataGenerator = {
    name: document.getElementById("serie-name-input"),
    season: document.getElementById("season-number-input"),
    episode: document.getElementById("episode-number-input"),
}

const colection = {
    name: "",
    season: "",
    episode: "",
    id: ""
}

const buttonSaveGenerator = document.getElementById("save-button")


const store = JSON.parse(localStorage.getItem("store")) || []

buttonSaveGenerator.addEventListener("click", () => {

    colection.name = formDataGenerator.name.value;
    colection.season = formDataGenerator.season.value;
    colection.episode = formDataGenerator.episode.value;
    colection.id = Math.random * 10000000;

    console.log(store)

    store.push(colection)

    const jsoon = JSON.stringify(store)

    localStorage.setItem("store", jsoon)
    clearInputs()
    document.getElementById("logo").click()
})

function clearInputs(){
    formDataGenerator.name.value = "";
    formDataGenerator.season.value = "";
    formDataGenerator.episode.value = "";
}