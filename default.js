function calculatePrice(total, tax = 0.1 , tip = 0.05){
console.log(total + (total * tax) + (total * tip));
}
calculatePrice(100 , undefined ,0.05)