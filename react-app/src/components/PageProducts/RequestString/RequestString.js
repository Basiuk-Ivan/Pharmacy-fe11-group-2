function RequestString(filterBase, numPage) {
  let requestString = `page=${numPage}`;
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const key in filterBase) {
    if (Array.isArray(filterBase[key]) && filterBase[key].length > 0) {
      requestString += `&${key}=${filterBase[key]}`;
    }
    if (!Array.isArray(filterBase[key]) && filterBase[key]) {
      requestString += `&${key}=${filterBase[key]}`;
    }
  }
  return requestString;
}

export default RequestString;
