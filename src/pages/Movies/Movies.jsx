import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import movieApi, {
  category as cate,
  movieType,
  tvType,
} from "../../api/movieApi";
import Button from "../../components/Button/Button";
import Grid from "../../components/Grid/Grid";
import MovieCard from "../../components/MovieCard/MovieCard";
import Search from "../../components/Search/Search";
import "./movies.scss";

const Movies = (props) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const { category, query, genres } = useParams();

  const handleLoadMore = async () => {
    let response = null;
    if (query === undefined && genres === undefined) {
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
    } else if (genres !== undefined) {
      const params = { with_genres: genres, page: page + 1 };
      response = await movieApi.getDiscovery(cate.movie, { params });
    } else {
      const params = {
        page: page + 1,
        query: query,
      };
      response = await movieApi.getSearch({ params });
    }
    setData([...data, ...response.results]);
    setPage(page + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = null;
        if (query === undefined && genres === undefined) {
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
        } else if (genres !== undefined) {
          const params = { with_genres: genres };
          response = await movieApi.getDiscovery(cate.movie, { params });
        } else {
          const params = {
            query: query,
          };
          response = await movieApi.getSearch({ params });
        }
        setData(response.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category, query, genres]);

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

export default Movies;
