$(".btn").on("click", function (event) {
console.log("hi");
  event.preventDefault();

  var city = $("#citysearch").val();

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=a24140e4ac55fb8c56b47c98d13d46a8"

  var today = new Date();

  var date = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();

  //AJAX Call
  $.ajax({
    url: queryURL,
    method: "GET"

  })


    .then(function (response) {
      console.log(queryURL);

      console.log(response);

      var newList = $("<li>");


      newList.text(city);
      newList.addClass("list-group-item");
      $("#history").prepend(newList);

      $("#cityView").text(response.name);
      $("#dateView").text(date);

      $("#temp").text("Temperature(F): " + Math.ceil(((response.main.temp * 9) / 5 - 459.67)));
      $("#humid").text("Humidity: " + ((response.main.humidity) + "%"));
      $("#wind").text("Wind Speed: " + ((response.wind.speed) + " MPH"));




      var lon = response.coord["lon"];
      var lat = response.coord["lat"];
      var uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=a24140e4ac55fb8c56b47c98d13d46a8" + lat + "&lon=" + lon;

      $.ajax({
        url: uvURL,
        method: "GET"
      })
     
       .then(function (response) {

        $("uvIndex").text("UV Index: " + response.value);

       });


      });
    })