import React from 'react'
import { IoSearchOutline } from "react-icons/io5";

function Search({ setSearch }) {
  const handleSearch = () => {
      const searchInput = document.getElementById("searchInput");
      if (searchInput) {
          setSearch(searchInput.value);
    }
    console.log(searchInput.value);
  };
    return (
        <div className=" flex border-2 mr-10">
            <input type="text" className=" pl-2 py-1 w-[300px]  focus:outline-none" id="searchInput" />
            <button className=" px-2 border-l-2" onClick={handleSearch}>
                <IoSearchOutline />
            </button>
        </div>
    );
}

export default Search