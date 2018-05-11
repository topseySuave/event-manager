'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generate Pagination data
 * **/
var generatePaginationMeta = exports.generatePaginationMeta = function generatePaginationMeta(dbResult, limitValue, pageValue) {
  return {
    page: pageValue ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
    totalCount: dbResult.count,
    pageCount: Math.ceil(dbResult.count / limitValue),
    pageSize: Math.ceil(dbResult.rows.length)
  };
};

/**
 * Validate numbers
 * **/
var isNaNValidator = exports.isNaNValidator = function isNaNValidator(res, value) {
  return res.status(400).send({
    message: 'the id specified is not a number',
    statusCode: 400
  });
};
//# sourceMappingURL=util.js.map