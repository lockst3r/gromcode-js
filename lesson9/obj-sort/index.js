/* eslint-disable no-unused-vars */
/* eslint-disable spaced-comment */


//input obj
//output arr

const customers = {
  'customer-id-1': {
      name: 'William',
      age: 54
  },
  'customer-id-2': {
      name: 'Tom',
      age: 17
  },

};

const gg = Object.entries(customers);
const fff = gg.map(el=> el[1]);
const yyy = Object.values(fff);
const hhh = yyy.map(el=>Object.entries(el));

console.log(hhh);


const getCustomersList = (obj) => {

}

