//User Interface Logic

var apiKey = require('../.env').apiKey;

$(document).ready(function() {
   $('#buttonSubmit').click(function() {
     var inputtedUser = $("#gitUserName").val();

     $.get('https://api.github.com/users/' + inputtedUser + '/repos' + '?access_token=' + apiKey).then(function(response){
       for(var i = 0; i < response.length; i++) {
        console.log(response[i].name);
      }


     }).fail(function(error){
       console.log(error.responseJSON.message);
   });
  });
});
