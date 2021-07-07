// obje ve dizilerin parçalara bölünüp değişkenlere atanması 

const user = {
    _name: "berkan",
    age: 23,
    address: "Istabbul",
    country: "Turkey",
    job: "Engineer"
};

const {_name, ...others} = user; // name değişkeni name'e atandı diğer değişkenler bir dizi haline getirilip others'a atandı *** rest operatörü
// console.log(others)

function showsUser({_name, age}){
    return `${_name} isimli kullanıcı ${age} yasındadır`
}

// --------------------------------

const numbers = [1,2,3,4,5]
//const[bir, iki, uc, dort, bes] = numbers;

const[birinciEleman, ...kalanElemanlar] = numbers;
console.log(birinciEleman);
console.log(kalanElemanlar);

