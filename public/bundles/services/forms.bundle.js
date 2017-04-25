(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  contactForm: function contactForm(data) {
    return fetch('/api/forms/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function (response) {
      return response.ok ? response.json() : response.json().then(function (err) {
        return { 'error': err };
      });
    });
  }
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjb250ZW50L2pzL3NlcnZpY2VzL2Zvcm1zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDQWM7QUFDWixhQURZLHVCQUNBLElBREEsRUFDSztBQUNmLFdBQU8sTUFBTSxvQkFBTixFQUEyQjtBQUNoQyxjQUFRLE1BRHdCO0FBRWhDLGVBQVM7QUFDUCx3QkFBZ0I7QUFEVCxPQUZ1QjtBQUtoQyxZQUFNLEtBQUssU0FBTCxDQUFlLElBQWY7QUFMMEIsS0FBM0IsRUFNSixJQU5JLENBT0w7QUFBQSxhQUFZLFNBQVMsRUFBVCxHQUFjLFNBQVMsSUFBVCxFQUFkLEdBQWdDLFNBQVMsSUFBVCxHQUFnQixJQUFoQixDQUMxQyxlQUFPO0FBQ0wsZUFBTyxFQUFDLFNBQVMsR0FBVixFQUFQO0FBQ0QsT0FIeUMsQ0FBNUM7QUFBQSxLQVBLLENBQVA7QUFZRDtBQWRXLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGRlZmF1bHR7XG4gIGNvbnRhY3RGb3JtKGRhdGEpe1xuICAgIHJldHVybiBmZXRjaCgnL2FwaS9mb3Jtcy9jb250YWN0Jyx7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgfSkudGhlbihcbiAgICAgIHJlc3BvbnNlID0+IHJlc3BvbnNlLm9rID8gcmVzcG9uc2UuanNvbigpIDogcmVzcG9uc2UuanNvbigpLnRoZW4oXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgcmV0dXJuIHsnZXJyb3InOiBlcnJ9XG4gICAgICAgIH0pXG4gICAgKVxuICB9XG59XG4iXX0=
