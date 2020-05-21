// Variable Type 
/*
    - String 
    - Number
    - Boolean
    - Array

    - Any
    - Void
    - Null
    - Tuple
    - Enum
    - Generic
*/

let myString: string
let valueA: Number
const PI_CONSTANT: Number = 3.14
let isTrue:Boolean
    isTrue = false
    myString = 'Donnukrit'
    valueA = 50

// String Array
let myStringArr: string[]
    myStringArr = ["Apples","Mangoes","Peaches","Plums"]
// Number Array
let numArr  = [2,4,8,16,32,64,128,256,512,1024]

// Value Print
console.log('Print myString : ',myString)
console.log('Print valueA : ',valueA)
console.log('PI Value is ',PI_CONSTANT)
console.log('Print bool : ',isTrue)

// Array Print
console.log('Show All myStringArr : ',myStringArr)
console.log('Show All Number Array : ',numArr)

// Array Methods 
myStringArr.push("Banana") // Append new elem to array
console.log('After Push : ',myStringArr) //
console.log('Lenght : ',myStringArr.length)

var root = numArr.map(Math.sqrt)
console.log('Sqrt Map : ',root)