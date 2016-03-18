//User Interface Logic

var apiKey = require('../.env').apiKey;

$(document).ready(function() {
   $('#buttonSubmit').click(function() {
     var inputtedUser = $("#gitUserName").val();


     $(".results").empty();
     $.get('https://api.github.com/users/' + inputtedUser + '/repos' + '?access_token=' + apiKey).then(function(response){
       for(var i = 0; i < response.length; i++) {
        $(".results").append("<li> Repo Name: " + response[i].name + "<br>" + "Date Created: " + moment(response[i].created_at).format("LLL") + "<br><br>" + "Description: " + response[i].description + "</li><p></p>");

      }
    });
      $.get('https://api.github.com/users/' + inputtedUser + '?access_token=' + apiKey).then(function(response){
         $(".userProfiles").html("<img src=' " + response.avatar_url + " '>" + "<br><br>Name: " + response.name + "<br><br>Location: " + response.location + "<br><br>Followers: " + response.followers + "<br><br>Total Repositories: " + response.public_repos);

     }).fail(function(error){
       console.log(error.responseJSON.message);
   });
  });
});
// "Date Created: " + moment(response[i].created_at).format("LTS") + "<br><br>" +
