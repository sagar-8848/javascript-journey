// * [PART 1 - ] syncronous js vs async js

// ? js does one thing at a time.

// ? this is normal js meaning it is synchornous js

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

// ? Async js

// console.log("1");

// setTimeout(() => {
//   console.log(2);
// }, 2000);

// console.log(3);

// !  thing to remember : 👉 JavaScript is single-threaded BUT it behaves like async using browser help

// * PART-2 ---> Call Stack and Event Loop

// 🧠 Mental Model:

// Call Stack     → where JS runs code (one at a time!)
// Web APIs       → browser handles async tasks (setTimeout, fetch)
// Callback Queue → finished async tasks wait here
// Event Loop     → moves tasks from queue to stack when stack is empty!

// FLOW:
// 1. JS runs code → goes on Call Stack
// 2. setTimeout found → handed to Web APIs
// 3. Call Stack continues (doesn't wait!)
// 4. setTimeout finishes → callback goes to Queue
// 5. Call Stack empty → Event Loop moves callback to Stack
// 6. Callback runs!

// console.log("Start"); // 1st

// setTimeout(() => console.log("Timeout!"), 0); // 3rd (even with 0ms!)

// Promise.resolve().then(() => console.log("Promise!")); // 2nd

// console.log("End"); // still 2nd

// ? 🔥 Now execution order:

// 👉 JS finishes all sync first
// 👉 Then processes:

// Microtasks (Promises)
// Macrotasks (setTimeout)

// * Part 3 - call back hell

// getUser(1, (user) => {
//   getPosts(user.id, (posts) => {
//     getComments(posts[0].id, (comments) => {
//       getLikes(comments[0].id, (likes) => {
//         console.log(likes);
//       });
//     });
//   });
// });

// ? this is call back hell : the messy code

// ? changing the same code in promises

// getUser(1)
//   .then(user => getPosts(user.id))
//   .then(posts => getComments(posts[0].id))
//   .then(comments => getLikes(comments[0].id))
//   .then(likes => console.log(likes))
//   .catch(err => console.log(err));

// ! simple idea

// .then() = next step
// .catch() = error handling

// ? best way to use async/await

// async function getData(){
//   try{
//     const user = await getUser(1);
//     const posts = await getPosts(user.id)
//     const commments = await getComments(posts[0].id)
//     const likes = await getLikes(commments.getLikes[0].id)
//     console.log(likes);
//   }
//   catch(error){
//     console.log(error);
//   }
// }

// getData()

// * PART 4 - PROMISES

// ? promise -> i will give you a result later (success or failure)

// ? It works in 3 steps: pending, resolved and rejected

// 👉 resolve(value) = send data
// 👉 .then((variable)) = receive data

// const myProm = new Promise((resolve, reject) => {
//   const success = true;
//   if (success) {
//     resolve("data fetch successful!");
//   } else {
//     reject("something went wrong while fetching data!");
//   }
// });

// myProm
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("done"));

// ? real world simulation

// function fetchUser(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id > 0) {
//         resolve({ id, name: "sagar", country: "Nepal" });
//       } else {
//         reject("Invalid user ID!");
//       }
//     }, 1500);
//   });
// }

// fetchUser(-1)
// .then((userDet)=> console.log(userDet.name))
// .catch((error)=> console.log(error))
// .finally(()=> console.log("code run success, finally ran"))

// ? Promise.all(), Promise.allSettled(), Promise.race()

// const prom1 = Promise.resolve("A");
// const prom2 = Promise.resolve("B");
// const prom3 = Promise.reject("C");

// * Promise.all() -> if one fails, then throws an error

// Promise.all([prom1, prom2, prom3])
// .then((result)=> console.log(result))
// .catch((result)=> console.log(result))

// ? it will print C because 👉 JavaScript does NOT automatically create error messages 👉 It just passes whatever you give to reject()

// * Promise.allSettled()  => gives both error and success

// Promise.allSettled([prom1, prom2, prom3])
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// * Promise.race() => who ever fisrt runs, wins
// const p1 = new Promise(res => setTimeout(() => res("Slow"), 2000));
// const p2 = new Promise(res => setTimeout(() => res("Fast"), 1000));

// Promise.race([p1, p2])
//   .then(result => console.log(result));

// ? practise section

// function task1(){
//   return new Promise((resolve)=> {
//     setTimeout(()=> resolve("Task 1 Done!"), 1000)
//   })
// }

// function task2(){
//   return new Promise((resolve)=> {
//     setTimeout(()=> resolve("Task 2 Done!"), 2000)
//   })
// }

// function task3(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(()=> reject("task 3 failed, try again later!"), 1500)
//   })
// }

// Promise.all([task1(), task2(), task3()])
// .then((res)=> console.log(res))
// .catch((err)=> console.log(err))

// Promise.allSettled([task1(), task2(), task3()])
// .then((res)=> console.log("allSettled",res))
// .catch((err)=> console.log("allSettled", err))

// Promise.race([task1(), task2(), task3()])
// .then((res)=> console.log("race", res))

// const p1 = new Promise(resolve => setTimeout(() => resolve("User data"), 1000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("Posts data"), 2000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("Comments data"), 500));

// Promise.all - waits for ALL to resolve (fails if ANY rejects!)
// Promise.all([p1, p2, p3]).then(results => {
//   console.log(results); // ["User data", "Posts data", "Comments data"]
// });

// Promise.race - returns FIRST one to finish!
// Promise.race([p1, p2, p3]).then(result => {
//   console.log(result); // "Comments data" (500ms fastest!)
// });

// Promise.allSettled - waits for ALL, doesn't fail on reject!
// const p4 = new Promise((_, reject) => setTimeout(() => reject("Failed!"), 800));

// Promise.allSettled([p1, p2, p4]).then(results => {
//   results.forEach(result => {
//     if(result.status === "fulfilled") {
//       console.log(`Success: ${result.value}`);
//     } else {
//       console.log(`Failed: ${result.reason}`);
//     }
//   });
// });

// * PART -5 [aync and await ]

// ? await -> wait for the Promise to finish
// ? async -> allows you to use await inside a function

// ? this is the normal prmoise
// fetchUser(1)
//   .then(user => console.log(user.name))
//   .catch(err => console.log(err))
//   .finally(() => console.log("done"));

// ? changing the older promise to async and await

// async function fetchUser(){
//   try{
//     const user = await fetchUser(1); // waits here
//     console.log(user);
//   }
//   catch(err){
//     console.log(err)
//   }
//   finally{
//     console.log('code run success!')
//   }
// }

// fetchUser()

// ? task  (add try catch here)

// async function test() {
//   const user = await fetchUser(1);
//   console.log(user);
// }

// test();

// async function test() {
//   try {
//     const user = await fetchUser(1);
//     console.log(user);
//   } catch (err) {
//     console.log(err);
//   } finally {
//     console.log("code run successful");
//   }
// }

// ? Now the Powerful trick (Async + Promise.all)

// ? Normal

// const user = await getUser()
// const posts = await getPosts(user.id)

// ? Fast + Pro

// const [user, post] = Promise.all([
//   getUser(),
//   getPosts(1)
// ])

// ? Task

// function task1() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Task 1 Done!"), 1000);
//   });
// }

// function task2() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Task 2 Done!"), 2000);
//   });
// }

// async function getTasks(){
//   try{
//     const res = await Promise.all([task1(), task2()])
//     console.log(res)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// getTasks()

// async function proTrick(){
//   try{
//    const [res1, res2] = await Promise.all([task1(), task2()])
//    console.log(`res1 : ${res1}`)
//    console.log(`res2 : ${res2}`)
//   }
//   catch(err){
//     console.log(err)
//   }
// }

// proTrick()

// * Part 6 [fetching real apis from internet]

// ? by using .then()

// function fetchRealApi(id){
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//   .then(res=> res.json())
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
// }

// fetchRealApi(5)

// ? by using async await

async function fetchData(){
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
    const data = await res.json()
    console.log(data)
  }
  catch(err){
    console.log(`Err: ${err}`)
  }
}

fetchData()


// ? using the powerful trick to fetch multiple apis

async function fetchMuliple(u, p){
  try{
    const [userData, postData] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${u}`),
      fetch(`https://jsonplaceholder.typicode.com/posts/${p}`)
    ])
    const userD = await userData.json();
    const postD = await postData.json();

    console.log(userD);
    console.log(postD)
  }catch(err){
    console.log(`Err: ${err}`)
  }
}

fetchMuliple(1, 2)