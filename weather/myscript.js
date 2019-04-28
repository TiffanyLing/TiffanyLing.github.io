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
                console.log(temp);
            myWeatherInterpretation();
        }
    });
    //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS
    function myWeatherInterpretation(){
            
        //JUST SEEING IF THE VALUES COME THROUGH
        $('.p1').append('Temperature: ' + temp + " " + '°C' + '</br>');
        $('.p1').append('Humidity: ' + humidity + " " + '%' + '</br>');
        $('.p1').append('Visibility: ' + visibility + " " + 'm' + '</br>');

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
        $('.p2').append('Temperature: ' + temp + " " + '°C' + '</br>');
        $('.p2').append('Humidity: ' + humidity + " " + '%' + '</br>');
        $('.p2').append('Visibility: ' + visibility + " " + 'm' + '</br>');

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
        $('.p3').append('Temperature: ' + temp + " " + '°C' +'</br>');
        $('.p3').append('Humidity: ' + humidity + " " + '%' + '</br>');
        $('.p3').append('Visibility: ' + visibility + " " + 'm' + '</br>');

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
        $('.p4').append('Temperature: ' + temp + " " + '°C' + '</br>');
        $('.p4').append('Humidity: ' + humidity + " " + '%' + '</br>');
        $('.p4').append('Visibility: ' + visibility + " " + 'm' + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 
});

//images
    
        $(function(){ 
        var img = document.getElementById("img");
        var temp = results.data.main.temp;
        var humidity = results.main.humidity;
        var visibility = results.visibility;
                
        //v>10000是c v=<10000是m 
        //0=<h<30是1 30=<h<60是2 60=<h<85是3 85=<h=<100是4
        //t=<0是b 0<t<10是t 10=<t<20是y 20=<t<30是o t>=30是r
        var images = new Arrey();       
        images[0] = 'image/1bc.png';        
        images[1] = 'image/1tc.png';

        function changeImage (){

        if(temp>20){
            x=0;
        }
        if(temp<20){
            x=1;}


        }
    });
