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
          return React.createElement(SearchResult, { key: title, title: title, year: year, director: director });
        })
      )
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLGdCQUFnQixTQUFoQixhQUFnQjtBQUFBLE1BQUUsTUFBRixRQUFFLE1BQUY7QUFBQSxTQUNsQjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFFRTtBQUFBO0FBQUEsUUFBTyxJQUFHLFdBQVY7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFERixPQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0csZUFBTyxHQUFQLENBQVc7QUFBQSxjQUFFLEtBQUYsU0FBRSxLQUFGO0FBQUEsY0FBUyxJQUFULFNBQVMsSUFBVDtBQUFBLGNBQWUsUUFBZixTQUFlLFFBQWY7QUFBQSxpQkFDVixvQkFBQyxZQUFELElBQWMsS0FBSyxLQUFuQixFQUEwQixPQUFPLEtBQWpDLEVBQXdDLE1BQU0sSUFBOUMsRUFBb0QsVUFBVSxRQUE5RCxHQURVO0FBQUEsU0FBWDtBQURIO0FBUkY7QUFGRixHQURrQjtBQUFBLENBQXBCIiwiZmlsZSI6IlNlYXJjaFJlc3VsdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU2VhcmNoUmVzdWx0cyA9ICh7bW92aWVzfSkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMj5TZWFyY2ggUmVzdWx0czwvaDI+XG4gICAgPHRhYmxlIGlkPVwibW92aWVMaXN0XCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+TW92aWUgVGl0bGU8L3RoPlxuICAgICAgICAgIDx0aD5ZZWFyPC90aD5cbiAgICAgICAgICA8dGg+RGlyZWN0b3I8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keT5cbiAgICAgICAge21vdmllcy5tYXAoKHt0aXRsZSwgeWVhciwgZGlyZWN0b3J9KT0+KFxuICAgICAgICAgIDxTZWFyY2hSZXN1bHQga2V5PXt0aXRsZX0gdGl0bGU9e3RpdGxlfSB5ZWFyPXt5ZWFyfSBkaXJlY3Rvcj17ZGlyZWN0b3J9Lz5cbiAgICAgICAgKSl9XG4gICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuKTsiXX0=