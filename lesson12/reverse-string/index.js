/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input string
// output string

const reverseString = (string) => {
if(typeof string !== "string"){
return null;
// eslint-disable-next-line no-else-return
}else{
return string.split("").reverse("").join('');
}
}


console.log(reverseString("dog"));