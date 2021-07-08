const isim = "berkan";
const kullanici = {isim, yas:35};
function merhaba(isim){
    return `Merhaba ${isim}`;
}

export {isim, kullanici, merhaba};

/*
    İçe aktarım işlemi yapacaksan değişkenlerimizi ve fonksiyonlarımızı export ile tanımlamamız gerekmektedir. Ama tüm tanımları normal bir şekilde yaptıktan sonra hepsini
tek satırda da export içerisinde yazabiliriz. Artık bu klasör içerisindeki herhangi br js dosyasından import işlemi gerçekleştirerek buradaki yapıları içe aktarmış olacağız ve
kullanabileceğiz. 

*/