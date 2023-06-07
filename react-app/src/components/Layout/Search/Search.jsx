import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase, searchIconStyle, inputStyles } from './style';

const SearchActions = () => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon sx={searchIconStyle} />
    </SearchIconWrapper>
    <StyledInputBase sx={inputStyles} placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
  </Search>
);

export default SearchActions;
