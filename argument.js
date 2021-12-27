var fiboseq =
function(index)
{
    if (index == 0) return 0;
    if (index == 1) return 1;
    return arguments.callee(index -1 ) + arguments.callee(index -2 );
}
 console.log(fiboseq(4))