import React, { useEffect, useState } from "react";
import axiosInstance from "../../axios";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import StarRatings from "react-star-ratings";
import moment from "moment";

const Post = (props) => {
  const rating = parseFloat(props.m.imdbrating / 2);

  return (
    <Grid container spacing={1}>
      <br />{" "}
      <Grid item xs={6}>
        <img src={props.m.poster} alt={props.m.title}></img>
        <Typography color="textPrimary" component="h1">
          Rating:
        </Typography>
        <StarRatings
          rating={rating | 0.0}
          starRatedColor="blue"
          numberOfStars={6}
          starDimension="25px"
          starSpacing="5px"
          name="rating"
        ></StarRatings>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography color="textPrimary" component="h1">
            Release Date:
          </Typography>
          {props.m.released}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography color="textPrimary" component="h1">
            Production:
          </Typography>
          {props.m.Production}
        </Typography>
      </Grid>
      <Grid item xs={6}>
        {" "}
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography color="textPrimary" component="h1">
            Title
          </Typography>
          <strong>{props.m.title}</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography color="textPrimary" component="h1">
            Genre
          </Typography>
          {props.m.genre}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography color="textPrimary" component="h1">
            Director
          </Typography>
          {props.m.director}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography color="textPrimary" component="h1">
            Writer
          </Typography>
          {props.m.writer}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Typography color="textPrimary" component="h1">
            Plot
          </Typography>
          {props.m.plot}
        </Typography>
      </Grid>
    </Grid>
  );
};

const SingleMovie = (props) => {
  const id = props.match.params.id;
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosInstance.get("/movies/" + id + "/").then((res) => {
      setMovies([res.data]);
    });
  }, []);
  return (
    <Container maxWidth="md" component="main">
      <br />
      <br />
      <br />

      {movies.map((m) => (
        <Post m={m}></Post>
      ))}
    </Container>
  );
};

export default SingleMovie;
