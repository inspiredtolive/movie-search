var SearchResults = ({movies}) => (
  <div>
    <h2>Search Results</h2>
    <table id="movieList">
      <thead>
        <tr>
          <th>Movie Title</th>
          <th>Year</th>
          <th>Director</th>
          <th>Genres</th>
        </tr>
      </thead>
      <tbody>
        {movies.map(({title, year, director, genres})=>(
          <SearchResult key={title} title={title} year={year} director={director} genres={genres}/>
        ))}
      </tbody>
    </table>
  </div>
);