/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

let message = 'Just learn it';

export function sendMessage(name) {
    console.log(`${name}, ${message}! Your Gromcode`);
}

export function setMessage(text) {
    message = text
}