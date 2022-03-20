
function getNumber(currency){

 return new Promise((resolve, reject)=> {

    if(typeof currency != "number"){
        reject(new Error("Currency is not number "))
    }else{
        resolve(currency)
    }
 })
}

getNumber('000').then((val)=>{
    console.log("value: ", val)
})