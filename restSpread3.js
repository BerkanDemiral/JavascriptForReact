// Dizi içerisindeki bir değeri parçalayarak fonksiyona parametre olarak yollama -- Fonksiyon parametrelerini parçalama 

function topla(sayi1, sayi2, sayi3) {
    return sayi1+sayi2+sayi3;
}

const sayilar = [1,2,3]
//console.log(topla(...sayilar));

// İKİ DİZİYİ BİRBİRİNE BİRLEŞTİRKEN DE BU KULLANIMI YAPARIZ

const dizi1 = [1,2,3];
const dizi2 = [4,5,6];

const birlesmis = dizi1.concat(dizi2);
console.log(birlesmis);

const birlesmis2 = [...dizi1, ...dizi2];
console.log(birlesmis2);