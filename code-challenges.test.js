// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

// describe('fibonacciSeq', () => {
//   it('takes in a number (greater than 2) and returns an array containing the Fibonacci sequence', () => {
// const fibonacciLength1 = 6
//     // Expected output: [1, 1, 2, 3, 5, 8]
// const fibonacciLength2 = 10
//     // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
//     expect(fibonacciSeq(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
//     expect(fibonacciSeq(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])

//   })
// })
// --- ReferenceError: fibonacciSeq is not defined ---

// b) Create the function that makes the test pass.
// Pseudo code:

// function fibonacciSeq(length) {
//   // fibonacci seq must be greater than 2, just based off its principal. so inform user that it will be invalid 
//   if (length <= 2) {
//     return ('Invalid input.')
//   }
//   // initial sequence greater than 2, which then calculates the next "fibonacci" number until it reaches the specified length
//   const sequence = [1, 1]
//   for (let i = 2; i < length; i++) {
//     // calculate the next number by adding the last two numbers in the sequence
//     const nextNumber = sequence[i - 1] + sequence[i - 2]
//     // add the last number to the new sequence
//     sequence.push(nextNumber)
//   }
//   return sequence
// }
// // console log each given sequence passed through the above function
// const one = [1]
// console.log(fibonacciSeq(one))
// // Output -> Invalid input.
// console.log(fibonacciSeq(fibonacciLength1))
// // Output -> [1, 1, 2, 3, 5, 8]
// console.log(fibonacciSeq(fibonacciLength2))
// // Output -> [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()

// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// describe('studyWeek', () => {
//   it('takes in an object and returns an array of the objects values sorted from least to greatest', () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
      const studyMinutesWeek2 = {
        sunday: 100,
        monday: 10,
        tuesday: 45,
        wednesday: 60,
        thursday: 20,
        friday: 15,
        saturday: 65
      }
//     expect(studyWeek(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
//     expect(studyWeek(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
//   })
// })
//--- ReferenceError: studyWeek is not defined---



// b) Create the function that makes the test pass.
// Pseudo code:

// the studyWeek function takes studyMinutes as a parameter and returns the sorted minutes
const studyWeek = (studyMinutes) => {
    // extract the values from the studyMinutes object using Object.values()
  const values = Object.values(studyMinutes) 
    // sort the extracted values in ascending order
    // .sort method is used to sort the extracted values in ascending order,
    // (a, b) => a - b ensures numerical sorting
  const sortedMinutes = values.sort((a, b) => a - b)
  // return the sorted study minutes array
  return sortedMinutes
  }
  // allows you to expose functions, objects, or primitives from one module to be used in other modules
module.exports = (studyWeek)

console.log(studyWeek(studyMinutesWeek1))
// Output => [15, 15, 20, 30, 30, 60, 90]
console.log(studyWeek(studyMinutesWeek2))
// Output -> [10, 15, 20, 45, 60, 65, 100]