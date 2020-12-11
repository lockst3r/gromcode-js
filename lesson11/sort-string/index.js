/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input arr, boolean
// output string

const sortContacts = (arr, vector) => {
    if (Array.isArray(arr)) {
      return arr.sort((a, b) =>
        vector === false
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name)
      );
    }
    return null;
  }
