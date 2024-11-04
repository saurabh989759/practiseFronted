const cart = ["shoes" , "pants" , "kurta"]

// call back hell and pyramid of doom 
createOrder(cart , function(orderId){
    proceedToPayment(orderId , function(paymentInfo){
        showOrderSummary(paymentInfo , function(){
            updateWalletBalance() ;
        })
    })
});

//so to encounter we use promise chaining

createOrder
.then(function (orderId){
  return   proceedToPayment(orderId)  // return is important to avoid error 
})  
.then(function(paymentInfo){
  return    showOrderSummary(paymentInfo)
})
.then(function(){
  return   updateWalletBalance() ; 
})

//or using arrow functions
createOrder
.then((orderId) => proceedToPayment(orderId) ) // return is important to avoid error 
.then((paymentInfo) =>  showOrderSummary(paymentInfo))
.then(() =>   updateWalletBalance() )

function createOrder(cart){
    const pr = new Promoise(resolve , reject) {
        if(!validateCart(cart)){
            const er = new Error("cart is not valid")
            reject(er) ;
        }
        //logic to create the orderId and we created orderid 
        return resolve(orderId) ; 
    }
    return pr ; 
}