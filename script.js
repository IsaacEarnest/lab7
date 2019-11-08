
$(document).ready(function() {
  var timesClicked = 0;

  $('#stoplight').click(function() {

    timesClicked++;
    $("#results").text("Total Funds: "+timesClicked);
  });

  $('#newPic').click(function() {
    if(timesClicked>=10){
      $.ajax({
       crossOrigin: true,
        dataType: "json",
        url: "http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true",
        success: function(results) {
          console.log(JSON.parse(results)[0]);
          $('#shibePic').attr("src",JSON.parse(results)[0]);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }
      });
      timesClicked=timesClicked-10;
      $("#results").text("Total Funds: "+timesClicked);

      $("#newPic").remove();
    }
  });
});
