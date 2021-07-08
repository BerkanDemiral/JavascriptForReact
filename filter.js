const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];

// find metodunda o filter'a uyan ilk değeri bize döndürüyordu burada tüm değerlerin dönmesini sağlayabiliyoruz

console.log(urunler.filter((urun) => urun.fiyat > 2))

console.log(urunler.filter((urun) =>
    urun.name.toLowerCase().includes("kalem".toLowerCase())
));

// FİLTER GENELDE MAP İLE KULLANILIR -- ÖNCE FİLTRELENİP SONRA MAP İLE YAZDIRMA İŞLEMİ YAPILIR

console.log(urunler.filter((urun) => 
    urun.fiyat > 2).map(urun=> `${urun.name} fiyatı 5 den büyüktür.`)
    )