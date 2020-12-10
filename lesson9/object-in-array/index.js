/* eslint-disable guard-for-in */
/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'



// input object
// output arr

function getPeople(obj) {
  const arrProperties = [];
  if ( Object.keys(obj).length === 0 ) {
  return arrProperties
  }
  const objProperties = Object.entries(obj)
  .map(name => name[1])
  .reduce((acc, elem) => acc.concat(elem));
    
  // eslint-disable-next-line no-restricted-syntax
  for ( const key in objProperties ) {
  arrProperties.push(objProperties[key].name);
  }
  
  return arrProperties;
  }