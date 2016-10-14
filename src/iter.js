'use strict'

let arr = [1,2,3]
for(let a of arr) {
  console.log(a); 
}

let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]: function() {
    let current = this.from;
    let last = this.to;
    return {
      next() {
        if (current <= last) {
          return {
            done: false,
            value: current++
          };
        } else {
          return {
            done: true,
            value: current
          };
        }
      }
    }
  }
}

for (let num of range) {
  console.log(num); 
}
