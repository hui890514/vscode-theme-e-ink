/* ===== Comments ===== */
// This is a single-line comment
/* This is a multi-line comment */

/* ===== Variables & Constants ===== */
let variable = 'I am a variable'
const CONSTANT = 42
var oldVar = true

/* ===== Data Types ===== */
let number = 123
let float = 123.45
let string = 'Hello, World!'
let boolean = false
let nullValue = null
let undefinedValue
let obj = { key: 'value' }
let array = [1, 2, 3]

/* ===== Functions ===== */
function myFunction(param1, param2) {
  return param1 + param2
}

const arrowFunction = (a, b) => a * b

/* ===== Control Structures ===== */
if (boolean) {
  console.log("It's true")
} else {
  console.log("It's false")
}

for (let i = 0; i < 5; i++) {
  console.log(`Iteration: ${i}`)
}

while (number > 0) {
  number--
}

switch (variable) {
  case 'I am a variable':
    console.log('Matched')
    break
  default:
    console.log('No match')
}

/* ===== Classes & Objects ===== */
class MyClass {
  constructor(name) {
    this.name = name
  }
  greet() {
    return `Hello, ${this.name}!`
  }
}

const instance = new MyClass('Alice')
console.log(instance.greet())

/* ===== Promises & Async/Await ===== */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000)
})

async function asyncFunction() {
  let result = await myPromise
  console.log(result)
}
asyncFunction()

/* ===== Try/Catch Error Handling ===== */
try {
  throw new Error('Something went wrong')
} catch (error) {
  console.error(error.message)
} finally {
  console.log('Cleanup')
}

/* ===== Modules (ES6) ===== */
export function exportedFunction() {
  return 'I am exported'
}

import { exportedFunction } from './module.js'
console.log(exportedFunction())

/* ===== Regular Expressions ===== */
let regex = /\d+/g
console.log('123abc'.match(regex))

/* ===== JSON Handling ===== */
let jsonString = '{"name": "John", "age": 30}'
let jsonObject = JSON.parse(jsonString)
console.log(jsonObject.name)
