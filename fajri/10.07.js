// mengakses REST API menggunakan fetch
fetch(`https://restcountries.com/v3.1/name/indonesia`)
// memembuat parameter untuk menampung JSON dari fetch REST API di atas
.then((response) => response.json())
// mengubah hasil JSON dari parameter tapi sebagai objek untuk digunakan pada HTML
.then((res) => {
// mengambil elemen berdasarkan id
const flag = document.getElementById("country-flag");
// membuat elemen baru untuk dijadikan child dari elemen yang diambil
const imageElement = document.createElement(`img`);
// mengakses value dari properti flags
imageElement.src = res[0].flags.png;
// menjadikan elemen baru tsb sebagai child dari elemen yang diambil
flag.appendChild(imageElement);
// mengambil elemen berdasarkan id

const name = document.getElementById("country-name");
// membuat elemen baru untuk dijadikan child dari elemen yang diambil
const nameElement = document.createElement("div");
// mengakses value dari properti name
nameElement.innerHTML = res[0].name.official;
// menjadikan elemen baru tsb sebagai child dari elemen yang diambil
name.appendChild(nameElement);
// mengambil elemen berdasarkan id
const capital = document.getElementById("country-capital");
// membuat elemen baru untuk dijadikan child dari elemen yang diambil
const capitalElement = document.createElement("p");
// mengakses value dari properti capital
capitalElement.innerHTML = res[0].capital;
// menjadikan elemen baru tsb sebagai child dari elemen yang diambil
capital.appendChild(capitalElement);
});