function fibonacci (index){
    if (index==0) return 0;
    if (index==1) return 1;
    return fibonacci(index -1 ) + fibonacci (index - 2)
}
 for (var i = 0; i<5 ; i++)
 {
     console.log(fibonacci(i))
 }