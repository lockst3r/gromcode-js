/* eslint-disable strict */
/* eslint-disable no-unused-vars */

'use strict'

// input arr
// output arr

// eslint-disable-next-line consistent-return
export const withdraw = (clients, balances, client, amount) => {
  const ind = clients.indexOf(client);
  if (amount > balances[ind]) {
    return -1;
  }if (amount <= balances[ind]) {
    const result = [];

    balances.forEach((num) => {
      if (num === balances[ind]) {
        result.push(num - amount);
      } else {
        result.push(num);
      }
    });

    return result[ind];
}
}

