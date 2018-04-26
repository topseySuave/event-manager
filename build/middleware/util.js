"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var generatePaginationMeta = exports.generatePaginationMeta = function generatePaginationMeta(dbResult, limitValue, pageValue) {
  return {
    page: pageValue ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
    totalCount: dbResult.count,
    pageCount: Math.ceil(dbResult.count / limitValue),
    pageSize: Math.ceil(dbResult.rows.length)
  };
};
//# sourceMappingURL=util.js.map