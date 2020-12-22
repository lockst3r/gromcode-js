/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable strict */
/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line lines-around-directive

function User(name, age) {
  this.name = name;
  this.age = age;

  User.prototype.sayHi = function () {
    console.log(`Hi, I am ${this.name}`);
  };
  User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
  };
  User.prototype.setAge = function (newAge) {
    if (newAge < 0) {
      return false;
    }
    this.age = newAge;
    if (this.age >= 25) {
      this.requestNewPhoto();
    }
    return this.age;
  };
}
