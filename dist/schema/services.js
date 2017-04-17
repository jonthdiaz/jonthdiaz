'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mservices = function () {
  function mservices(data) {
    _classCallCheck(this, mservices);

    this.name = data.name || '';
    this.description = data.description || '';
    this.order = data.order || 0;
    this.active = data.active || 'off';
    this.image = data.image || "";
  }

  _createClass(mservices, [{
    key: 'valid',
    value: function valid() {
      var errors = [];
      if (!this.name) errors.push({ 'field': 'name' });
      if (!this.description) errors.push({ 'field': 'description' });
      if (errors.length > 0) return { 'success': false, "errors": errors };else return { 'success': true, 'errors': errors };
    }
  }]);

  return mservices;
}();

exports.default = mservices;