// Point #1
// function addFunc(){
//     let num = 5
//     function checkNumber(x){
//         return num + x
//     }
//     return checkNumber
// }

// let number = addFunc()
// console.log( number(6) )

// Point #2
// function recFunc(arr, value) {
//     if (arr.length === 0) {
//         return false;
//     } else if (arr[0] === value) {
//         return true;
//     } else {
//         return recFunc(arr.slice(1), value);
//     }
// }

// const arr = [1, 2, 3, 4, 5];
// console.log(recFunc(arr, 3));
// console.log(recFunc(arr, 6));

// Point #3
// function addPara(text){
//     const newPara = document.createElement("p")
//     const bodyEl = document.querySelector("body")

//     newPara.textContent = text
//     bodyEl.append(newPara)
// }

// addPara("This is a new Paragraph")

// Point #4
// const bodyEl = document.querySelector("body")
// const newList = document.createElement("ul")
// bodyEl.append(newList)

// function myList(item){
//     const newItem = document.createElement("li")

//     newList.append(newItem)
//     newItem.textContent = item
// }
// myList("Fruit")
// myList("Fruit")

// Point #5
// function changeBg(element, color){
//     const el = document.querySelector(element)
//     el.style.backgroundColor = color
// }
// changeBg("h1", "red")

// Point #6
// function lsFunc(key, object){
//     let objString = JSON.stringify(object)
//     localStorage.setItem(key, objString)
// }

// let student = {
//     name : "Ahmed",
//     class: "2101a"
// }

// lsFunc("Student Data", student)

// Point #7
// function rlFunc(key){
//     const objString = localStorage.getItem(key)
//     const object = JSON.parse(objString)
//     return object
// }

// console.log( rlFunc("Student Data") )

// Point #8
function objFunc(object) {
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        localStorage.setItem(key, JSON.stringify(object[key]));
      }
    }
    const retrievedObject = {};
    for (const key in object) {
      if (object.hasOwnProperty(key)) {
        retrievedObject[key] = JSON.parse(localStorage.getItem(key));
      }
    }
    return retrievedObject;
}
  
const myObject = {
name: "Ahmed Hamza",
age: 21,
email: "ahmed.hamza@gmail.com"
};
const retrievedObject = objFunc(myObject);

console.log(retrievedObject);