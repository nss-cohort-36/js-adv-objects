// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const bill = {
  officeName: "Advanced Foot and Ankle Care",
  streetAddress: "Wallace Street",
  doctorName: "Dr. Mitchell",
  patientName: "Jisie David",
  visitDate: "10/01/2019",
  amountBilled: 60.34,
  dueDate: "11/01/2019"
}

// Lightning Exercise 2: Copy the code below and paste it above your object.

// Use square bracket notation to output the value of those three properties to the console in Chrome.
console.log("Date Visited", bill[dateVisited])
console.log("Money owed", bill[owed])
console.log("Patient", bill[patient])

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.

console.log(Object.values(bill))


// ------------------------------------------------------------------------------------

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
const arrayOfKeys = Object.keys(bill)
console.log(arrayOfKeys)

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

let domOutput = ""

for (const keyName of arrayOfKeys) {
  // console.log(keyName)
  domOutput += `<span>${keyName}</span>`
}

// console.log(domOutput)

const containerRef = document.getElementById("container")
containerRef.innerHTML = `<section>${domOutput}</section>`

// ------------------------------------------------------------------------------------

// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

const dinner = {
  name: "Pizza",
  size: "Large",
  weight: "75 lbs",
  ethnicity: "Chicago",
  vegetarian: false
}

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

let dinnerDomOutput = ""

for (const keyValueArray of Object.entries(dinner)) {
  // console.log(keyValueArray)
  dinnerDomOutput += `<p>Key: ${keyValueArray[0]} Value: ${keyValueArray[1]}</p>`
}

containerRef.innerHTML += `<article>${dinnerDomOutput}</article>`
