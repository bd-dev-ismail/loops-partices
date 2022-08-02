var numbers = [43, 54, 76, 20, 34, 78, 95, 234, 36, 75];
for(var i =0; i < numbers.length; i++){
    var number = numbers[i];
    if(number > 90){
        continue;
    }
    console.log(number);
}