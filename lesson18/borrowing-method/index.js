/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
"use strict";


export const wallet = {
  transactions: [2, 8, 9, 25],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
}