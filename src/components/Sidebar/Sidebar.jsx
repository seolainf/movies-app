import React from "react";
import movieApi, { category, movieType, tvType } from "../../api/movieApi";
import Search from "../Search/Search";
import SidebarItem from "../SidebarItem/SidebarItem";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__search">
        <Search />
      </div>
      <div className="sidebar__container">
        <SidebarItem
          type={movieType.popular}
          getData={movieApi.getMovieList}
          title={"Popular Movies"}
          link={category.movie}
        />
        <SidebarItem
          type={tvType.popular}
          getData={movieApi.getTvList}
          title={"Popular TV"}
          link={category.tv}
        />
      </div>
    </div>
  );
};

export default Sidebar;
