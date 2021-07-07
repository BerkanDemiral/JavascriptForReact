// OKLU FONKSİYONLAR -- javascriptte fonksiyon oluşturmanın yeni bir yönetimidir
// oklu fonksiyon ifadeleri bir değişkene atanırsa, o değişkenden önceki ifadelerde kullanılamazlar
// yani, normal fonksiyonlar onları oluşturmadan önceki satırlarda bile çağırılabilirler ama oklu fonksiyonlar sadece oluştuktan sonraki satırlarda çağırılabilirer.

console.log(total_(4,8));

function total_(number1, number2){
    return number1+number2
}

// console.log(total2); bu ifade kullanılamaz 
const total2 = (number1, number2) =>{
    return number1+number2;
}

const total3 = (number1, number2) => number1+number2; // eğer tek bir return ifadesi olursa tek satırda bu şekilde yazılabilir. 

console.log(total2(9,9));
console.log(total3(9,10));