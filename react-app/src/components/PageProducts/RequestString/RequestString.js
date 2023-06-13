import { useSelector } from 'react-redux';

function RequestString() {
  const filterBase = useSelector(state => state.filterBase);
  const { numPage } = useSelector(state => state.numPage);

  const requestString = `categories=${filterBase.filterMainCategory}&page=${numPage}&limit=2`;

  return requestString;
}

export default RequestString;
