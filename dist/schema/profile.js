'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mprofile = function () {
  function mprofile(data) {
    _classCallCheck(this, mprofile);

    this.name = data.name || '';
    this.lastname = data.lastname || '';
    this.fullname = data.fullname || '';
    this.username = data.username || '';
    this.description = data.description || '';
    this.about_me = data.about_me || '';
    this.picture = data.picture || '';
    this.active = data.active || 'off';
    this.phone = data.phone || '';
    this.email = data.email || '';
    this.facebook = data.facebook || '';
    this.histagram = data.histagram || '';
    this.twitter = data.twitter || '';
    this.linkedin = data.linkedin || '';
  }

  _createClass(mprofile, [{
    key: 'valid',
    value: function valid() {
      var errors = [];
      if (!this.name) errors.push({ 'field': 'name' });
      if (!this.lastname) errors.push({ 'field': 'lastname' });
      if (!this.username) errors.push({ 'field': 'username' });
      if (!this.description) errors.push({ 'field': 'description' });
      if (!this.about_me) errors.push({ 'field': 'about_me' });
      if (!this.picture) errors.push({ 'field': 'picture' });
      if (!this.phone) errors.push({ 'field': 'phone' });
      if (!this.email) errors.push({ 'field': 'email' });
      if (errors.length > 0) return { 'success': false, "errors": errors };else return { 'success': true, 'errors': errors };
    }
  }, {
    key: 'getfullname',
    value: function getfullname() {
      return this.name + ' ' + this.lastname;
    }
  }]);

  return mprofile;
}();

exports.default = mprofile;