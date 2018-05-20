/* *
 * Generate Pagination data
 * * */
export const generatePaginationMeta = (dbResult, limitValue, pageValue) => ({
  page: (pageValue) ? parseInt(pageValue, 10) : parseInt(pageValue + 1, 10),
  totalCount: dbResult.count,
  pageCount: Math.ceil(dbResult.count / limitValue),
  pageSize: Math.ceil(dbResult.rows.length)
});

/* *
 * Validate numbers
 * * */
export const isNaNValidator = (res, value) => res.status(400).send({
  message: 'the id specified is not a number',
  statusCode: 400
});
