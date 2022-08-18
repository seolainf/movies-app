import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./search.scss";

const Search = ({ size = "lager", cate }) => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/multi/${search}`);
  };
  return (
    <div
      className={`search ${size}`}
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos="fade-left"
    >
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>
        <BsSearch />
      </button>
    </div>
  );
};

export default Search;
