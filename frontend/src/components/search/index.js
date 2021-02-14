import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import axiosInstance from "../../axios";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MoviesCard from "../movie/moviesCard";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Index = () => {
  const [error, setError] = useState("No Data");
  const initialFormData = Object.freeze({
    title: "",
    year: "",
  });
  const [formData, updateFormData] = useState(initialFormData);
  const [movies, setMovies] = useState([]);
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData.title.replace(/\s+/g, "+").toLowerCase());

    axiosInstance
      .get(
        "/single-movie/?title=" +
          formData.title.replace(/\s+/g, "+").toLowerCase() +
          "&year=" +
          formData.year
      )
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };
  const classes = useStyles();
  return (
    <Container>
      <br />
      <Card>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            required
            name="title"
            onChange={handleChange}
            id="standard-basic"
            label="Title"
          />
          <TextField
            required
            name="year"
            onChange={handleChange}
            id="standard-basic"
            label="Year"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Search
          </Button>
        </form>
      </Card>
      <br />
      {movies && Object.keys(movies).length === 0
        ? error
        : movies.map((movie) => <MoviesCard movie={movie} />)}
    </Container>
  );
};

export default Index;
