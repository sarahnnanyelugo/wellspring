import './_search-bar.scss'
import { PhoneIcon, AddIcon, Search2Icon } from chakra-ui/icons";

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
