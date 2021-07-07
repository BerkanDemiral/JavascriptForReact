// array methods()
// .find() .some() .every()


const urunler = [
    { id: 1, name: "Kalem", fiyat: 5 },
    { id: 2, name: "Defter", fiyat: 10 },
    { id: 3, name: "Silgi", fiyat: 2 },
    { id: 4, name: "Kalemtraş", fiyat: 7 },
];

console.log(`Find:`, urunler.find((urun) => urun.fiyat>5)); // ilk bulduğu değeri döndürür, tüm fiyatı 5'ten büyük olanları değil

console.log(`Some: `, urunler.some((urun) => urun.fiyat<2)) // eğer o değerden varsa true döndürür yoksa false
 
console.log(`Every: `, urunler.every((urun) => urun.fiyat>6)) // dizideki tüm elemanların bu koşulu sağlaması gerekiyor. Sağlamayan 1 tane bile varsa false döndürür. 