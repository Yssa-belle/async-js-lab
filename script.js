// =======================================
// JavaScript Asynchronous Execution Lab
// =======================================


// =======================================
// Step 1: Understanding Synchronous Execution
// =======================================

console.log("===== Step 1: Synchronous Execution =====");

console.log("A");
console.log("B");
console.log("C");

/*
Expected Output:
A
B
C
*/


// =======================================
// Step 2: Introduction to setTimeout (Macrotask)
// =======================================

console.log("\n===== Step 2: setTimeout (Macrotask) =====");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

/*
Expected Output:
Start
End
Timeout
*/


// =======================================
// Step 3: Introduction to Promises (Microtask)
// =======================================

console.log("\n===== Step 3: Promise (Microtask) =====");

console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Expected Output:
Start
End
Promise
*/


// =======================================
// Step 4: Microtask vs Macrotask Comparison
// =======================================

console.log("\n===== Step 4: Microtask vs Macrotask =====");

console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");

/*
Expected Output:
Start
End
Promise
Timeout
*/


// =======================================
// Step 5: Async/Await Flow
// =======================================

console.log("\n===== Step 5: Async/Await =====");

async function test() {
  console.log("1");

  await Promise.resolve();

  console.log("2");
}

console.log("3");

test();

console.log("4");

/*
Expected Output:
3
1
4
2
*/


// =======================================
// Step 6: Advanced Flow Challenge
// =======================================

console.log("\n===== Step 6: Advanced Flow Challenge =====");

console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");

/*
Expected Output:
A
D
C
B
*/


// =======================================
// End of Lab
// =======================================

console.log("\n===== Lab Finished =====");