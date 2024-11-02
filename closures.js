// Closures
// function x(){
//     var a = 7 ;
//     function y(){
//         console.log(a) ; 
//     }
//     return y ;
// }

// var z = x() ; 
// console.log(z);
// z() ;
// Deep nested closures
const function1 = () =>{
    return new Promise((resolve , reject) =>{
        setTimeout(() => {
            const success = true ;
            if(success){
                resolve("successfully done")
            }else {
                reject("Failed to fetch")
            }
        } , 3000)
    })
}

function1()
.then((mess) =>{
    console.log(mess);
})
.catch((error) =>{
    console.log(error)
}).finally(() =>{
    console.log("fetch attempt finished ")
})