var kind = "substract"
var op = createOperation(kind);
console.log(op(35,23));
function createOperation (kind)
{
    if (kind=="add"){
        return function (a,b){
            return a+b;
        };
    }
    else{
        return function (a,b){
            return a-b ;
        };
    }
}