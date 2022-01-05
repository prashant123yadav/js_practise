var sum = function(x,y) 
{
    return x+y
};
   var subtract = function(x,y)
{
    return x-y
};
var multiply = function(x,y)
{
    return x*y
};
   var divide = function(x,y)
{
    return x/y
};
  var oprations  = [sum,subtract,multiply,divide];

    for (var i=0 ; i < oprations.length ; i++)
{
    console.log(oprations[i](5,10))
}; 
