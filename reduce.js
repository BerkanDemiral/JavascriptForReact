const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];
 /*
const toplamUrunFiyati = urunler.reduce(
    (toplam, urun) => (toplam = toplam + urun.fiyat),0 // 2 farklı parametre alan bir arrow functions.. 
);

const toplamDizi = urunler.reduce(
    (toplam, urun) => (toplam = [...toplam, urun.name]), // elemanları sürekli gezecek ve her seferinde aynı diziye yeni eklenen elemanın ismini alacak 
    []
);
*/

const toplamDizi2 = urunler.map((urun) => `${urun.name} ${urun.fiyat} TL`)
console.log(toplamDizi2)