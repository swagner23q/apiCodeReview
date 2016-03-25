//User Interface Logic
var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function() {
  $('#buttonSubmit').click(function() {
   $(".results").show();
   $(".results").empty();
   getRepos();

  });
});
