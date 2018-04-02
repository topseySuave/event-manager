export default class Helpers {
  equals(val1, val2) {
    return val1 === val2;
  }

  sanitizeString(str) {
    return str.toLowerCase().replace(/[\. ,:-]+/g, '-');
  }
}
