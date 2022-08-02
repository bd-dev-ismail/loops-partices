// var num = 0;
// while(num < 10){
//     console.log(num);
//     num++;
// }
// for(i = 0; i <=10; i++){
//     console.log(i);
//     if(i <5){
//         break;
//     }
// }
// var num = "72.50";
// // console.log(parseFloat(num));

// var hero = 'Badsha'
// if(hero == 'Hero Alam'){
//     console.log('Marbo bogurai lash porbe magurai');
// }
// else if(hero == 'Mitun Dash'){
//     console.log('Marbo ekane lash probe shosane');
// }
// else if(hero == 'Badsha khan'){
//     console.log('Marbo chittagong lash prbe kobore');
// }
// else {
//     console.log('Maramari Kora valo na');
// }
// var result = 33;
// if (result <=32 && result >0){
//     console.log(result, "Fail");
// }
// else if(result >=33 && result < 40){
//     console.log(result, "D Grade");
// }
// else if(result >=40 && result <50){
//     console.log(result, "C Grade");
// }
// else if(result >=50 && result <60){
//     console.log(result, "B Grade");
// }
// else if(result >= 60 && result <70){
//     console.log(result, "A-")
// }

// var numbers = [1, 'rahim', 3, 4, 5, 'Ratul', 7, 8, 9]
// // numbers.pop();
// // numbers.push('Nowrin');
// // numbers.pop();
// // numbers.shift();
// numbers.unshift('Hell0');
// numbers.shift();
// console.log(numbers);
// var num = 1;
// while(num <= 10){
//     console.log(num);
//     num++;
// }
//
// for(var i = 2; i <= 20; i +=2){
//     console.log(i);
// }
var friends = ['sabbir', 'tusharrr', 'foysall', 'akib'];
var temp = friends[0];
// console.log(temp.length);
for (var i = 0; i < friends.length; i++){
    var element = friends[i];
    if(element.length > temp.length){
        temp = element;
        console.log(element);
    }
}

