import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Register from "./components/auth/register";
import Login from "./components/auth/login";
import Logout from "./components/auth/logout";
import Movies from "./components/movie/movies";
import SingleMovie from "./components/movie/singleMovie";
import FavouriteMovies from "./components/movie/favouriteMovie";
import Search from "./components/search";
import PrivateRoute from "./privateRoute";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <PrivateRoute exact path="/search-history" component={Movies} />
        <PrivateRoute exact path="/single-movie/:id" component={SingleMovie} />
        <PrivateRoute
          exact
          path="/favourte-movies"
          component={FavouriteMovies}
        />
        <PrivateRoute exact path="/" component={Search} />

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route component={Login} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
