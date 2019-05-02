//THESE ARE THE VARIABLES WE WILL USE
var visibility;
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var humidity; //Humidity, %



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
        $('.p1').append('Temperature: ' + temp + " " + '°C' + '</br>');
        $('.p1').append('Humidity: ' + humidity + " " + '%' + '</br>');
        $('.p1').append('Visibility: ' + visibility + " " + 'm' + '</br>');

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 
            if(temp<=0){
            $('#imgh').attr("src","image/1bc.png");
        }else if(temp<=10){
            $('#imgh').attr("src","image/1tc.png");    
        }else if(temp<=20){
            $('#imgh').attr("src","image/2yc.png");    
        }else if(temp<=30){
            $('#imgh').attr("src","image/3oc.png");    
        }else{
            $('#imgh').attr("src","image/4rc.png");    
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
            if(temp<=0){
            $('#imgn').attr("src","image/1bc.png");
        }else if(temp<=10){
            $('#imgn').attr("src","image/1tc.png");    
        }else if(temp<=20){
            $('#imgn').attr("src","image/2yc.png");    
        }else if(temp<=30){
            $('#imgn').attr("src","image/3oc.png");    
        }else{
            $('#imgn').attr("src","image/4rc.png");    
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
            if(temp<=0){
            $('#imga').attr("src","image/1bc.png");
        }else if(temp<=10){
            $('#imga').attr("src","image/1tc.png");    
        }else if(temp<=20){
            $('#imga').attr("src","image/2yc.png");    
        }else if(temp<=30){
            $('#imga').attr("src","image/3oc.png");    
        }else{
            $('#imga').attr("src","image/4rc.png");    
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

        if(temp<=0){
            $('#imgw').attr("src","image/1bc.png");
        }else if(temp<=10){
            $('#imgw').attr("src","image/1tc.png");    
        }else if(temp<=20){
            $('#imgw').attr("src","image/2yc.png");    
        }else if(temp<=30){
            $('#imgw').attr("src","image/3oc.png");    
        }else{
            $('#imgw').attr("src","image/4rc.png");    
        }

});

//images
    
                
        //v>10000是c v=<10000是m 
        //0=<h<30是1 30=<h<60是2 60=<h<85是3 85=<h=<100是4
        //t=<0是b 0<t<10是t 10=<t<20是y 20=<t<30是o t>=30是r
