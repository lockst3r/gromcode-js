/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

"use strict";

// input object
// output string

export const callbackPrompt = {
  message: "Tell me your number",
  showPrompt() {
    const getNumber = prompt(this.message);
    console.log(getNumber);
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(callbackPrompt), ms);
  },
};

callbackPrompt.showDeferredPrompt();
