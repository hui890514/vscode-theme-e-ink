/* ===== Comments ===== */
// This is a single-line comment
/* This is a multi-line comment */

/* ===== Variables & Constants ===== */
let variable: string = 'I am a variable'
const CONSTANT: number = 42
var oldVar: boolean = true

/* ===== Data Types ===== */
let number: number = 123
let float: number = 123.45
let boolean: boolean = false
let nullValue: null = null
let undefinedValue: undefined = undefined
let obj: { key: string } = { key: 'value' }
let array: number[] = [1, 2, 3]
let tuple: [string, number] = ['Hello', 123]
let anyVar: any = 'Can be anything'
let unknownVar: unknown
let neverFunction = (): never => {
  throw new Error('Never returns')
}

/* ===== Functions ===== */
function myFunction(param1: number, param2: number): number {
  return param1 + param2
}

const arrowFunction = (a: number, b: number): number => a * b

/* ===== Interfaces & Types ===== */
interface Person {
  name: string
  age: number
}

type Employee = Person & { role: string }

let user: Employee = { name: 'Alice', age: 30, role: 'Developer' }

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
  constructor(public name: string) {}
  greet(): string {
    return `Hello, ${this.name}!`
  }
}

const instance = new MyClass('Alice')
console.log(instance.greet())

/* ===== Generics ===== */
function identity<T>(arg: T): T {
  return arg
}
console.log(identity<number>(42))

/* ===== Enums ===== */
enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE'
}
let myColor: Color = Color.Green

/* ===== Promises & Async/Await ===== */
const myPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000)
})

async function asyncFunction(): Promise<void> {
  let result = await myPromise
  console.log(result)
}
asyncFunction()

/* ===== Try/Catch Error Handling ===== */
try {
  throw new Error('Something went wrong')
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message)
  }
} finally {
  console.log('Cleanup')
}

/* ===== Modules (ES6) ===== */
export function exportedFunction(): string {
  return 'I am exported'
}

import { exportedFunction } from './module'
console.log(exportedFunction())

/* ===== Regular Expressions ===== */
let regex: RegExp = /\d+/g
console.log('123abc'.match(regex))

/* ===== JSON Handling ===== */
let jsonString: string = '{"name": "John", "age": 30}'
let jsonObject: { name: string; age: number } = JSON.parse(jsonString)
console.log(jsonObject.name)
