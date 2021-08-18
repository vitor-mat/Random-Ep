function getItem(){
    const choosedItem = JSON.parse(localStorage.getItem("choosedItem"));

    document.getElementById("serie-name-title-random-ep").innerHTML = choosedItem.name;
}

getItem()