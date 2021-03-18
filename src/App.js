import React from 'react';
import MovieCard from './MovieCard';
import MovieDetails from './MovieDetails';
import { getMoviesByName, getMovieDetailsById } from './utils';
import MovieList from './MovieList'
import Modal from './Modal'
import Searchbar from './Searchbar'
import Paginator from './Paginator'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'batman',
      isLoading: false, 
      movies: null,
      error: null,
      modalOpen: false,
      currMovie: null,
      page: 1,
      type: ''
    }
    this.openModal = this.openModal.bind(this)
    this.incrementPage = this.incrementPage.bind(this)
    this.decrementPage = this.decrementPage.bind(this)
    this.onSearchSubmit = this.onSearchSubmit.bind(this)
  }

  openModal = (show=false) => {
    this.setState({
      modalOpen: show
    })
  }

  incrementPage() {
    this.setState((prevState) => {
      return {
        page: prevState.page + 1
      }
    })
  }

  decrementPage() {
    this.setState((prevState) => {
      return {
        page: prevState.page - 1
      }
    })
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    });

    setTimeout( async () => {
      try {
        const movieData = await getMoviesByName(this.state.searchTerm, this.state.page, this.state.type)
        this.setState({
          isLoading: false,
          movies: movieData,
          error: null
        })
      } catch (error) {
        this.setState({
          isLoading: false,
          movies: [],
          error: error
        })
      }
    }, 1000);
    
  }

  async componentDidUpdate(prevProps, prevState) {
    if(prevState.page !== this.state.page || prevState.searchTerm !== this.state.searchTerm || prevState.type !== this.state.type) {
    try {
      const movieData = await getMoviesByName(this.state.searchTerm, this.state.page, this.state.type)
      console.log("New data fetched")
      this.setState({
        isLoading: false,
        movies: movieData,
        error: null 
      })
    } catch (error) {
      this.setState({
        isLoading: false,
        movies: [],
        error: error
      })
    }
  }
  }

  async onMovieClicked(movieId) {
    const movie = await getMovieDetailsById(movieId)
    this.setState({
      currMovie: movie,
      modalOpen: true
    })

  }

  onTypeSubmit = (type) => {
    this.setState({
      type: type
    })
  }

  onSearchSubmit(searchTerm) {
    this.setState({
      searchTerm:  searchTerm
    })
} 

  render() {

    const {currMovie} = this.state;

    return (
      <>
        { this.state.isLoading 
          ? <h1>Loading data</h1>
          : (
            <>
              <h1 id='title'>MovieFind</h1>
              <Searchbar onSearchSubmit={this.onSearchSubmit}
              onTypeSubmit={this.onTypeSubmit}
              />
              <MovieList list={this.state.movies?.Search}
              render={(movie) => (
              <MovieCard
                title={movie.Title} 
                posterUrl={movie.Poster} 
                type={movie.Type}
                onClick={() => this.onMovieClicked(movie.imdbID)}
              />
              )}
              />
              <Paginator 
                currentPage={this.state.page}
                numPages={Math.ceil(this.state.movies?.totalResults / 10)} 
                onPrevPage={this.decrementPage} 
                onNextPage={this.incrementPage}/>
              <Modal show={this.state.modalOpen} onClose={() => this.openModal(false)}>
              <MovieDetails 
                posterUrl={currMovie?.Poster}
                title={currMovie?.Title}
                rated={currMovie?.Rated}
                runtime={currMovie?.Runtime}
                genre={currMovie?.Genre}
                rating={currMovie?.Ratings[0].Value}
                plot={currMovie?.Plot}
                actors={currMovie?.Actors}
                />
              </Modal>
            </>
          ) 
        }
      </>
    );
  }
}

export default App;