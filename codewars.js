// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    if (array === []) {
     return [];
   } else {
      return array.map((e, i) => {
        return e = `${i + 1}: ${e}`;
      })
    }
   };

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

const arr = N => (N) ? [...Array(N).keys()] : [];


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    let l = lamps.split('');
    let d = drone.split('');
    d = d.length;
      if (d > l.length) {
       l.fill('o', 0, l.length); 
      } else {
    l.splice(0, d);
    for (let i = 0; i < d; i++) {  
        
      l.unshift('o');
    }
      }
      return l.join('');
  }


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
    let total = 0;
    for (let i=0; i<marks.length; i++) {
      total += marks[i];
    }
    let average = total / marks.length;
    return Math.floor(average);
  }


// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

const reverse = a => a.map(a.pop, [...a]);
