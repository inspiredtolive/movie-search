class SearchInput extends React.Component { 

  constructor(props) {
    super(props);

  }

  handleInput() {
    this.props.fetchMovies(this.refs.category.value, this.refs.data.value);
  }

  handleSelect() {
    if (this.refs.category.value === 'year') {
      $(this.refs.data).attr('type', 'number');
    } else {
      $(this.refs.data).attr('type', 'text');
    }
    this.handleInput();
  }

  render() {
    return (
      <div>
        <select ref="category" onInput={this.handleSelect.bind(this)}>
          <option value="title">Title</option>
          <option value="year">Year</option>
          <option value="director">Director</option>
          <option value="genre">Genre</option>
        </select>
        <input ref="data" type="text" onInput={this.handleInput.bind(this)}/>
      </div>
    );
  }
}