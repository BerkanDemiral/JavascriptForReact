// Ternary conditional operators -- (3 değişkenli koşul operatörleri)

/* koşul ? doğruysa : yanlışsa 

 if(koşul){
     doğruysa
 }
 else {
     yanlışsa 
 }

 AYNI ŞEY
 */

const koprununDurumu = "tadilat var";

koprununDurumu === "acik"
    ? console.log("Köprü açık") 
    : koprununDurumu === "kapali"
        ? console.log("Köprü kapalı")
        : console.log(koprununDurumu);


const objeDeger = { isim: "berkan" }
Object.keys(objeDeger).length
    ? console.log("geçerli obje")
    : console.log("geçersiz obje");

const dizi = []
dizi.length
    ? console.log("dizi geçerli")
    : console.log("dizi geçersiz");

    // Bu ifadeler bir nevi true ise şu false ise bunu yap demeye tekabül eder 