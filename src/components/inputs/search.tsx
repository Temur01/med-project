import { Search } from "lucide-react";

const SearchBtn = () => {
  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search size={18} color="#E5E5E5" />
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:outline-none focus:border-gray-500 block w-full ps-10 py-2 px-4"
          placeholder="Поиск..."
          required
        />
      </div>
    </form>
  );
};
export default SearchBtn;
