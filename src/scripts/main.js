'use strict';

$(document).ready(function() {
  $('#form').validate({
    rules: {
      name: {
        required: true,
        // asd
      },
      email: {
        required: true,
        email: true,
      },
      phone: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
      country: 'required',
      bday: 'date',
      password: {
        required: true,
        minlength: 8,
      },
      password2: {
        required: true,
        minlength: 8,
        equalTo: '#password',
      },
    },
    messages: { password2: { equalTo: 'Passwords do not match' } },
  });
});
