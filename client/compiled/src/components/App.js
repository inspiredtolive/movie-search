'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = {
      searchResults: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'fetchMovies',
    value: function fetchMovies(category, data) {
      console.log(category, data);
      this.setState({ 'searchResults': window.movies.filter(function (movie) {
          return movie[category] === data;
        }) });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Movie Search'
        ),
        React.createElement(SearchInput, { fetchMovies: _.debounce(this.fetchMovies.bind(this), 300) }),
        React.createElement(SearchResults, { movies: this.state.searchResults })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQWEsS0FBYixFQUFvQjtBQUFBOztBQUFBLHVGQUNaLEtBRFk7O0FBRWxCLFVBQUssS0FBTCxHQUFhO0FBQ1gscUJBQWU7QUFESixLQUFiO0FBRmtCO0FBS25COzs7O2dDQUVZLFEsRUFBVSxJLEVBQU07QUFDM0IsY0FBUSxHQUFSLENBQVksUUFBWixFQUFzQixJQUF0QjtBQUNBLFdBQUssUUFBTCxDQUFjLEVBQUMsaUJBQWlCLE9BQU8sTUFBUCxDQUFjLE1BQWQsQ0FBcUIsVUFBQyxLQUFEO0FBQUEsaUJBQVUsTUFBTSxRQUFOLE1BQW9CLElBQTlCO0FBQUEsU0FBckIsQ0FBbEIsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFLDRCQUFDLFdBQUQsSUFBYSxhQUFhLEVBQUUsUUFBRixDQUFXLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFYLEVBQXdDLEdBQXhDLENBQTFCLEdBRkY7QUFHRSw0QkFBQyxhQUFELElBQWUsUUFBUSxLQUFLLEtBQUwsQ0FBVyxhQUFsQztBQUhGLE9BREY7QUFPRDs7OztFQXJCZSxNQUFNLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hSZXN1bHRzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgZmV0Y2hNb3ZpZXMgKGNhdGVnb3J5LCBkYXRhKSB7XG4gICAgY29uc29sZS5sb2coY2F0ZWdvcnksIGRhdGEpO1xuICAgIHRoaXMuc2V0U3RhdGUoeydzZWFyY2hSZXN1bHRzJzogd2luZG93Lm1vdmllcy5maWx0ZXIoKG1vdmllKT0+IG1vdmllW2NhdGVnb3J5XSA9PT0gZGF0YSl9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPk1vdmllIFNlYXJjaDwvaDE+XG4gICAgICAgIDxTZWFyY2hJbnB1dCBmZXRjaE1vdmllcz17Xy5kZWJvdW5jZSh0aGlzLmZldGNoTW92aWVzLmJpbmQodGhpcyksIDMwMCl9Lz5cbiAgICAgICAgPFNlYXJjaFJlc3VsdHMgbW92aWVzPXt0aGlzLnN0YXRlLnNlYXJjaFJlc3VsdHN9Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0=