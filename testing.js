// function filter(arr, callback) {
//     let a = [];
//     let b = arr.filter(callback); // [2,3]
//     b.forEach(element => 
//         a.push(element)
//     );
//     console.log(a);
//     return a;
// }

// filter([1,2,3], num=> num >= 0);
// //IT WORKED!!
// //Author's answer:
// function filter(arr, callback) {
//     const result = [];
//     arr.forEach(e => {
//         if (callback(e)) {
//             result.push(e);
//         }
//     });
//     return result;
// }

// function evens(arr) {
//     const even = [];
//     arr.forEach(number => {
//         if (number % 2 === 0) {
//             even.push(number);
//         }
//     });
//     console.log(even);
//     return even;
//   }
function evens(arr) {
    const even = [];
    arr.filter(number => {
    if (number % 2 === 0) {
        even.push(number);
    }
  });
  return even;
}

evens([1,2,3,4]) 
//also the same as 
function evens(arr) {
    return arr.filter(x => x % 2 ===0);
}

console.log([1, null, 2, 3, null].filter(x => x !== null))

function f(arr) {
  return 0;
}
// x % 2 === 1
// filter, map, reduce


function compact(arr) {
    return arr.filter(x => x !== null);
  }


const cats = [
    {name: 'Ms. Fluff', vaccinated: true},
    {name: 'Keanu', vaccinated: false},
  ];
cats.filter(cat => cat.vaccinated);
cats.map(cat => cat.name);

//Using reduce, write a function that behaves like join. Joining [] should produce ''

function join(arr, separator) {
  if (arr.length == 0) {
    return arr.reduce((joined, current) => joined + separator + current, '');
  } else {
    return arr.reduce((joined, current) => joined + separator + current);
  }
}

//alternative way:
function join(arr, separator) {
  if (arr.length === 0) {
    return '';
  }
  return arr.reduce((arr, current) => {
    return acc + separator + current;
  });
}

function allTrue(values) {
  if (values.length === 0) {
    return true;
  }
  return values.reduce((acc, current) => {
    return acc  && current;
});
}

//alternative way:
function allTrue(values) {
  return values.reduce((acc, x) => acc && x, true);
}
