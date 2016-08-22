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
      console.log('handling input!');
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
          )
        ),
        React.createElement('input', { ref: 'data', type: 'text', onInput: this.handleInput.bind(this) })
      );
    }
  }]);

  return SearchInput;
}(React.Component);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1NlYXJjaElucHV0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU0sVzs7O0FBRUosdUJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLDBGQUNYLEtBRFc7QUFHbEI7Ozs7a0NBRWE7QUFDWixjQUFRLEdBQVIsQ0FBWSxpQkFBWjtBQUNBLFdBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFtQixLQUExQyxFQUFpRCxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsS0FBaEU7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLEtBQW5CLEtBQTZCLE1BQWpDLEVBQXlDO0FBQ3ZDLFVBQUUsS0FBSyxJQUFMLENBQVUsSUFBWixFQUFrQixJQUFsQixDQUF1QixNQUF2QixFQUErQixRQUEvQjtBQUNELE9BRkQsTUFFTztBQUNMLFVBQUUsS0FBSyxJQUFMLENBQVUsSUFBWixFQUFrQixJQUFsQixDQUF1QixNQUF2QixFQUErQixNQUEvQjtBQUNEO0FBQ0QsV0FBSyxXQUFMO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQVEsS0FBSSxVQUFaLEVBQXVCLFNBQVMsS0FBSyxZQUFMLENBQWtCLElBQWxCLENBQXVCLElBQXZCLENBQWhDO0FBQ0U7QUFBQTtBQUFBLGNBQVEsT0FBTSxPQUFkO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQVEsT0FBTSxNQUFkO0FBQUE7QUFBQSxXQUZGO0FBR0U7QUFBQTtBQUFBLGNBQVEsT0FBTSxVQUFkO0FBQUE7QUFBQTtBQUhGLFNBREY7QUFNRSx1Q0FBTyxLQUFJLE1BQVgsRUFBa0IsTUFBSyxNQUF2QixFQUE4QixTQUFTLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUF2QztBQU5GLE9BREY7QUFVRDs7OztFQWhDdUIsTUFBTSxTIiwiZmlsZSI6IlNlYXJjaElucHV0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VhcmNoSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQgeyBcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICB9XG5cbiAgaGFuZGxlSW5wdXQoKSB7XG4gICAgY29uc29sZS5sb2coJ2hhbmRsaW5nIGlucHV0IScpO1xuICAgIHRoaXMucHJvcHMuZmV0Y2hNb3ZpZXModGhpcy5yZWZzLmNhdGVnb3J5LnZhbHVlLCB0aGlzLnJlZnMuZGF0YS52YWx1ZSk7XG4gIH1cblxuICBoYW5kbGVTZWxlY3QoKSB7XG4gICAgaWYgKHRoaXMucmVmcy5jYXRlZ29yeS52YWx1ZSA9PT0gJ3llYXInKSB7XG4gICAgICAkKHRoaXMucmVmcy5kYXRhKS5hdHRyKCd0eXBlJywgJ251bWJlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkKHRoaXMucmVmcy5kYXRhKS5hdHRyKCd0eXBlJywgJ3RleHQnKTtcbiAgICB9XG4gICAgdGhpcy5oYW5kbGVJbnB1dCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VsZWN0IHJlZj1cImNhdGVnb3J5XCIgb25JbnB1dD17dGhpcy5oYW5kbGVTZWxlY3QuYmluZCh0aGlzKX0+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInRpdGxlXCI+VGl0bGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwieWVhclwiPlllYXI8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGlyZWN0b3JcIj5EaXJlY3Rvcjwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPGlucHV0IHJlZj1cImRhdGFcIiB0eXBlPVwidGV4dFwiIG9uSW5wdXQ9e3RoaXMuaGFuZGxlSW5wdXQuYmluZCh0aGlzKX0vPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSJdfQ==