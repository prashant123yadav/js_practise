var rangeSum = function(number) {
    console.log(number);
    var sum = 0;
    var i = number;
    if (number < 0){
      while(i < 0) {
        sum = sum + i;
        i = i + 1;
      }
    }
    else {
      while(i > 0) {
        sum = sum + i;
        i = i - 1;
      }
    }
    return sum;
  }