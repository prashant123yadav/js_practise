var samallFunction = function(){
    console.trace("this is a tarce")
}

var bigFunction = function(){
    samallFunction()
}
 bigFunction();