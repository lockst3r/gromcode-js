/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'


// input string number
// output string

const yyyy = 'jcrihvrivhrivr';
const ff = 4;


const splitText = (text, len) => {
  if ( typeof text !== 'string' ) {
      return null;
  }

const strArr = [];
let startPosition = 0;
// eslint-disable-next-line no-param-reassign
len = len || 10;

// eslint-disable-next-line no-constant-condition
while (true) {
  const chunk = text.substr(startPosition, len);
  if (chunk.length === 0) {
    break;
  }
  strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
  startPosition += len;
}

return strArr.join("\n");
};


console.log(splitText('feefef', ff));
