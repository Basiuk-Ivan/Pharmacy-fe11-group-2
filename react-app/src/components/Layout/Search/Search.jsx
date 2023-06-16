import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

import { Search, SearchIconWrapper, StyledInputBase, searchIconStyle, inputStyles } from './style';
import { fetchProductsData } from '../../../redux/slice/productsSlice';

const SearchActions = () => {
  const dispatch = useDispatch();
  let inputValue = '';
  let timer = null;

  function clearSearch(event) {
    event.target.value = '';
  }

  function handleChange(event) {
    const newValue = event.target.value;

    if (inputValue !== newValue) {
      inputValue = newValue;

      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        const requestString = `limit=4&search=${inputValue}`;
        dispatch(fetchProductsData(requestString));
      }, 300);
    }
  }

  return (
    <Search onChange={event => handleChange(event)} onBlur={event => clearSearch(event)}>
      <SearchIconWrapper>
        <SearchIcon sx={searchIconStyle} />
      </SearchIconWrapper>
      <StyledInputBase sx={inputStyles} placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
};

export default SearchActions;
