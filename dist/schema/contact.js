'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var contact = function () {
  function contact(data) {
    _classCallCheck(this, contact);

    this.name = data.name || '';
    this.email = data.email || '';
    this.comment = data.comment || '';
    this.phone = data.phone || '';
  }

  _createClass(contact, [{
    key: 'valid',
    value: function valid() {
      var errors = [];
      if (!this.name) errors.push({ 'field': 'name' });
      if (!this.email) errors.push({ 'field': 'email' });
      if (!this.comment) errors.push({ 'field': 'comment' });
      if (!this.phone) errors.push({ 'field': 'phone' });
      if (errors.length > 0) return { 'success': false, "errors": errors };else return { 'success': true, 'errors': errors };
    }
  }]);

  return contact;
}();

exports.default = contact;