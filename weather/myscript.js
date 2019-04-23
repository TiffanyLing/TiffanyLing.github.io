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


$(document).ready(function(){

/* HK */
    $.ajax({
        url: 'http://http://api.openweathermap.org/data/2.5/weather?id=1819730&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('p1').append('temp: ' + temp);
        $('p1').append('humidity: ' + humidity);
        $('p1').append('weathertext: ' + weathertext);
        $('p1').append('weatherdescription: ' + weatherdescription);
        $('p1').append('visibility: ' + visibility);

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 


/* NY */
    $.ajax({
        url: 'http://http://api.openweathermap.org/data/2.5/weather?id=5128638&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });   
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('p2').append('temp: ' + temp);
        $('p2').append('humidity: ' + humidity);
        $('p2').append('weathertext: ' + weathertext);
        $('p2').append('weatherdescription: ' + weatherdescription);
        $('p2').append('visibility: ' + visibility);

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 


/* Auckland */
    $.ajax({
        url: 'http://http://api.openweathermap.org/data/2.5/weather?id=2193732&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
               weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('p3').append('temp: ' + temp);
        $('p3').append('humidity: ' + humidity);
        $('p3').append('weathertext: ' + weathertext);
        $('p3').append('weatherdescription: ' + weatherdescription);
        $('p3').append('visibility: ' + visibility);

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 


/* Rio de Janeiro */
    $.ajax({
        url: 'http://http://api.openweathermap.org/data/2.5/weather?id=3451190&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            temp = results.main.temp;
            humidity = results.main.humidity;
            visibility = results.visibility;

            myWeatherInterpretation();

        }
    });
    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('p4').append('temp: ' + temp);
        $('p4').append('humidity: ' + humidity);
        $('p4').append('weathertext: ' + weathertext);
        $('p4').append('weatherdescription: ' + weatherdescription);
        $('p4').append('visibility: ' + visibility);

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});