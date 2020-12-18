/* eslint-disable prefer-const */
/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

let a = 17;

if (a) {
  // eslint-disable-next-line prefer-const
  // eslint-disable-next-line no-shadow
  let a = 1;

  console.log(a);
}

console.log(a);


