import React from 'react';

import { TextField } from '@mui/material';

import { SearchBarWrapper } from './styled';

interface Props {
  onSearchData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onSearchData }: Props): JSX.Element => {
  return (
    <SearchBarWrapper>
      <TextField
        placeholder="Search"
        onChange={onSearchData}
        sx={{ width: ['95%', '50%', '30%'] }}
        label="Search cryptocurrencies"
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
