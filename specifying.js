var kind = "substract";
var op ;
if (kind =="add")
{
  op = function (a,b){
      return a+b;
  };
}
else  
{
    op = function(a,b){
        return a-b ;
    };
}
console.log(op(35,23))