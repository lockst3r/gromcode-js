/* eslint-disable eqeqeq */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */

export default function createMessenger(){
  let message = 'Just learn it';
  let sender = 'Gromcode';

  const sendMessage = (name) => {

  console.log(`${name}, ${message}! Your ${sender}`);
}

  function setMessage(text) {
  message = text;
}
  function setSender(newSender) {
  sender = newSender;
}
  return {
      sendMessage,
      setMessage,
      setSender,
  }
}