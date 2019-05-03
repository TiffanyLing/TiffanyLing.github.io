//THESE ARE THE VARIABLES WE WILL USE
var visibility;
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var humidity; //Humidity, %



/* HK */
$(document).ready(function(){

    var hCheck = false, nCheck = false, aCheck = false, wCheck = false;
    var hkWeather, nyWeather, auWeather, waWeather;

    $(".HK").click(function() {
        hCheck = true;
        nCheck = false, aCheck = false, wCheck = false;
        console.log("hCheck true");
    });

    $(".NY").click(function() {
        nCheck = true;
        hCheck = false, aCheck = false, wCheck = false;
        console.log("nCheck true");
    });

    $(".A").click(function() {
        aCheck = true;
        hCheck = false, nCheck = false, wCheck = false;
        console.log("aCheck true");
    });

    $(".R").click(function() {
        wCheck = true;
        hCheck = false, aCheck = false, nCheck = false;
        console.log("wCheck true");
    });

    $(".pattern-container").click(function(e) {
        if(hCheck == true) {
            var offset = $(this).offset();
            var x = e.clientX - (offset.left + 75);
            var y = e.clientY - (offset.top + 40);
            


            $(".pattern-container").append('<div class=\"pattern-box hk\" style=\"left:'+x+'px; top:'+y+'px;\"></div>');

            console.log("box appended");
        }
        else if(nCheck == true) {
            var offset = $(this).offset();
            var x = e.clientX - (offset.left + 75);
            var y = e.clientY - (offset.top + 40);
            


            $(".pattern-container").append('<div class=\"pattern-box ny\" style=\"left:'+x+'px; top:'+y+'px;\"></div>');

            console.log("box appended");
        }

        else if(aCheck == true) {
            var offset = $(this).offset();
            var x = e.clientX - (offset.left + 75);
            var y = e.clientY - (offset.top + 40);
            


            $(".pattern-container").append('<div class=\"pattern-box a\" style=\"left:'+x+'px; top:'+y+'px;\"></div>');

            console.log("box appended");
        }

        else if(wCheck == true) {
            var offset = $(this).offset();
            var x = e.clientX - (offset.left + 75);
            var y = e.clientY - (offset.top + 40);
            
            if(waWeather == "raining"){
                $(".pattern-container").append('<div class=\"pattern-box 1bc\" style=\"left:'+x+'px; top:'+y+'px;\"></div>');
            }

            //$(".pattern-container").append('<div class=\"pattern-box r\" style=\"left:'+x+'px; top:'+y+'px;\"></div>');

            console.log("box appended");
        }
    });

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
            
        if(temp<=0 && humidity == 50 || visibility == 50){
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

        if(visibility>10000 && temp<=0 && humidity<=30 && humidity>=0){
            waWeather = "1bc";
            //$('#imgw').attr("src","image/1bc.png");
        }else if(visibility>10000 && temp>0 && temp<=10 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1tc.png");    
        }else if(visibility>10000 && temp>10 && temp<=20 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1yc.png");    
        }else if(visibility>10000 && temp>20 && temp<=30 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1oc.png");
        }else if(visibility>10000 && temp>30 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1rc.png"); 
        }else if(visibility>10000 && temp<=0 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2bc.png"); 
        }else if(visibility>10000 && temp>0 && temp<=10 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2tc.png");   
        }else if(visibility>10000 && temp>10 && temp<=20 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2yc.png"); 
        }else if(visibility>10000 && temp>20 && temp<=30 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2oc.png");
        }else if(visibility>10000 && temp>30 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2rc.png");
        }else if(visibility>10000 && temp<=0 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3bc.png");
        }else if(visibility>10000 && temp>0 && temp<=10 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3tc.png");
        }else if(visibility>10000 && temp>10 && temp<=20 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3yc.png");
        }else if(visibility>10000 && temp>20 && temp<=30 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3oc.png");
        }else if(visibility>10000 && temp>30 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3rc.png");
        }else if(visibility>10000 && temp<=0 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4bc.png");
        }else if(visibility>10000 && temp>0 && temp<=10 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4tc.png");
        }else if(visibility>10000 && temp>10 && temp<=20 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4yc.png");
        }else if(visibility>10000 && temp>20 && temp<=30 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4oc.png");
        }else if(visibility>10000 && temp>30 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4rc.png");
        }else if(visibility<=10000 && temp<=0 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1bm.png");
        }else if(visibility<=10000 && temp>0 && temp<=10 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1tm.png");    
        }else if(visibility<=10000 && temp>10 && temp<=20 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1ym.png");    
        }else if(visibility<=10000 && temp>20 && temp<=30 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1om.png");
        }else if(visibility<=10000 && temp>30 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","image/1rm.png"); 
        }else if(visibility<=10000 && temp<=0 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2bm.png"); 
        }else if(visibility<=10000 && temp>0 && temp<=10 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2tm.png");   
        }else if(visibility<=10000 && temp>10 && temp<=20 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2ym.png"); 
        }else if(visibility<=10000 && temp>20 && temp<=30 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2om.png");
        }else if(visibility<=10000 && temp>30 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","image/2rm.png");
        }else if(visibility<=10000 && temp<=0 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3bm.png");
        }else if(visibility<=10000 && temp>0 && temp<=10 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3tm.png");
        }else if(visibility<=10000 && temp>10 && temp<=20 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3ym.png");
        }else if(visibility<=10000 && temp>20 && temp<=30 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3om.png");
        }else if(visibility<=10000 && temp>30 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","image/3rm.png");
        }else if(visibility<=10000 && temp<=0 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4bm.png");
        }else if(visibility<=10000 && temp>0 && temp<=10 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4tm.png");
        }else if(visibility<=10000 && temp>10 && temp<=20 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4ym.png");
        }else if(visibility<=10000 && temp>20 && temp<=30 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4om.png");
        }else if(visibility<=10000 && temp>30 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","image/4rm.png");
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 


});

//images
    
                
        //v>10000是c v=<10000是m 
        //0=<h<30是1 30=<h<60是2 60=<h<85是3 85=<h=<100是4
        //t=<0是b 0<t<10是t 10=<t<20是y 20=<t<30是o t>=30是r
