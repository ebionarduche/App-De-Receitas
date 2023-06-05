import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header(title, btnProfile, btnSearch) {
  return (
    <div>
      <h1 data-testid="page-title">{title}</h1>

      {
        btnProfile && (
          <button
            type="button"
            data-testid="profile-top-btn"
          >
            <img src={ profileIcon } alt="profile-icon" />
          </button>)
      }
      { btnSearch && (
        <button
          type="button"
          data-testid="search-top-btn"
        >
          <img src={ searchIcon } alt="search-icon" />
        </button>)}
    </div>
  );
}

export default Header;
