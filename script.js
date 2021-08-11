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



const store = localStorage.getItem("store") || []

buttonSaveGenerator.addEventListener("click", () => {
    colection.name = formDataGenerator.name;
    colection.season = formDataGenerator.season;
    colection.episode = formDataGenerator.episode;
    colection.id = Math.random() * 1000000;

    store.push(colection)

    const jsoon = JSON.stringify(store)

    localStorage.setItem("store", jsoon)
})