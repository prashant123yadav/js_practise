function dostuff(x,y,z)
{
    console.log(x+y+z)
}
 var args=[0,1,2]
 dostuff.apply(null,args)
 dostuff(...args)
 console.log(args)