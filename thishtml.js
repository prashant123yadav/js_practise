var randonColor = function(){
var rvalue = function(){
    return Math.round(Math.random()*255)
}
return 'rbg('+rvalue()+","+rvalue()+","+rvalue()+")";   
}