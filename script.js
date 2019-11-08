
$(document).ready(function() {
console.log("loaded");
  var timesClicked = 0;

  $('#stoplight').click(function() {
console.log("clicked");
    timesClicked++;
    $("#results").text("Total Funds: "+timesClicked);
  });

  $('#newPic1').click(function() {

    if(timesClicked>=10){
      $.ajax({
       crossOrigin: true,
        dataType: "json",
        url: "http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true",
        success: function(results) {
          timesClicked=timesClicked-10;
          $("#results").text("Total Funds: "+timesClicked);
          $("#newPic1").attr("disabled",true);
          console.log(JSON.parse(results)[0]);
          $("#shibePic").attr("src",JSON.parse(results)[0]);
          autoFund(1000);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }

      });

    }
  });
  $('#newPic2').click(function() {

    if(timesClicked>=15){
      $.ajax({
       crossOrigin: true,
        dataType: "json",
        url: "http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true",
        success: function(results) {
          timesClicked=timesClicked-15;
          $("#results").text("Total Funds: "+timesClicked);
          $("#newPic1").attr("disabled",true);
          console.log(JSON.parse(results)[0]);
          $("#shibePic2").attr("src",JSON.parse(results)[1]);
          autoFund(1000);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }

      });

    }
  });
  $('#newPic3').click(function() {

    if(timesClicked>=50){
      $.ajax({
       crossOrigin: true,
        dataType: "json",
        url: "http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true",
        success: function(results) {
          timesClicked=timesClicked-15;
          $("#results").text("Total Funds: "+timesClicked);
          $("#newPic1").attr("disabled",true);
          console.log(JSON.parse(results)[0]);
          $("#shibePic3").attr("src",JSON.parse(results)[2]);
          autoFund(0);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }

      });

    }
  });
  $('#newPic4').click(function() {

    if(timesClicked>=10000){
      $.ajax({
       crossOrigin: true,
        dataType: "json",
        url: "http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true",
        success: function(results) {
          timesClicked=timesClicked-10000;
          $("#results").text("Total Funds: "+timesClicked);
          $("#newPic1").attr("disabled",true);
          console.log(JSON.parse(results)[0]);
          $("#shibePic4").attr("src",JSON.parse(results)[3]);
          autoFund(0);
        },
        error: function(xhr,status,error) {
          console.log(error);
        }

      });

    }
  });
  function autoFund(interval){
      timesClicked++;
      $("#results").text("Total Funds: "+timesClicked);
      setTimeout(autoFund(), interval);
  }
});
