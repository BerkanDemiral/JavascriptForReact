// Varsayılan exportlarda -- export default kelime grubunu kullanıyoruz. ** Bir dosyada yalnızca 1 adet export default dışa aktarması yapılabilir.

function merhaba(isim){
    return `Merhaba ${isim}`;
}

const kullanici = {isim:"Berkan", yas:23};
const isim="Ahmet"



export {merhaba as default, kullanici, isim}  // diyerek export işlemini burada da yapabiliriz. 

