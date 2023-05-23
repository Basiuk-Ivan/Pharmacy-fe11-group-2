import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase, searchIconStyle } from './style';

const SearchActions = () => (
  <Search>
    <SearchIconWrapper>
      <SearchIcon sx={searchIconStyle} />
    </SearchIconWrapper>
    <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
  </Search>
);

export default SearchActions;
