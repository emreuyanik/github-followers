// 1.input canlandirilmali

const searchTextEl = document.getElementById("searchText");
const buttonEl = document.getElementById("button");
const cardsEl = document.getElementById("cards");

// 2.yazdiktan sonra ikinci input olusmali
// 3.api ile butun veriler cekilmeli

//https://api.github.com/users/anthonyharold67/followers?per_page=100

const getUsers = async () => {
    const res = await fetch("https://api.github.com/users/anthonyharold67/followers?per_page=100")
    const data = await res.json();
    console.log(data);

}

getUsers()





// 4.inputa girdigim deger apiye yerlestirilmeli
// 5.kullanicilar geldikten sonra suzulebilmeli

