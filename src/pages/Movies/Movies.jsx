import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useParams } from "react-router-dom";
import movieApi, {
  category as cate,
  movieType,
  tvType,
} from "../../api/movieApi";
import { apiConfig } from "../../api/apiConfig";
import "./movies.scss";
import MovieCard from "../../components/MovieCard/MovieCard";
import Grid from "../../components/Grid/Grid";
import Search from "../../components/Search/Search";
import Button from "../../components/Button/Button";

const Movies = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { category, query } = useParams();
  console.log(query);
  const handleLoadMore = async () => {
    let response = null;
    if (query === undefined) {
      const params = { page: page + 1 };
      switch (category) {
        case cate.movie:
          response = await movieApi.getMovieList(movieType.upcoming, {
            params,
          });
          break;
        case cate.discovery:
          response = await movieApi.getDiscovery(cate.movie, {
            params,
          });
          break;
        default:
          response = await movieApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = {
        page: page + 1,
        query: query,
      };
      response = await movieApi.search({ params });
    }
    setData([...data, ...response.results]);
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = null;
        if (query === undefined) {
          const params = {};
          switch (category) {
            case cate.movie:
              response = await movieApi.getMovieList(movieType.upcoming, {
                params,
              });
              break;
            case cate.discovery:
              response = await movieApi.getDiscovery(cate.movie, {
                params,
              });
              break;
            default:
              response = await movieApi.getTvList(tvType.popular, { params });
          }
        } else {
          const params = {
            query: query,
          };
          response = await movieApi.search({ params });
        }
        setData(response.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category, query]);

  return (
    <div className="movies">
      <div className="movies__header">
        <span className="movies__title">{category}</span>
        <div className="movies__search">
          <Search cate={category} />
        </div>
      </div>
      <div className="movies__container">
        <Grid col={5} gap={20} smCol={2} mdCol={3}>
          {data &&
            data.map((item) => (
              <MovieCard
                key={item.id}
                data={item}
                cate={
                  category === "discovery"
                    ? item.media_type || "movie"
                    : category
                }
              />
            ))}
        </Grid>
      </div>
      <div className="movies__btn">
        <Button size="lager" onClick={handleLoadMore}>
          Load More
        </Button>
      </div>
    </div>
  );
};

Movies.propTypes = {};

export default Movies;
