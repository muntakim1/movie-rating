import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import CardActionArea from "@material-ui/core/CardActionArea";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import axiosInstance from "../../axios";
import StarRatings from "react-star-ratings";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MoviesCard(props) {
  const classes = useStyles();
  const rating = parseFloat(props.movie.imdbrating / 2);
  console.log(typeof rating);
  const UpdateFavourate = (movie) => {
    const body = {
      title: movie.title,
      released: movie.released,
      genre: movie.genre,
      director: movie.director,
      imdbrating: movie.imdbrating,
      Production: movie.Production,
      Language: movie.Language,
      writer: movie.writer,
      plot: movie.plot,
      poster: movie.poster,
      favourite: !movie.favourite,
      year: movie.year,
      user: movie.user,
    };
    axiosInstance.put("/movies/" + movie.id + "/", body).then((res) => {
      console.log(res);
    });
  };
  return (
    <Grid item key={props.movie.id} xs={12} md={4}>
      <Card className={classes.root}>
        <Link
          style={{ textDecoration: "none" }}
          to={"/single-movie/" + props.movie.id}
        >
          <CardHeader
            title={props.movie.title}
            subheader={"Released: " + props.movie.released}
          />
          <CardMedia
            className={classes.media}
            image={props.movie.poster}
            title={props.movie.director}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.movie.writer}
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing>
          <StarRatings
            rating={rating | 0.0}
            starRatedColor="blue"
            numberOfStars={6}
            starDimension="25px"
            starSpacing="5px"
            name="rating"
          ></StarRatings>

          <IconButton
            aria-label="add to favorites"
            onClick={() => UpdateFavourate(props.movie)}
          >
            <FavoriteIcon
              color={props.movie.favourite ? "primary" : "inherit"}
            />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
