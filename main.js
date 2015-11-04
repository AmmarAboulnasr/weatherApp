'use strict';

var apiUrl = "http://api.wunderground.com/api/152cd73a11d1fe97/";

$(document).ready(init);

function init() {
	getWeatherFirstTime();
	$("#getWeather").click();

}

function getWeatherFirstTime() {
	var url = apiUrl + "geolookup/q/autoip.json";
	$.get(url)
	.done(function(data) {
		var city = data.location.city;
		var state = data.location.state;
		updateHeading(city, state);
		city = city.replace(" ", "_");
		url = apiUrl + "conditions/q/" + state + "/" + city + ".json";
		$.get(url)
		.done(function(data) {
			generateConditions(data.current_observation.temperature_string, data.current_observation.feelslike_string, data.current_observation.weather, data.current_observation.wind_mph, data.current_observation.wind_dir, data.current_observation.relative_humidity, data.current_observation.dewpoint_string, data.current_observation.pressure_in, data.current_observation.visibility_mi, data.current_observation.local_time_rfc822);
			
// data.current_observation.relative_humidity

		})
		.fail(function(error) {
			console.log(error);
		});
		

	})
	.fail(function(error) {
		console.log(error);
	});

}

function updateHeading(city, state) {
	$("#location").text(city + ", " + state);
}

function generateConditions(temperature, feelsLike, condition, windSpeed, windDir, humidity, dewPoint, pressure, visibility, localTime) {
	var $localTime = $("<div>");
	$localTime.addClass("box localTime col-xs-12");
	$localTime.text("Local Time & Date: " + localTime);
	$(".container").append($localTime);

	var $temperature = $("<div>");
	$temperature.addClass("box localTime col-xs-12");
	$temperature.text("Temperature: " + temperature);
	$(".container").append($temperature);

	var $feelsLike = $("<div>");
	$feelsLike.addClass("box localTime col-xs-12");
	$feelsLike.text("Feels Like: " + feelsLike);
	$(".container").append($feelsLike);

	var $condition = $("<div>");
	$condition.addClass("box localTime col-xs-12");
	$condition.text("Condition: " + condition);
	$(".container").append($condition);

	var $windSpeed = $("<div>");
	$windSpeed.addClass("box localTime col-xs-12");
	$windSpeed.text("Wind Speed: " + windSpeed);
	$(".container").append($windSpeed);

	var $windDir = $("<div>");
	$windDir.addClass("box localTime col-xs-12");
	$windDir.text("Wind Direction: " + windDir);
	$(".container").append($windDir);

	var $humidity = $("<div>");
	$humidity.addClass("box localTime col-xs-12");
	$humidity.text("Humidity: " + humidity);
	$(".container").append($humidity);

	var $dewPoint = $("<div>");
	$dewPoint.addClass("box localTime col-xs-12");
	$dewPoint.text("Dew Point: " + dewPoint);
	$(".container").append($dewPoint);

	var $pressure = $("<div>");
	$pressure.addClass("box localTime col-xs-12");
	$pressure.text("Pressure: " + pressure);
	$(".container").append($pressure);

	var $visibility = $("<div>");
	$visibility.addClass("box localTime col-xs-12");
	$visibility.text("Visibility: " + visibility);
	$(".container").append($visibility);



	// console.log(data.current_observation.relative_humidity);


}

// function displayError(error) {
// 	var $div = $("div");
// 	$div = addClass("errorMessage");
// 	$div.text(error);
// 	$(".container2").append($div);
// }