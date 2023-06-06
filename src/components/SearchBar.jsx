<<<<<<< HEAD
import React, { useContext } from 'react';
import SearchContext from '../context/SearchContext';

function SearchBar() {
  const {
    searchApi,
  } = useContext(SearchContext);

  const searchHandle = () => {
    const searchInput = document.querySelector('input[name=\'search\']:checked').value;
    const searchWord = document.querySelector('input[name=\'searchWord\']').value;

    console.log(searchInput);
    switch (searchInput) {
    case 'ingredient':
      searchApi(`filter.php?i=${searchWord}`);
      break;
    case 'name':
      searchApi(`search.php?s=${searchWord}`);
      break;
    case 'first-letter':
      if (searchWord.length > 1) {
        global.alert('Your search must have only 1 (one) character');
      } else { searchApi(`search.php?f=${searchWord}`); }
      break;
    default:
      return '';
    }
  };

=======
function SearchBar() {
>>>>>>> e3232f5 (Requisito 09 Togle Search Bar)
  return (
    <div>
      <input
        type="text"
<<<<<<< HEAD
        name="searchWord"
        id=""
        data-testid="search-input"
      />
      <label htmlFor="search">
        <input
          id="ingredient"
          type="radio"
          name="search"
          value="ingredient"
          defaultChecked
          data-testid="ingredient-search-radio"
        />
        Ingrediente
      </label>
      <label htmlFor="">
        <input
          id="name"
          type="radio"
          name="search"
          value="name"
          data-testid="name-search-radio"
        />
        Nome
      </label>
      <label htmlFor="first-letter">
        <input
          id="first-letter"
          type="radio"
          name="search"
          value="first-letter"
          data-testid="first-letter-search-radio"
        />
        Primeira letra
      </label>
      <button
        data-testid="exec-search-btn"
        onClick={ searchHandle }
      >
        Buscar
      </button>
=======
        name=""
        id=""
        data-testid="search-input"
      />
>>>>>>> e3232f5 (Requisito 09 Togle Search Bar)
    </div>
  );
}

export default SearchBar;
