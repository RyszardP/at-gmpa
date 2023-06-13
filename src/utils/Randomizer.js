import Fakerator from 'fakerator';

const fakerator = Fakerator();

class Randomizer {
  static randomValueFromObject(obj) {
    return Object.values(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
  }

  static randomKeyFromObject(obj) {
    return Object.keys(obj)[Math.floor(Math.random() * Object.keys(obj).length)];
  }

  static randomKeyAndValueFromObject(obj) {
    const randomNumber = Math.floor(Math.random() * Object.keys(obj).length);
    return {
      objKey: Object.keys(obj)[randomNumber],
      objValue: Object.values(obj)[randomNumber],
    };
  }

  static getRandomString(length) {
    return fakerator.random.string(length);
  }

  static getRandomNumber(minNumber, maxNumber) {
    return fakerator.random.number(minNumber, maxNumber);
  }

  static getRandomBoolean() {
    return Math.random() < 0.5;
  }
}

export default Randomizer;
