// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------


const repeat = (str, int) => {
    let arr = [];
    for (let i = 0; i < int; i++) { //iterates through array int times and pushes string into arr
         arr.push(str);
    }
    console.log(arr);
}







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------



const reverse = a => a.map(a.pop, [...a]);  //iterates through array removing & returning last element and then putting into new array, thus reversing it






// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------




const rmFalsy = a => {
   return a.filter(Boolean);    // filters out falsies
}





// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------



const makeObject = arr => {
    return Object.fromEntries(arr.map(
        ([key, val]) => Array.isArray(val) ? [key, makeObject(val)] : [key, val]    // creates new object from the array values and checks if an array is nested to dive deeper into said array
    ));
}






// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------



const rmDoubles = arr => {
    let newArr = [...new Set(arr)]; //creates a set out of array and converts back into array
    return newArr;
}






// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------



const arrEquals = (a, b) => {
    if (a === b) return true;                   //checks if directly equal
    if (a.length !== b.length) return false;    //checks if length is equal
    a.sort();                                   // sorts arrays
    b.sort();
    for (let i=0; i<a.length; i++) {            // checks for equal elements
        if (a[i] !== b[i]) return false;
    }
    return true;
}






// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------



const flatten = arr => {
       const stack = [...arr];
       const newArr = [];
       while (stack.length) {
           const next = stack.pop();    //removes last item from array and shortens array
           if (Array.isArray(next)) {   //checks if value is array
               stack.push(...next);     // pushes spread value (if array) into new array
           } else {
               newArr.push(next);       // if not array, just pushes value
           }
       }
       return newArr.reverse();         //reverses and returns array
}




// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------


const parts = (arr, indx) => {
    let newArr = [arr.splice(0, indx)];     // separates first section into array until iterator
    newArr.push(arr);                       // adds rest of array at end of new one
    return [newArr];
}







// -----------------------------------------------
