//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %


/* HK */
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=1819730&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();
        }
    });
    //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS
    function myWeatherInterpretation(){
            
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p1').append('temp: ' + temp + '</br>');
        $('.p1').append('humidity: ' + humidity + '</br>');
        $('.p1').append('visibility: ' + visibility + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 
});

/* NY */
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();
        }
    });
    //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS
    function myWeatherInterpretation(){
            
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p2').append('temp: ' + temp + '</br>');
        $('.p2').append('humidity: ' + humidity + '</br>');
        $('.p2').append('visibility: ' + visibility + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 
});

/* Auckland */
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=2193732&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();
        }
    });
    //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS
    function myWeatherInterpretation(){
            
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p3').append('temp: ' + temp + '</br>');
        $('.p3').append('humidity: ' + humidity + '</br>');
        $('.p3').append('visibility: ' + visibility + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 
});


/* Wādī Ḩalfā */
$(document).ready(function(){
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=364132&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();
        }
    });
    //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS
    function myWeatherInterpretation(){
            
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p4').append('temp: ' + temp + '</br>');
        $('.p4').append('humidity: ' + humidity + '</br>');
        $('.p4').append('visibility: ' + visibility + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 
});