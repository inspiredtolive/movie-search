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
      console.log('Fetching movies');
      var options = {};
      options[category] = data;
      $.ajax({
        url: 'http://127.0.0.1:3000/classes/movies',
        method: 'POST',
        data: JSON.stringify(options),
        dataType: 'json',
        success: function (res) {
          this.setState({ searchResults: res.results });
        }.bind(this),
        error: function error(err) {
          console.log(err);
        }
      });
      // this.setState({'searchResults': window.movies.filter((movie)=> movie[category] === data)});
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
        React.createElement(SearchInput, { fetchMovies: _.debounce(this.fetchMovies.bind(this), 200) }),
        React.createElement(SearchResults, { movies: this.state.searchResults })
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNLEc7OztBQUNKLGVBQWEsS0FBYixFQUFvQjtBQUFBOztBQUFBLHVGQUNaLEtBRFk7O0FBRWxCLFVBQUssS0FBTCxHQUFhO0FBQ1gscUJBQWU7QUFESixLQUFiO0FBRmtCO0FBS25COzs7O2dDQUVZLFEsRUFBVSxJLEVBQU07QUFDM0IsY0FBUSxHQUFSLENBQVksaUJBQVo7QUFDQSxVQUFJLFVBQVUsRUFBZDtBQUNBLGNBQVEsUUFBUixJQUFvQixJQUFwQjtBQUNBLFFBQUUsSUFBRixDQUFPO0FBQ0wsYUFBSyxzQ0FEQTtBQUVMLGdCQUFRLE1BRkg7QUFHTCxjQUFNLEtBQUssU0FBTCxDQUFlLE9BQWYsQ0FIRDtBQUlMLGtCQUFVLE1BSkw7QUFLTCxpQkFBUyxVQUFTLEdBQVQsRUFBYztBQUNyQixlQUFLLFFBQUwsQ0FBYyxFQUFDLGVBQWUsSUFBSSxPQUFwQixFQUFkO0FBQ0QsU0FGUSxDQUVQLElBRk8sQ0FFRixJQUZFLENBTEo7QUFRTCxlQUFPLGVBQVMsR0FBVCxFQUFjO0FBQ25CLGtCQUFRLEdBQVIsQ0FBWSxHQUFaO0FBQ0Q7QUFWSSxPQUFQO0FBWUE7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRSw0QkFBQyxXQUFELElBQWEsYUFBYSxFQUFFLFFBQUYsQ0FBVyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBWCxFQUF3QyxHQUF4QyxDQUExQixHQUZGO0FBR0UsNEJBQUMsYUFBRCxJQUFlLFFBQVEsS0FBSyxLQUFMLENBQVcsYUFBbEM7QUFIRixPQURGO0FBT0Q7Ozs7RUFuQ2UsTUFBTSxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoUmVzdWx0czogW10sXG4gICAgfTtcbiAgfVxuXG4gIGZldGNoTW92aWVzIChjYXRlZ29yeSwgZGF0YSkge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBtb3ZpZXMnKTtcbiAgICB2YXIgb3B0aW9ucyA9IHt9O1xuICAgIG9wdGlvbnNbY2F0ZWdvcnldID0gZGF0YTtcbiAgICAkLmFqYXgoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTozMDAwL2NsYXNzZXMvbW92aWVzJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkob3B0aW9ucyksXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaFJlc3VsdHM6IHJlcy5yZXN1bHRzfSk7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBlcnJvcjogZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgLy8gdGhpcy5zZXRTdGF0ZSh7J3NlYXJjaFJlc3VsdHMnOiB3aW5kb3cubW92aWVzLmZpbHRlcigobW92aWUpPT4gbW92aWVbY2F0ZWdvcnldID09PSBkYXRhKX0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+TW92aWUgU2VhcmNoPC9oMT5cbiAgICAgICAgPFNlYXJjaElucHV0IGZldGNoTW92aWVzPXtfLmRlYm91bmNlKHRoaXMuZmV0Y2hNb3ZpZXMuYmluZCh0aGlzKSwgMjAwKX0vPlxuICAgICAgICA8U2VhcmNoUmVzdWx0cyBtb3ZpZXM9e3RoaXMuc3RhdGUuc2VhcmNoUmVzdWx0c30vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==