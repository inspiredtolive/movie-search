class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  fetchMovies (category, data) {
    console.log(category, data);
    this.setState({'searchResults': window.movies.filter((movie)=> movie[category] === data)});
  }

  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <SearchInput fetchMovies={_.debounce(this.fetchMovies.bind(this), 300)}/>
        <SearchResults movies={this.state.searchResults}/>
      </div>
    );
  }
}