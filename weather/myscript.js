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
    function changeImage (){
        var img = document.getElementById("img");
        var t = data.main.temp;
        var h = data.main.humidity;
        var v = data.main.visibility;
        img.src = images[x];
        x++;

        if(v>10000 && 0=<h && h<30 && t=<0){//ok
            x=0;//ok
        }
        if(v>10000 && 0=<h && h<30 && 0<t && t<10){//ok
            x=1;//ok
        }
        if(v>10000 && 0=<h && h<30 && 10=<t && t<20){//ok
            x=2;//ok
        }
        if(v>10000 && 0=<h && h<30 && 20=<t && t<30){//ok
            x=3;//ok
        }
        if(v>10000 && 0=<h && h<30 && t>=30){//ok
            x=4;//ok
        }
        if(v>10000 && 30=<h && h<60 && t=<0){//ok
            x=5;//ok
        }
        if(v>10000 && 30=<h && h<60 && 0<t && t<10){//ok
            x=6;//ok
        }
        if(v>10000 && 30=<h && h<60 && 10=<t && t<20){//ok
            x=7;//ok
        }
        if(v>10000 && 30=<h && h<60 && 20=<t && t<30){//ok
            x=8;//ok
        }
        if(v>10000 && 30=<h && h<60 && t>=30){//ok
            x=9;//ok
        }
        if(v>10000 && 60=<h && h<85 &&  t=<0){//ok
            x=10;//ok
        }
        if(v>10000 && 60=<h && h<85 &&  0<t && t<10){//ok
            x=11;//ok
        
        if(v>10000 && 60=<h && h<85 &&  10=<t && t<20){//ok
            x=12;//ok
        }
        if(v>10000 && 60=<h && h<85 &&  20=<t && t<30){//ok
            x=13;//ok
        }
        if(v>10000 && 60=<h && h<85 &&  t>=30){//ok
            x=14;//ok
        }
        if(v>10000 && 85=<h && h=<100 &&  t=<0){
            x=15;
        }
        if(v>10000 && 85=<h && h=<100 && 0<t && t<10){
            x=16;
        }
        if(v>10000 && 85=<h && h=<100 && 10=<t && t<20){
            x=17;
        }
        if(v>10000 && 85=<h && h=<100 && 20=<t && t<30){
            x=18;
        }
        if(v>10000 && 85=<h && h=<100 && t>=30){
            x=19;
        }
        if(v=<10000 && 0=<h && h<30 && t=<0){//ok
            x=20;//ok
        }
        if( v=<10000 && 0=<h && h<30 && 0<t && t<10){//ok
            x=21;//ok
        }
        if( v=<10000 && 0=<h && h<30 && 10=<t && t<20){//ok
            x=22;//ok
        }
        if( v=<10000 && 0=<h && h<30 && 20=<t && t<30){//ok
            x=23;//ok
        }
        if( v=<10000 && 0=<h && h<30 && t>=30){//ok
            x=24;//ok
        }
        if( v=<10000 && 30=<h && h<60 && t=<0){//ok
            x=25;//ok
        }
        if( v=<10000 && 30=<h && h<60 && 0<t && t<10){//ok
            x=26;//ok
        }
        if( v=<10000 && 30=<h && h<60 && 10=<t && t<20){//ok
            x=27;//ok
        }
        if( v=<10000 && 30=<h && h<60 && 20=<t && t<30{//ok
            x=28;//ok
        }
        if( v=<10000 && 30=<h && h<60 && t>=30){//ok
            x=29;//ok
        }
        if( v=<10000 && 60=<h && h<85 && t=<0){//ok
            x=30;//ok
        }
        if( v=<10000 && 60=<h && h<85 && 0<t && t<10){//ok
            x=31;//ok
        }
        if( v=<10000 && 60=<h && h<85 && 10=<t && t<20){//ok
            x=32;//ok
        }
        if( v=<10000 && 60=<h && h<85 && 20=<t && t<30){//ok
            x=33;//ok
        }
        if( v=<10000 && 60=<h && h<85 && t>=30){//ok
            x=34;//ok
        }
        if( v=<10000 && 85=<h && h=<100 && t=<0){
            x=35;
        }
        if( v=<10000 && 85=<h && h=<100 && 0<t && t<10){
            x=36;
        }
        if( v=<10000 && 85=<h && h=<100 && 10=<t && t<20){
            x=37;
        }
        if( v=<10000 && 85=<h && h=<100 && 20=<t && t<30){
            x=38;
        }
        if( v=<10000 && 85=<h && h=<100 && t>=30){
            x=39
        }

        //v>10000是c v=<10000是m 
        //0=<h<30是1 30=<h<60是2 60=<h<85是3 85=<h=<100是4
        //t=<0是b 0<t<10是t 10=<t<20是y 20=<t<30是o t>=30是r

        var images = [], x =0;
        images[3] = 'image/1oc.png';
        images[23] = 'image/1om.png';
        images[4] = 'image/1rc.png';
        images[24] = 'image/1rm.png';
        images[2] = 'image/1yc.png';
        images[22] = 'image/1ym.png';
        images[1] = 'image/1tc.png';
        images[21] = 'image/1tm.png';
        images[0] = 'image/1bc.png';
        images[20] = 'image/1bm.png';
        images[8] = 'image/2oc.png';
        images[28] = 'image/2om.png';
        images[9] = 'image/2rc.png';
        images[29] = 'image/2rm.png';
        images[7] = 'image/2yc.png';
        images[27] = 'image/2ym.png';
        images[6] = 'image/2tc.png';
        images[26] = 'image/2tm.png';
        images[5] = 'image/2bc.png';
        images[25] = 'image/2bm.png';
        images[13] = 'image/3oc.png';
        images[33] = 'image/3om.png';
        images[14] = 'image/3rc.png';
        images[34] = 'image/3rm.png';
        images[12] = 'image/3yc.png';
        images[32] = 'image/3ym.png';
        images[11] = 'image/3tc.png';
        images[31] = 'image/3tm.png';
        images[10] = 'image/3bc.png';
        images[30] = 'image/3bm.png';
        images[18] = 'image/4oc.png';
        images[38] = 'image/4om.png';
        images[19] = 'image/4rc.png';
        images[39] = 'image/4rm.png';
        images[17] = 'image/4yc.png';
        images[37] = 'image/4ym.png';
        images[16] = 'image/4tc.png';
        images[36] = 'image/4tm.png';
        images[14] = 'image/4bc.png';
        images[34] = 'image/4bm.png';

        }
    }















