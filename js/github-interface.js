//User Interface Logic

var apiKey = require('../.env').apiKey;

$(document).ready(function() {
   $('#buttonSubmit').click(function() {
     var inputtedUser = $("#gitUserName").val();

     $(".results").show();
     $(".results").empty();
     $.get('https://api.github.com/users/' + inputtedUser + '/repos' + '?access_token=' + apiKey).then(function(response){
       for(var i = 0; i < response.length; i++) {
        $(".results").append("<li><span class='key'> Repo Name: </span>" + "<span class='title'>" + response[i].name + "</span><br>" + "<span class='key'>Date Created: </span>" + moment(response[i].created_at).format("LLL") + "<br>" + "<span class='key'>Description: </span>" + response[i].description + "</li><br>");
      }
    });
      $.get('https://api.github.com/users/' + inputtedUser + '?access_token=' + apiKey).then(function(response){
         $(".userProfiles").html("<img src=' " + response.avatar_url + " '>" + "<br><br>Name: " + response.name + "<br><br>Location: " + response.location + "<br><br>Followers: " + response.followers + "<br><br>Total Repositories: " + response.public_repos);

     }).fail(function(error){
       console.log(error.responseJSON.message);
   });
  });
});
