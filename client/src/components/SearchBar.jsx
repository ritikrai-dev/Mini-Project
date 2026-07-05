import "../style/searchBar.css";


export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="search-bar">

      <i className="ti ti-search search-icon"></i>

      <input
        type="text"
        placeholder="Search transaction..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


    </div>
  );
}