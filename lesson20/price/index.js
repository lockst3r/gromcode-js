/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

// input obj
// output arr

export class Order {

  constructor (price, city, type) {
    this.id = Math.random().toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = '';
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    const orderAmount = 1000;
    // eslint-disable-next-line no-unneeded-ternary
    return this.price > orderAmount ? true : false;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    const fieldValidationType = this.type === 'Buy' || this.type === "Sell";
    // eslint-disable-next-line no-unneeded-ternary
    return fieldValidationType ? true : false;
  }
}