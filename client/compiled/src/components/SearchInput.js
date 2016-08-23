'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchInput = function (_React$Component) {
  _inherits(SearchInput, _React$Component);

  function SearchInput(props) {
    _classCallCheck(this, SearchInput);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SearchInput).call(this, props));
  }

  _createClass(SearchInput, [{
    key: 'handleInput',
    value: function handleInput() {
      this.props.fetchMovies(this.refs.category.value, this.refs.data.value);
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect() {
      if (this.refs.category.value === 'year') {
        $(this.refs.data).attr('type', 'number');
      } else {
        $(this.refs.data).attr('type', 'text');
      }
      this.handleInput();
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'select',
          { ref: 'category', onInput: this.handleSelect.bind(this) },
          React.createElement(
            'option',
            { value: 'title' },
            'Title'
          ),
          React.createElement(
            'option',
            { value: 'year' },
            'Year'
          ),
          React.createElement(
            'option',
            { value: 'director' },
            'Director'
          ),
          React.createElement(
            'option',
            { value: 'genre' },
            'Genre'
          )
        ),
        React.createElement('input', { ref: 'data', type: 'text', onInput: this.handleInput.bind(this) })
      );
    }
  }]);

  return SearchInput;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaElucHV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sVzs7O0FBRUosdUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDBGQUNYLEtBRFc7QUFHbEI7Ozs7a0NBRWE7QUFDWixXQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBbUIsS0FBMUMsRUFBaUQsS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLEtBQWhFO0FBQ0Q7OzttQ0FFYztBQUNiLFVBQUksS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixLQUFuQixLQUE2QixNQUFqQyxFQUF5QztBQUN2QyxVQUFFLEtBQUssSUFBTCxDQUFVLElBQVosRUFBa0IsSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0IsUUFBL0I7QUFDRCxPQUZELE1BRU87QUFDTCxVQUFFLEtBQUssSUFBTCxDQUFVLElBQVosRUFBa0IsSUFBbEIsQ0FBdUIsTUFBdkIsRUFBK0IsTUFBL0I7QUFDRDtBQUNELFdBQUssV0FBTDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxZQUFRLEtBQUksVUFBWixFQUF1QixTQUFTLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUFoQztBQUNFO0FBQUE7QUFBQSxjQUFRLE9BQU0sT0FBZDtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLE9BQU0sTUFBZDtBQUFBO0FBQUEsV0FGRjtBQUdFO0FBQUE7QUFBQSxjQUFRLE9BQU0sVUFBZDtBQUFBO0FBQUEsV0FIRjtBQUlFO0FBQUE7QUFBQSxjQUFRLE9BQU0sT0FBZDtBQUFBO0FBQUE7QUFKRixTQURGO0FBT0UsdUNBQU8sS0FBSSxNQUFYLEVBQWtCLE1BQUssTUFBdkIsRUFBOEIsU0FBUyxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBdkM7QUFQRixPQURGO0FBV0Q7Ozs7RUFoQ3VCLE1BQU0sUyIsImZpbGUiOiJTZWFyY2hJbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlYXJjaElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgfVxuXG4gIGhhbmRsZUlucHV0KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hNb3ZpZXModGhpcy5yZWZzLmNhdGVnb3J5LnZhbHVlLCB0aGlzLnJlZnMuZGF0YS52YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMucmVmcy5jYXRlZ29yeS52YWx1ZSA9PT0gJ3llYXInKSB7XG4gICAgICAkKHRoaXMucmVmcy5kYXRhKS5hdHRyKCd0eXBlJywgJ251bWJlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMucmVmcy5kYXRhKS5hdHRyKCd0eXBlJywgJ3RleHQnKTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0IHJlZj1cImNhdGVnb3J5XCIgb25JbnB1dD17dGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWVhclwiPlllYXI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGlyZWN0b3JcIj5EaXJlY3Rvcjwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJnZW5yZVwiPkdlbnJlPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8aW5wdXQgcmVmPVwiZGF0YVwiIHR5cGU9XCJ0ZXh0XCIgb25JbnB1dD17dGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpfS8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59Il19