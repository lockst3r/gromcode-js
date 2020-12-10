/* eslint-disable no-restricted-syntax */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input obj
// output arr

const concatProps = (obj) => {

  const arr = [];
  
  if(obj.length === 0){
    return arr;
    }
      // eslint-disable-next-line guard-for-in
      // eslint-disable-next-line no-restricted-syntax
      // eslint-disable-next-line guard-for-in
      for(const key in obj){
        arr.push(obj[key]);
        }
        return arr;
    
  
  }