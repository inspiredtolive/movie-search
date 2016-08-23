'use strict';

var SearchResult = function SearchResult(_ref) {
  var title = _ref.title;
  var year = _ref.year;
  var director = _ref.director;
  var genres = _ref.genres;
  return React.createElement(
    'tr',
    null,
    React.createElement(
      'td',
      null,
      title
    ),
    React.createElement(
      'td',
      null,
      year
    ),
    React.createElement(
      'td',
      null,
      director
    ),
    React.createElement(
      'td',
      null,
      genres.join(', ')
    )
  );
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaFJlc3VsdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQUksZUFBZSxTQUFmLFlBQWU7QUFBQSxNQUFFLEtBQUYsUUFBRSxLQUFGO0FBQUEsTUFBUyxJQUFULFFBQVMsSUFBVDtBQUFBLE1BQWUsUUFBZixRQUFlLFFBQWY7QUFBQSxNQUF5QixNQUF6QixRQUF5QixNQUF6QjtBQUFBLFNBQ2pCO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFLO0FBQUwsS0FERjtBQUVFO0FBQUE7QUFBQTtBQUFLO0FBQUwsS0FGRjtBQUdFO0FBQUE7QUFBQTtBQUFLO0FBQUwsS0FIRjtBQUlFO0FBQUE7QUFBQTtBQUFLLGFBQU8sSUFBUCxDQUFZLElBQVo7QUFBTDtBQUpGLEdBRGlCO0FBQUEsQ0FBbkIiLCJmaWxlIjoiU2VhcmNoUmVzdWx0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFNlYXJjaFJlc3VsdCA9ICh7dGl0bGUsIHllYXIsIGRpcmVjdG9yLCBnZW5yZXN9KSA9PiAoXG4gIDx0cj5cbiAgICA8dGQ+e3RpdGxlfTwvdGQ+XG4gICAgPHRkPnt5ZWFyfTwvdGQ+XG4gICAgPHRkPntkaXJlY3Rvcn08L3RkPlxuICAgIDx0ZD57Z2VucmVzLmpvaW4oJywgJyl9PC90ZD5cbiAgPC90cj5cbik7Il19