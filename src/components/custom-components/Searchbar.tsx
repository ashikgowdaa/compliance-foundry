import React from 'react';
import { Search } from 'lucide-react';


type searchbarProps = {
    placeholder: string;
    className?: string;
}
    
const Searchbar = ({placeholder ,className}:searchbarProps) => {
  return (
    <div className={`relative w-full max-w-md ${className}`}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full pl-4 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-200  transition-all duration-200 text-text-primary "
        
      />
      <Search
        className="absolute right-1 top-1/2 -translate-y-1/2  bg-blue-700 h-[40px] rounded-full w-10 px-3 cursor-pointer"
        size={10}
      />
    </div>
  );
};

export default Searchbar;
