import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import MoviesCard from "./moviesCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Movies = () => {
  const classes = useStyles();
  const [moviePage, setMoviePage] = useState(5);
  const [currentPage, setcurrentPage] = useState(1);
  const handleChangePage = (event, value) => {
    setcurrentPage(value);
  };
  const [genre, setGenre] = React.useState("");
  const genreList = [
    "Action",
    "Advanture",
    "War",
    "Comedy",
    "Drama",
    "Fantasy",
    "Horror",
    "Mystery",
    "Romance",
    "Thriller",
    "Western",
    "Sci-Fi",
  ];
  const handleChange = (event) => {
    setGenre(event.target.value);
  };
  const handleChangeCurrentPage = (event) => {
    setMoviePage(event.target.value);
  };
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axiosInstance.get("/movies/").then((res) => {
      const alldata = res.data;
      if (genre === "") {
        setMovies(alldata);
      } else {
        setMovies(
          alldata.filter(function (movie) {
            return movie.genre.includes(genre);
          })
        );
      }
    });
  }, [movies]);
  const indexOfLastPost = currentPage * moviePage;
  const indexOfFirstPost = indexOfLastPost - moviePage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);
  return (
    <div>
      <Container maxWidth="md" component="main">
        <Grid>
          <h1>Filters</h1>
          <Grid item xs={5}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Genre</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={genre}
                onChange={handleChange}
              >
                {genreList.map((value) => {
                  return <MenuItem value={value}>{value}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <hr />

          <br />
          <Grid item xs={12}>
            <Grid container spacing={5} alignItems="flex-end">
              {currentPosts.map((movie) => {
                return <MoviesCard movie={movie} />;
              })}
            </Grid>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Post Per Page</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={moviePage}
            onChange={handleChangeCurrentPage}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <br></br>

        <Pagination
          count={10}
          page={currentPage}
          onChange={handleChangePage}
          color="primary"
        />
      </Container>
    </div>
  );
};

export default Movies;
