function getItem(){
    const choosedItem = JSON.parse(localStorage.getItem("choosedItem"));

    document.getElementById("serie-name-title-random-ep").innerHTML = choosedItem.name;

    const choosedEp = parseInt((Math.random() * Number(choosedItem.episode)) + choosedItem.episode)


    console.log(Number(choosedItem) != 0)
    document.getElementById("episode-generated-random-ep").innerHTML = `episodio ${choosedEp}`

}

getItem()