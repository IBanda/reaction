'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VirtualDOMNode = require('../virtualDOMNode'),
    virtualDOMElementMixins = require('../../mixins/virtualDOMElement');

var VirtualDOMElement = function (_VirtualDOMNode) {
  _inherits(VirtualDOMElement, _VirtualDOMNode);

  function VirtualDOMElement(tagName, props) {
    _classCallCheck(this, VirtualDOMElement);

    var domElement = document.createElement(tagName);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(VirtualDOMElement).call(this, props, domElement));
  }

  _createClass(VirtualDOMElement, [{
    key: 'mount',
    value: function mount(parent, reference, context) {
      _get(Object.getPrototypeOf(VirtualDOMElement.prototype), 'mount', this).call(this, parent, reference);

      var childParent = this,
          childReference = null,
          childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        child.mount(childParent, childReference, childContext);
      });

      this.applyProps();
    }
  }, {
    key: 'unmount',
    value: function unmount(context) {
      var childContext = context,
          children = this.getChildren();

      children.forEach(function (child) {
        child.unmount(childContext);
      });

      _get(Object.getPrototypeOf(VirtualDOMElement.prototype), 'unmount', this).call(this);
    }
  }, {
    key: 'applyProps',
    value: function applyProps() {
      var names = Object.keys(this.props);

      names.forEach(function (name) {
        var value = this.props[name];

        if (false) {} else if (isHandlerName(name)) {
          this.setHandler(name, value);
        } else if (isAttributeName(name)) {
          this.setAttribute(name, value);
        } else if (name === 'ref') {
          var callback = value; ///

          callback(this.domElement);
        }
      }.bind(this));
    }
  }, {
    key: 'setHandler',
    value: function setHandler(name, value) {
      var eventType = name.substr(2).toLowerCase(),
          ///
      handler = value; ///

      this.domElement.addEventListener(eventType, handler);
    }
  }]);

  return VirtualDOMElement;
}(VirtualDOMNode);

Object.assign(VirtualDOMElement.prototype, virtualDOMElementMixins);

module.exports = VirtualDOMElement;

function isHandlerName(name) {
  return name.match(/^on/);
}

function isAttributeName(name) {
  return attributeNames.includes(name);
}

var attributeNames = ['accept', 'acceptCharset', 'accessKey', 'action', 'allowFullScreen', 'allowTransparency', 'alt', 'async', 'autoComplete', 'autoFocus', 'autoPlay', 'capture', 'cellPadding', 'cellSpacing', 'challenge', 'charSet', 'checked', 'cite', 'classID', 'className', 'colSpan', 'cols', 'content', 'contentEditable', 'contextMenu', 'controls', 'coords', 'crossOrigin', 'data', 'dateTime', 'default', 'defer', 'dir', 'disabled', 'download', 'draggable', 'encType', 'form', 'formAction', 'formEncType', 'formMethod', 'formNoValidate', 'formTarget', 'frameBorder', 'headers', 'height', 'hidden', 'high', 'href', 'hrefLang', 'htmlFor', 'httpEquiv', 'icon', 'id', 'inputMode', 'integrity', 'is', 'keyParams', 'keyType', 'kind', 'label', 'lang', 'list', 'loop', 'low', 'manifest', 'marginHeight', 'marginWidth', 'max', 'maxLength', 'media', 'mediaGroup', 'method', 'min', 'minLength', 'multiple', 'muted', 'name', 'noValidate', 'nonce', 'open', 'optimum', 'pattern', 'placeholder', 'poster', 'preload', 'profile', 'radioGroup', 'readOnly', 'rel', 'required', 'reversed', 'role', 'rowSpan', 'rows', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'spellCheck', 'src', 'srcDoc', 'srcLang', 'srcSet', 'start', 'step', 'style', 'summary', 'tabIndex', 'target', 'title', 'type', 'useMap', 'value', 'width', 'wmode', 'wrap'];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9lbGVtZW50L3ZpcnR1YWxET01Ob2RlL2VsZW1lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUVBLElBQU0saUJBQWlCLFFBQVEsbUJBQVIsQ0FBakI7SUFDQSwwQkFBMEIsUUFBUSxnQ0FBUixDQUExQjs7SUFFQTs7O0FBQ0osV0FESSxpQkFDSixDQUFZLE9BQVosRUFBcUIsS0FBckIsRUFBNEI7MEJBRHhCLG1CQUN3Qjs7QUFDMUIsUUFBTSxhQUFhLFNBQVMsYUFBVCxDQUF1QixPQUF2QixDQUFiLENBRG9COztrRUFEeEIsOEJBSUksT0FBTyxhQUhhO0dBQTVCOztlQURJOzswQkFPRSxRQUFRLFdBQVcsU0FBUztBQUNoQyxpQ0FSRSx3REFRVSxRQUFRLFVBQXBCLENBRGdDOztBQUdoQyxVQUFNLGNBQWMsSUFBZDtVQUNBLGlCQUFpQixJQUFqQjtVQUNBLGVBQWUsT0FBZjtVQUNBLFdBQVcsS0FBSyxXQUFMLEVBQVgsQ0FOMEI7O0FBUWhDLGVBQVMsT0FBVCxDQUFpQixVQUFTLEtBQVQsRUFBZ0I7QUFDL0IsY0FBTSxLQUFOLENBQVksV0FBWixFQUF5QixjQUF6QixFQUF5QyxZQUF6QyxFQUQrQjtPQUFoQixDQUFqQixDQVJnQzs7QUFZaEMsV0FBSyxVQUFMLEdBWmdDOzs7OzRCQWUxQixTQUFTO0FBQ2YsVUFBTSxlQUFlLE9BQWY7VUFDQSxXQUFXLEtBQUssV0FBTCxFQUFYLENBRlM7O0FBSWYsZUFBUyxPQUFULENBQWlCLFVBQVMsS0FBVCxFQUFnQjtBQUMvQixjQUFNLE9BQU4sQ0FBYyxZQUFkLEVBRCtCO09BQWhCLENBQWpCLENBSmU7O0FBUWYsaUNBOUJFLHlEQThCRixDQVJlOzs7O2lDQVdKO0FBQ1gsVUFBTSxRQUFRLE9BQU8sSUFBUCxDQUFZLEtBQUssS0FBTCxDQUFwQixDQURLOztBQUdYLFlBQU0sT0FBTixDQUFjLFVBQVMsSUFBVCxFQUFlO0FBQzNCLFlBQU0sUUFBUSxLQUFL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S0FkTCxFQWNZLFVBZFosRUFjd0IsVUFkeEIsRUFjb0MsTUFkcEMsRUFjNEMsU0FkNUMsRUFjdUQsTUFkdkQsRUFlckIsU0FmcUIsRUFlVixPQWZVLEVBZUQsUUFmQyxFQWVTLFdBZlQsRUFlc0IsVUFmdEIsRUFla0MsVUFmbEMsRUFlOEMsT0FmOUMsRUFldUQsTUFmdkQsRUFlK0QsT0FmL0QsRUFld0UsTUFmeEUsRUFlZ0YsWUFmaEYsRUFlOEYsS0FmOUYsRUFlcUcsUUFmckcsRUFlK0csU0FmL0csRUFlMEgsUUFmMUgsRUFlb0ksT0FmcEksRUFlNkksTUFmN0ksRUFlcUosT0FmckosRUFlOEosU0FmOUosRUFnQnJCLFVBaEJxQixFQWdCVCxRQWhCUyxFQWdCQyxPQWhCRCxFQWdCVSxNQWhCVixFQWlCckIsUUFqQnFCLEVBa0JyQixPQWxCcUIsRUFtQnJCLE9BbkJxQixFQW9CckIsT0FwQnFCLEVBcUJyQixNQXJCcUIsQ0FBakIiLCJmaWxlIjoiZWxlbWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgVmlydHVhbERPTU5vZGUgPSByZXF1aXJlKCcuLi92aXJ0dWFsRE9NTm9kZScpLFxuICAgICAgdmlydHVhbERPTUVsZW1lbnRNaXhpbnMgPSByZXF1aXJlKCcuLi8uLi9taXhpbnMvdmlydHVhbERPTUVsZW1lbnQnKTtcblxuY2xhc3MgVmlydHVhbERPTUVsZW1lbnQgZXh0ZW5kcyBWaXJ0dWFsRE9NTm9kZSB7XG4gIGNvbnN0cnVjdG9yKHRhZ05hbWUsIHByb3BzKSB7XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XG5cbiAgICBzdXBlcihwcm9wcywgZG9tRWxlbWVudCk7XG4gIH1cblxuICBtb3VudChwYXJlbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIHN1cGVyLm1vdW50KHBhcmVudCwgcmVmZXJlbmNlKTtcblxuICAgIGNvbnN0IGNoaWxkUGFyZW50ID0gdGhpcyxcbiAgICAgICAgICBjaGlsZFJlZmVyZW5jZSA9IG51bGwsXG4gICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLm1vdW50KGNoaWxkUGFyZW50LCBjaGlsZFJlZmVyZW5jZSwgY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXBwbHlQcm9wcygpO1xuICB9XG5cbiAgdW5tb3VudChjb250ZXh0KSB7XG4gICAgY29uc3QgY2hpbGRDb250ZXh0ID0gY29udGV4dCxcbiAgICAgICAgICBjaGlsZHJlbiA9IHRoaXMuZ2V0Q2hpbGRyZW4oKTtcblxuICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpbGQpIHtcbiAgICAgIGNoaWxkLnVubW91bnQoY2hpbGRDb250ZXh0KTtcbiAgICB9KTtcblxuICAgIHN1cGVyLnVubW91bnQoKTtcbiAgfVxuXG4gIGFwcGx5UHJvcHMoKSB7XG4gICAgY29uc3QgbmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLnByb3BzKTtcblxuICAgIG5hbWVzLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuXG4gICAgICBpZiAoZmFsc2UpIHtcblxuICAgICAgfSBlbHNlIGlmIChpc0hhbmRsZXJOYW1lKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGlzQXR0cmlidXRlTmFtZShuYW1lKSkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdyZWYnKSB7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gdmFsdWU7IC8vL1xuICAgICAgICBcbiAgICAgICAgY2FsbGJhY2sodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIH1cbiAgICB9LmJpbmQodGhpcykpO1xuICB9XG5cbiAgc2V0SGFuZGxlcihuYW1lLCB2YWx1ZSkge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IG5hbWUuc3Vic3RyKDIpLnRvTG93ZXJDYXNlKCksIC8vL1xuICAgICAgICAgIGhhbmRsZXIgPSB2YWx1ZTsgIC8vL1xuXG4gICAgdGhpcy5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCAgaGFuZGxlcik7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihWaXJ0dWFsRE9NRWxlbWVudC5wcm90b3R5cGUsIHZpcnR1YWxET01FbGVtZW50TWl4aW5zKTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaXJ0dWFsRE9NRWxlbWVudDtcblxuZnVuY3Rpb24gaXNIYW5kbGVyTmFtZShuYW1lKSB7XG4gIHJldHVybiBuYW1lLm1hdGNoKC9eb24vKTtcbn1cblxuZnVuY3Rpb24gaXNBdHRyaWJ1dGVOYW1lKG5hbWUpIHtcbiAgcmV0dXJuIGF0dHJpYnV0ZU5hbWVzLmluY2x1ZGVzKG5hbWUpO1xufVxuXG5jb25zdCBhdHRyaWJ1dGVOYW1lcyA9IFtcbiAgJ2FjY2VwdCcsICdhY2NlcHRDaGFyc2V0JywgJ2FjY2Vzc0tleScsICdhY3Rpb24nLCAnYWxsb3dGdWxsU2NyZWVuJywgJ2FsbG93VHJhbnNwYXJlbmN5JywgJ2FsdCcsICdhc3luYycsICdhdXRvQ29tcGxldGUnLCAnYXV0b0ZvY3VzJywgJ2F1dG9QbGF5JyxcbiAgJ2NhcHR1cmUnLCAnY2VsbFBhZGRpbmcnLCAnY2VsbFNwYWNpbmcnLCAnY2hhbGxlbmdlJywgJ2NoYXJTZXQnLCAnY2hlY2tlZCcsICdjaXRlJywgJ2NsYXNzSUQnLCAnY2xhc3NOYW1lJywgJ2NvbFNwYW4nLCAnY29scycsICdjb250ZW50JywgJ2NvbnRlbnRFZGl0YWJsZScsICdjb250ZXh0TWVudScsICdjb250cm9scycsICdjb29yZHMnLCAnY3Jvc3NPcmlnaW4nLFxuICAnZGF0YScsICdkYXRlVGltZScsICdkZWZhdWx0JywgJ2RlZmVyJywgJ2RpcicsICdkaXNhYmxlZCcsICdkb3dubG9hZCcsICdkcmFnZ2FibGUnLFxuICAnZW5jVHlwZScsXG4gICdmb3JtJywgJ2Zvcm1BY3Rpb24nLCAnZm9ybUVuY1R5cGUnLCAnZm9ybU1ldGhvZCcsICdmb3JtTm9WYWxpZGF0ZScsICdmb3JtVGFyZ2V0JywgJ2ZyYW1lQm9yZGVyJyxcbiAgJ2hlYWRlcnMnLCAnaGVpZ2h0JywgJ2hpZGRlbicsICdoaWdoJywgJ2hyZWYnLCAnaHJlZkxhbmcnLCAnaHRtbEZvcicsICdodHRwRXF1aXYnLFxuICAnaWNvbicsICdpZCcsICdpbnB1dE1vZGUnLCAnaW50ZWdyaXR5JywgJ2lzJyxcbiAgJ2tleVBhcmFtcycsICdrZXlUeXBlJywgJ2tpbmQnLFxuICAnbGFiZWwnLCAnbGFuZycsICdsaXN0JywgJ2xvb3AnLCAnbG93JyxcbiAgJ21hbmlmZXN0JywgJ21hcmdpbkhlaWdodCcsICdtYXJnaW5XaWR0aCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21lZGlhJywgJ21lZGlhR3JvdXAnLCAnbWV0aG9kJywgJ21pbicsICdtaW5MZW5ndGgnLCAnbXVsdGlwbGUnLCAnbXV0ZWQnLFxuICAnbmFtZScsICdub1ZhbGlkYXRlJywgJ25vbmNlJyxcbiAgJ29wZW4nLCAnb3B0aW11bScsXG4gICdwYXR0ZXJuJywgJ3BsYWNlaG9sZGVyJywgJ3Bvc3RlcicsICdwcmVsb2FkJywgJ3Byb2ZpbGUnLFxuICAncmFkaW9Hcm91cCcsICdyZWFkT25seScsICdyZWwnLCAncmVxdWlyZWQnLCAncmV2ZXJzZWQnLCAncm9sZScsICdyb3dTcGFuJywgJ3Jvd3MnLFxuICAnc2FuZGJveCcsICdzY29wZScsICdzY29wZWQnLCAnc2Nyb2xsaW5nJywgJ3NlYW1sZXNzJywgJ3NlbGVjdGVkJywgJ3NoYXBlJywgJ3NpemUnLCAnc2l6ZXMnLCAnc3BhbicsICdzcGVsbENoZWNrJywgJ3NyYycsICdzcmNEb2MnLCAnc3JjTGFuZycsICdzcmNTZXQnLCAnc3RhcnQnLCAnc3RlcCcsICdzdHlsZScsICdzdW1tYXJ5JyxcbiAgJ3RhYkluZGV4JywgJ3RhcmdldCcsICd0aXRsZScsICd0eXBlJyxcbiAgJ3VzZU1hcCcsXG4gICd2YWx1ZScsXG4gICd3aWR0aCcsXG4gICd3bW9kZScsXG4gICd3cmFwJ1xuXTtcbiJdfQ==