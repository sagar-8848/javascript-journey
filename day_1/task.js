// * Create a student prfile using variables

// * task 1
const student_name = "Ram Maharjan";
let age = 20;
let GPA = 3.8;
let isEnrolled = true;
let favSub = ["Math", "Science", "Nepali"];
let address = {
  country: "Nepal",
  city: "Kathmandu",
  post_code: 44600,
};

// * task 2

console.log(`Student Name: ${student_name}`);
console.log(`Age: ${age}`);
console.log(`GPA : ${GPA}`);
console.log(`isEnrolled : ${isEnrolled}`);
console.log(`Favourite Sub : ${favSub}`);
console.log(
  `Country : ${address.country}, City: ${address.city}, PostalCode: ${address.post_code}`,
);

// * task 3
console.log(typeof student_name);
console.log(typeof age);
console.log(typeof GPA);
console.log(typeof isEnrolled);
console.log(typeof favSub);
console.log(typeof address);

// * task 4

GPA = GPA + 0.5;
console.log(GPA);

console.log(age > 18 && student_name === "Sagar Suwal");

// * type coercion

// ? it's about the array mate, the array is being showed as object and when we try to add the 0.5 in gpa, is not chaning mate
