//User Interface Logic
var apiKey = require('../.env').apiKey;
var getRepos = require('./github.js').getRepos;

$(document).ready(function() {
  $('#buttonSubmit').click(function() {
   var inputtedUser = $("#gitUserName").val();
   $(".results").show();
   $(".results").empty();
   getRepos();

  });
});
