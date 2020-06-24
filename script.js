$("button").on("click", function(event){
event.preventDefault();

var searchInput = $("citysearch").val();

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + {cityName} + "&appid=a24140e4ac55fb8c56b47c98d13d46a8"

var today = new Date();

var date = 

$.ajax({
url: queryURL,
method: "GET"
})

.then(function(response){
console.log(queryURL);

console.log(response);

})



})