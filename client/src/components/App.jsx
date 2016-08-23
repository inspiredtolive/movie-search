class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  fetchMovies (category, data) {
    console.log('Fetching movies');
    var options = {};
    options[category] = data;
    $.ajax({
      url: 'http://127.0.0.1:3000/classes/movies',
      method: 'POST',
      data: JSON.stringify(options),
      dataType: 'json',
      success: function(res) {
        this.setState({searchResults: res.results});
      }.bind(this),
      error: function(err) {
        console.log(err);
      }
    });
    // this.setState({'searchResults': window.movies.filter((movie)=> movie[category] === data)});
  }

  render() {
    return (
      <div>
        <h1>Movie Search</h1>
        <SearchInput fetchMovies={_.debounce(this.fetchMovies.bind(this), 200)}/>
        <SearchResults movies={this.state.searchResults}/>
      </div>
    );
  }
}