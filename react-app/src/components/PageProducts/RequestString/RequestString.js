function RequestString(filterBase, numPage) {
  let requestString = `page=${numPage}`;

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
