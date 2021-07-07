let kullanici = {isim: "Berkan", yas: 23, sehir: "İstanbul"};

// kullanici.sehir = "Tekirdağ"; // yapılabilir ama yanlış(react içinde böyle bir kullanım yapılmaz) -- bu işleme mutate etmek denir

// kullanici = {isim: "Berkan", yas: 23, sehir: "İstanbul", sehir: "Tekirdağ"}; // kullanımı yapılır ama bu kopyalama işlemi böyle değil, spread ile gerçekleştirilir

kullanici = {... kullanici, sehir:"Ankara"}
console.log(kullanici)


// ***************************************************

const INITIAL_STATE = {
    yukleniyor: false,
    hataMesajı: "",
    arabalar: ["Mercedes", "BMW", "Audi"]
};

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "ARABA_EKLE":
            return { ... state , arabalar: [... state.arabalar, action.payload]}
// ARABA_EKLE geldiğinde yeni bir obje döndürüyoruz. state içindeki her şeyi alıyoruz(...state), daha sonra arabalar değerini, arabalara yeni bir dizi atarak güncelliyor
// atanan dizide arabalar değerini dizi içerisinde olduğu için parametre olarak alıyoruz ve seçilen action(comboboxtaki araba)'a göre araba ekleme işlemi yapıyoruz  
        default: return state;
    }
}

// BUNU YAPMAK YERİNE

INITIAL_STATE.arabalar.push("Tofaş") // yaparsak da istediğimize ulaşırız ama ram'de aynı yeri tutar ve bu istenmeyen bir şeydir. 