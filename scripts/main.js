'use strict';

$('#form').validate({
  rules: {
    name: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    phone: {
      required: true,
      minlength: 10,
      number: true,
    },
    country: {
      required: true,
    },
    password: {
      required: true,
      minlength: 8,
    },
    password2: {
      required: true,
      minlength: 8,
    },
  },
});
