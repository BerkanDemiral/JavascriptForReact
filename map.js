const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];
//collback function ile her bir ürünü dolaşıyoruz(ürün => kısmı) ve özelliklerini yazdırabiliyoruz
console.log(urunler.map(urun => `${urun.name} fiyatı ${urun.fiyat} liradır.`)) 

function urunGoster({urunListesi}){
    return urunListesi.map(urun => <li key={urun.id} > {urun.name} fiyatı {urun.fiyat} liradır </li>)
}