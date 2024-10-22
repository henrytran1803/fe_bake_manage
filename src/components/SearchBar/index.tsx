import React, { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { SearchBarProps } from './types';



const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSort, onFilter }) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const sortRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (onSearch) onSearch(value);
  };

  const handleSort = (option: string) => {
    if (onSort) onSort(option);
    setIsSortOpen(false);
  };

  const handleFilterChange = (key: string) => {
    const newFilters = {
      ...filters,
      [key]: !filters[key as keyof typeof filters]
    };
    setFilters(newFilters);
    if (onFilter) onFilter(newFilters);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative flex items-center gap-2">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder="Search for anything"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative" ref={sortRef}>
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowUpDown size={20} className="text-gray-600" />
          </button>
          {isSortOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
              <button
                onClick={() => handleSort('newest')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
              >
                Newest First
              </button>
              <button
                onClick={() => handleSort('oldest')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
              >
                Oldest First
              </button>
              <button
                onClick={() => handleSort('az')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
              >
                A to Z
              </button>
              <button
                onClick={() => handleSort('za')}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 text-sm"
              >
                Z to A
              </button>
            </div>
          )}
        </div>

        {/* Filter Dropdown */}
        <div className="relative" ref={filterRef}>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <SlidersHorizontal size={20} className="text-gray-600" />
          </button>
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
              <div className="px-4 py-2 hover:bg-gray-100">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm">Option 1</span>
                  <input
                    type="checkbox"
                    checked={filters.option1}
                    onChange={() => handleFilterChange('option1')}
                    className="ml-2"
                  />
                </label>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm">Option 2</span>
                  <input
                    type="checkbox"
                    checked={filters.option2}
                    onChange={() => handleFilterChange('option2')}
                    className="ml-2"
                  />
                </label>
              </div>
              <div className="px-4 py-2 hover:bg-gray-100">
                <label className="flex items-center justify-between cursor-pointer">
                  <span className="text-sm">Option 3</span>
                  <input
                    type="checkbox"
                    checked={filters.option3}
                    onChange={() => handleFilterChange('option3')}
                    className="ml-2"
                  />
                </label>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;