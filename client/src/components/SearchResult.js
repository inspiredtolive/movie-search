var SearchResult = ({title, year, director, genres}) => (
  <tr>
    <td>{title}</td>
    <td>{year}</td>
    <td>{director}</td>
    <td>{genres.join(', ')}</td>
  </tr>
);