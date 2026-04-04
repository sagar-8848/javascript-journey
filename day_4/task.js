// ? a count down timer using js

function countDown(timer) {
  if (timer === 0) {
    console.log("Blast Off!");
    return;
  }
  console.log(timer);

  countDown(timer - 1);
}

countDown(4);

// ? a power function using recursion

// function pwrRccrn(num, pow) {
//   if (pow === 0) {
//     return 1;
//   }
//   return num * pwrRccrn(num, pow - 1)
// }
// console.log(pwrRccrn(2, 3)); // should print 8
// console.log(pwrRccrn(2, 4)); // should print 16
// console.log(pwrRccrn(3, 3)); // should print 27

// ? recurrsion

// ? it it a funciton which is called by itself ->

// function recur(num){
//   if(num === 0){
//     console.log('done!');
//     return;
//   }
//   console.log(num);
//   recur(num - 1)
// }
// recur(5);

// ? a power calculator

function powerCalc(num, power) {
  if (power === 0) {
    return 1;
  }
  return num * powerCalc(num, power - 1);
}
powerCalc(2, 6);


// ? 2 * (2, 5) =  2 * 32 = 64
// ? 2 * (2 , 4) = 2 * 16 = 32
// ? 2 * (2 , 3) = 2 * 8 =- 16
// ? 2 * (2 , 2) 2 * 4 = 8
// ? 2 * (2 , 1) 2 * 2 =  4
// ? 2 * (2 , 0) = 2 * 1 = 2 => returns 1 (base case)



