const SearchBar = ({ keyword, setKeyword, handleSearch }) => {
  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="캠핑장을 검색해 보세요."
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="submit"
        className="absolute text-gray-500 transform -translate-y-1/2 right-2 top-1/2"
      >
        🔍
      </button>
    </form>
  );
};

export default SearchBar;
