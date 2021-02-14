import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import MoviesCard from "./moviesCard";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
const Movies = () => {
  const [favmovies, setFavMovies] = useState([]);
  useEffect(() => {
    axiosInstance.get("/movies/").then((res) => {
      const data = res.data;
      const favdata = data.filter(function (value) {
        return value.favourite === true;
      });
      setFavMovies(favdata);
    });
  }, [favmovies]);

  return (
    <div>
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {favmovies.map((movie) => {
            return <MoviesCard movie={movie} />;
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Movies;
