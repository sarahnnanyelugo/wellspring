import './_search-bar.scss'


export const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Search</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Search "
      name="s"
    />
  </form>
);
