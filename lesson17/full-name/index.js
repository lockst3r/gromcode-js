/* eslint-disable prefer-destructuring */
/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";


const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
      return (`${this.firstName} ${this.lastName}`);
  },
  setFullName(getFullName) {
      // eslint-disable-next-line prefer-const
      let arr = getFullName.split(' ');
      this.firstName = arr[0];
      this.lastName = arr[1];
  }
}
export { user };