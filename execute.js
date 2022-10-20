
// function count(arr, callback) {
//   let values = 0
//   arr.forEach((item) => {
//     callback(item) ? values++ : values + 0
//   })

//   return values
// }

// function count(arr, callback) {
//   let values = 0
//   arr.forEach((item) => {
//     callback(item) ? values++ : values + 0
//   })

//   return values
// }

// function count(arr, callback) {
//   let count = 0;
//   arr.forEach((e) => {
//     if (callback(e)) {
//       count += 1;
//     }
//   });
//   return count;
// }


// function uniq(arr) {
//   var unique = [];
//   arr.forEach(element => {
//     if (!unique.includes(element)) { //if the new array called unique doesn't include the element
//       unique.push(element);
//     }
//   });
//   return unique;
// }


// const people = [
//   {name: 'Amir'},
//   {name: 'Betty'},
// ];
// const names = [];
// people.forEach(person => {
//   names.push(person.name);
// });
// names;
// RESULT:
// ['Amir', 'Betty']
// //There's an easier way. With map, we don't need to create and modify a new array. Instead, we can build the new array directly.
// const people = [
//   {name: 'Amir'},
//   {name: 'Betty'},
// ];
// people.map(person => person.name);
// RESULT:
// ['Amir', 'Betty']

// function square(nums) {
//   nums.forEach(num => {
//       return num * num;
//   });
// }

//same as doing nums.map(num => num * num)


// function none(arr, callback) {
//   if (arr.some(callback => false)) {
//     return false;
//   }
// return true;
// }

// function none(arr, callback) {
//   if (arr.some((arrVal) => callback === arrVal)){
//     return false;
//   }
// return true;
// }

// function hasNull(arr) {
//   return arr.some(x => x === null);
// } 
// //is the same as
// function hasNull(arr) {
//   if (arr.some(x => x === null)) {
//      return true; 
//      } 
//   return false;
//      }

// const abc = ['a', 'b', 'c'];
// function sliceFromElement(array, element) {
//   const index = array.indexOf(element);
//   if (index === -1) {
//     return null;
//   } else {
//     return array.slice(index);
//   }
// }
// sliceFromElement(abc, 'd');
// is the same as:
// >
// const users = [
//   {name: 'Amir', admin: true},
//   {name: 'Betty', admin: false},
// ];
// users.filter(
//   user => user.admin
// ).map(
//   user => user.name
// );


//sum the squares of odds in an array
//x is odd if x% 2 ===1
//map calls function on each element on array - returns new array of values
//filter keeps element if true
//reduce reduces array of many numbers to a single number-sum
//reduce needs two arguments: 
//(function that adds new number to running sum, 
//0 which is initial value of sum)

//so first go through each element and filter out the odd numbers
//(if x% 2 ===1)

//then use map to square all the odd numbers in the array

//then use reduce to sum it

// function f(arr) {
//     let oddarr = arr.filter(x => x % 2 === 1); //filters out odd numbers
//     oddarr = oddarr.map(num => num * num); //squares each number
//     oddarr = oddarr.reduce((sum, current) => sum + current, 0);
//     //console.log(oddarr);
//     return oddarr;
// }

// //alternative way
// function f(arr) {
//     return arr.filter(x => x%2 ===1).map(x => x*x).reduce((acc, current) => {
//         return acc + current;
//     }, 0);
// }

//Use reduce to write a function that behaves like filter 
//-can do this with only one reduce and no other loops
//return acc inside your reduce callback
//pass an initial value of [] as reduce's second argument

// function filter(arr, callback) {
//     return arr.reduce(
//       (acc, current) => {
//         if(callback(current)){
//         return acc.concat(current)
//         }
//       return acc},
//    [])}

//sort
//[10, 200, 3].sort((a, b) => a - b);
// If a == b, then a - b == 0.
// If a > b, then a - b > 0.
// If a < b, then a - b < 0.

//Write a function that sorts words by length in ascending order
// function sortByLength(words) {
//     words.sort((a,b) => a.length - b.length);
//   }

// Write a rotate function that rotates an array. 
// The last element moves to the beginning of the array. 
// The function should modify the array itself.

// function rotate(arr) {
//     if (arr == []) {
//         return [];
//     }
//     else {
//         let firstelement = arr.pop();
//         arr.unshift(firstelement);
//         console.log(arr);
//         return arr;
//     }
//   }

//   // Author's answer:
// function rotate(arr) {
//     if (arr.length === 0) {
//         return arr;
//     } else {
//         arr.unshift(arr.pop());
//     }
//     }

// reduce, filter, and some other methods also skip empty slots. Try to avoid arrays with empty slots by:

// Always using fill after calling new Array(someSize).
// Not writing to indexes past the end of an array.

// Use findIndex to write the function find(arr, callback).
// It should return the first element where callback(element) is true. 
// If the element is not found, it should return undefined.

// function find(arr, callback) {
//     const index = 0;
//     return arr[index];
// }

// arr.forEach(element => {
    
// });
// if callback(element) //is true
// then return arr[index] = 1



>
[5, 6].findIndex(x => x === 6);
1

function find(arr, callback) {
    const index = 0;
    if callback {
        return arr[index];
    }
    
}


find([1, 2, 3], n => n === 1);