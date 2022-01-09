import React from 'react';
import {Container} from "./styles";
import search_icon from '../../img/search_icon.png';

const Search = ({search, setSearch}) => {

  return(
    <Container>
      <input type="text"
             value={search}
             onChange={e => setSearch(e.target.value)}
      />
      <img src={search_icon} className='search_icon' alt=""/>
    </Container>
  )
};

export default Search;