// objeleri (key-value) oluştururken değişkenin direkt olarak girilmesine gerek yoktur.

const name_ = "berkan";
const age = 23;

const user_object = {name_ : name_ , age: age} // normale mantık budur ama hem fazla kod hem de aynı değer kullanımı karışıklığa neden olabilir

const user_object2 = {name_ , age} // ama javascript böyle bir kullanımı anlar ve key-value ilişkisini otomatik olarak kurar 

console.log(user_object2);

// bu özelliğin react içerisinde kullanımı: 

function Counter({initialValues, state}){
    const[counter , setCounter ] = useCounter({initialValues,state});
    return <button onClick={setCounter}>{counter}</button>
}