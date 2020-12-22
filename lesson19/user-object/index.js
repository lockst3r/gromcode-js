/* eslint-disable no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-rest-params */
/* eslint-disable lines-around-directive */
// eslint-disable-next-line strict
"use strict";

// input obj
// output arr

const user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(str) {
    // eslint-disable-next-line prefer-const
    let [firstName, lastName] = str.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};

export default user;
