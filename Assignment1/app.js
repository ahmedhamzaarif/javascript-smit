// Point #1
// let num1 = prompt("Enter First Number")
// let num2 = prompt("Enter Second Number")

// if (num1 > num2){
//     console.log(num1)
// } else {
//     console.log(num2)
// }

// Point #2
// let num = prompt("Enter Number")
// if (num > 0){
//     alert("The sign is +")
// } else {
//     alert("The sign is -")
// }

// Point #3
// let num1 = parseInt( prompt("Enter First Number") )
// let num2 = parseInt( prompt("Enter Second Number") )
// let num3 = parseInt( prompt("Enter Third Number") )
// let num4 = parseInt( prompt("Enter Fourth Number") )
// let num5 = parseInt( prompt("Enter Fifth Number") )

// if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5) {
//     console.log("Largest Number is " + num1)
// } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5) {
//     console.log("Largest Number is " + num2)
// } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5) {
//     console.log("Largest Number is " + num3)
// } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5) {
//     console.log("Largest Number is " + num4)
// } else {
//     console.log("Largest Number is " + num5)
// }

// Point #4
// for (let i = 0; i <= 15; i++){
//     if (i === 0){
//         console.log(i + " is even")
//     } else if (i % 2 === 0){
//         console.log(i + " is even")
//     } else{
//         console.log(i + " is odd")
//     }
// }

// Point #5
// let marks = parseInt( prompt('Enter your marks') )
// if (marks >= 90 ){
//     console.log("Grade: A")
// } else if (marks >= 80) {
//     console.log("Grade: B")
// } else if (marks >= 70) {
//     console.log("Grade C")
// } else if (marks >= 60) {
//     console.log("Grade: D")
// } else {
//     console.log("Grade: F")
// }

// Point #6
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz")
//     } else if (i % 5 === 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// Point #7
let a,b,c
for(a = 0; a <= 5; a++){
    for(b = 0; b < a; b++){
        c += "*"
    }
    console.log(c)
    c = ""
}