// Varsayılan değerler -- NaN almamak için varsayılan değer girmek

const toplam = (sayi1, sayi2) => {
    return sayi1+sayi2;
}

const toplam2 = (sayi1 =0, sayi2=0) => {
    return sayi1+sayi2;
}

console.log(toplam(5)) // bu şekilde çalıştırırsak sayi2 değeri undefined olduğu için NaN bir dönüş sağlandı
console.log(toplam2(4))


// React üzerinde örnek kullanımı

const STATE_BASLANGICI = {yukleniyor: false, yazilar: []};

const reducer = {state: STATE_BASLANGICI, action} => {
    return state;
}
//
