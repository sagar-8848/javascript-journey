// ? day 9 part 2

// ! Iterators and Generators

// for (let x of [1,2,3,4]){
//   console.log(x)
// }

// ? in this code, we think it's a loop but it's internally, js is doing, give me the next value, ok next.., ok next..

// ? this is the interation protocol

// ? Iterator  = Object with .next();

// * let's build our own iterator

// function createCounter(start, end) {
//   let current = start;
//   return {
//     next() {
//       if (current <= end) {
//         return { value: current++, done: false };
//       } else {
//         return { value: undefined, done: true };
//       }
//     },
//   };
// }

// const counter = createCounter(1,3);
// console.log(counter.next())
// console.log(counter.next())
// console.log(counter.next())
// console.log(counter.next())
// console.log(counter.next())

// ? generator functions

// ? a generator function is a function that can pause mid execution and resume it later. It automatically implements the iterator protocol for us.

// function* simpleGen() {
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4;
// }

// const gen = simpleGen();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// ? each yield is a pause point. The function literally stops exuction there hands the value back. when you call .next() again, it resumes from exactly where it left off local variables and all.

// ? concept 3 (Generators are Iterables use in for ... of)

// function* range(start, end) {
//   for (let i = start; i <= end; i++) {
//     yield i;
//   }
// }

// for (const num of range(1, 5)) {
//   console.log(num);
// }

// console.log([...range(1,5)])

// ? let's do some task

// ? mental model -> A function that can pause and continue later is called a Generator.

// * normal function

// function test(){
//   console.log(1);
//   console.log(2)
// }

// test()

// * generator

// function* gen(){
//   yield 1;
//   yield 2;
// }

// let callGen = gen();
// console.log(callGen.next())
// console.log(callGen.next())
// console.log(callGen.next())

// ? step 1 - ID Generator

// function* idGen(){
//   let i = 1;
//   while(true){
//     yield i++;
//   }
// }

// const generate = idGen();
// console.log(generate.next())
// console.log(generate.next())
// console.log(generate.next())

// const arr = [1, 2, 3];

// arr.forEach(curItem => console.log(curItem))

// it's an iterator (an object with a method) -> that returns {value: something, boolean: true or false}

// ? it' an manual way
// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

// ? generator ( makes iterator easy )

// function* gen() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const callGen = gen();
// console.log(callGen.next());
// console.log(callGen.next());
// console.log(callGen.next());
// console.log(callGen.next());

// // .next() it resumes where it was stopped

// function* batchGenerator(data, batchSize) {
//   let i = 0;
//   while (i < data.length) {
//     yield data.slice(i, i + batchSize);
//     i += batchSize;
//   }
// }

// const users = ["U1", "U2", "U3", "U4", "U5"];

// const gen = batchGenerator(users, 2);

// ? i = 0 ; data = 4; batchSize = 2

// ``` first iteration
// while(0 < 5) true
// 0, 2+0 = 2 => 0,2  [u1, u2]
// i = 0 + 2 = 2

// second iteration 

//  while( 2 < 5) true
//  2, 2+2 = 4,  2, 4 -> u3, u4
//   i = 2 + 2 = 4;

// third iteration

// while(4 < 5) true
// 4 , 4 + 2 = 6 ( 4, 6) => u5
// 6

// foruth iteration

// while(6 < 5) false => while loop chai sakinxa hai 

// ```


function* genid(){
  let id = 1;
 while(true){
  yield id;
  id++
 }
}

const generateId = genid();
console.log(generateId.next())
console.log(generateId.next())
console.log(generateId.next())