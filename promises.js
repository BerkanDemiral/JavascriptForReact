const axios = require("axios");

function ulkeGetir(){
    axios
    .get("http/google/ülkeler/getAll..."),
    .then((response)=> console.log(response.data)), // eğer bağlantı başarılı olursa sonuçları döndürsün
    .catch();
}