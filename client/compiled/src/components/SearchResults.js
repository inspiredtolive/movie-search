"use strict";

var SearchResults = function SearchResults(_ref) {
  var movies = _ref.movies;
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h2",
      null,
      "Search Results"
    ),
    React.createElement(
      "table",
      { id: "movieList" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          React.createElement(
            "th",
            null,
            "Movie Title"
          ),
          React.createElement(
            "th",
            null,
            "Year"
          ),
          React.createElement(
            "th",
            null,
            "Director"
          ),
          React.createElement(
            "th",
            null,
            "Genres"
          )
        )
      ),
      React.createElement(
        "tbody",
        null,
        movies.map(function (_ref2) {
          var title = _ref2.title;
          var year = _ref2.year;
          var director = _ref2.director;
          var genres = _ref2.genres;
          return React.createElement(SearchResult, { key: title, title: title, year: year, director: director, genres: genres });
        })
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLE1BQUUsTUFBRixRQUFFLE1BQUY7QUFBQSxTQUNsQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTyxJQUFHLFdBQVY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFERixPQURGO0FBU0U7QUFBQTtBQUFBO0FBQ0csZUFBTyxHQUFQLENBQVc7QUFBQSxjQUFFLEtBQUYsU0FBRSxLQUFGO0FBQUEsY0FBUyxJQUFULFNBQVMsSUFBVDtBQUFBLGNBQWUsUUFBZixTQUFlLFFBQWY7QUFBQSxjQUF5QixNQUF6QixTQUF5QixNQUF6QjtBQUFBLGlCQUNWLG9CQUFDLFlBQUQsSUFBYyxLQUFLLEtBQW5CLEVBQTBCLE9BQU8sS0FBakMsRUFBd0MsTUFBTSxJQUE5QyxFQUFvRCxVQUFVLFFBQTlELEVBQXdFLFFBQVEsTUFBaEYsR0FEVTtBQUFBLFNBQVg7QUFESDtBQVRGO0FBRkYsR0FEa0I7QUFBQSxDQUFwQiIsImZpbGUiOiJTZWFyY2hSZXN1bHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaFJlc3VsdHMgPSAoe21vdmllc30pID0+IChcbiAgPGRpdj5cbiAgICA8aDI+U2VhcmNoIFJlc3VsdHM8L2gyPlxuICAgIDx0YWJsZSBpZD1cIm1vdmllTGlzdFwiPlxuICAgICAgPHRoZWFkPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoPk1vdmllIFRpdGxlPC90aD5cbiAgICAgICAgICA8dGg+WWVhcjwvdGg+XG4gICAgICAgICAgPHRoPkRpcmVjdG9yPC90aD5cbiAgICAgICAgICA8dGg+R2VucmVzPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHttb3ZpZXMubWFwKCh7dGl0bGUsIHllYXIsIGRpcmVjdG9yLCBnZW5yZXN9KT0+KFxuICAgICAgICAgIDxTZWFyY2hSZXN1bHQga2V5PXt0aXRsZX0gdGl0bGU9e3RpdGxlfSB5ZWFyPXt5ZWFyfSBkaXJlY3Rvcj17ZGlyZWN0b3J9IGdlbnJlcz17Z2VucmVzfS8+XG4gICAgICAgICkpfVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbik7Il19