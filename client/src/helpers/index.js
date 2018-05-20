/**
 * Helpers Class
 * */
export default class Helpers {
  /**
   * equals Method
   * @param { string } val1
   * @param { string } val2
   * @returns { boolean }
   * */
  equals(val1, val2) {
    return val1 === val2;
  }

  /**
   * sanitizeString Method
   * To replace spaces with "-" to enable URL friendly string
   * @param { string } str
   * @returns { string }
   * */
  sanitizeString(str) {
    return str.toLowerCase().replace(/[\. ,:-]+/g, '-');
  }

  /**
   * countDayDifference method
   * To count days from start Date and end Date
   * @param { string } startDate
   * @param { string } endDate
   * @return { string }
   * */
  countDayDifference(startDate, endDate) {
    let oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    let firstDate = new Date(startDate);
    let secondDate = new Date(endDate);

    let diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay));
    return diffDays;
  }
}
