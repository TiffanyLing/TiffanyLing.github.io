//THESE ARE THE VARIABLES WE WILL USE
var visibility;
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var humidity; //Humidity, %




$(document).ready(function(){

    var hCheck = false, nCheck = false, aCheck = false, wCheck = false;
    var hkWeather, nyWeather, auWeather, waWeather;

    // tutor add
    // $(".text1").hover(function(){
    //     $(".tooltiptext").css("visibility","visible");
    //     }, function(){
    //         $(".tooltiptext").css("visibility","hidden");
    //         // console.log("here");
    // });
    // $(".text2").hover(function(){
    //     $(".tooltiptext2").css("visibility","visible");
    //     }, function(){
    //         $(".tooltiptext2").css("visibility","hidden");
    //         console.log("here2");
    // });

    // $('.text2').on("hover", ".tooltiptext2", function() {
    //     $(this).css("visibility", "visible");
    // }, function() {
    //     $(this).css("visibility", "hidden");
    // });

    // $(".text3").hover(function(){
    //     $(".tooltiptext3").css("visibility","visible");
    //     }, function(){
    //         $(".tooltiptext3").css("visibility","hidden");
    //         // console.log("here2");
    // });
    // $(".text4").hover(function(){
    //     $(".tooltiptext4").css("visibility","visible");
    //     }, function(){
    //         $(".tooltiptext4").css("visibility","hidden");
    //         // console.log("here2");
    // });

    $(".hongkong").click(function() {
        hCheck = true;
        nCheck = false, aCheck = false, wCheck = false;
        console.log("hCheck true");
    });

    $(".newyork").click(function() {
        nCheck = true;
        hCheck = false, aCheck = false, wCheck = false;
        console.log("nCheck true");
    });

    $(".auckland").click(function() {
        aCheck = true;
        hCheck = false, nCheck = false, wCheck = false;
        console.log("aCheck true");
    });

    $(".wadihalfa").click(function() {
        wCheck = true;
        hCheck = false, aCheck = false, nCheck = false;
        console.log("wCheck true");
    });

    $(".pattern-container").click(function(e) {

        console.log("container clicked");

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
                        
            $(".pattern-container").append('<div class=\"pattern-box r\" style=\"left:'+x+'px; top:'+y+'px;\"></div>');

            //$(".pattern-container").append('<div class=\"pattern-box r\" style=\"left:'+x+'px; top:'+y+'px;\"></div>');

            console.log("box appended");
        }
    });

/* HK */
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=1819730&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
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
        // $('.p1').append('Temperature: ' + temp + " " + '°C' + '</br>');
        // $('.p1').append('Humidity: ' + humidity + " " + '%' + '</br>');
        // $('.p1').append('Visibility: ' + visibility + " " + 'm' + '</br>');

        $('.hongkong span').attr('data-balloon', 'Temperature: ' + temp + " " + '°C \n' + ' Humidity: ' + humidity + "" + '% ' + ' Visibility: ' + visibility + " " + 'm' + '');
            
        if(visibility>10000 && temp<=0 && humidity<=30 && humidity>=0){
            waWeather = "1b";
            //$('#imgw').attr("src","image/1bc.png");
        }else if(temp>0 && temp<=10 && humidity<=30 && humidity>=0){
            $('#imgh').attr("src","gif/1t.gif");    
        }else if(temp>10 && temp<=20 && humidity<=30 && humidity>=0){
            $('#imgh').attr("src","gif/1y.gif");    
        }else if(temp>20 && temp<=30 && humidity<=30 && humidity>=0){
            $('#imgh').attr("src","gif/1o.gif");
        }else if(temp>30 && humidity<=30 && humidity>=0){
            $('#imgh').attr("src","gif/1r.gif"); 
        }else if(temp<=0 && humidity<=60 && humidity>30){
            $('#imgh').attr("src","gif/2b.gif"); 
        }else if(temp>0 && temp<=10 && humidity<=60 && humidity>30){
            $('#imgh').attr("src","gif/2t.gif");   
        }else if(temp>10 && temp<=20 && humidity<=60 && humidity>30){
            $('#imgh').attr("src","gif/2y.gif"); 
        }else if(temp>20 && temp<=30 && humidity<=60 && humidity>30){
            $('#imgh').attr("src","gif/2o.gif");
        }else if(temp>30 && humidity<=60 && humidity>30){
            $('#imgh').attr("src","gif/2r.gif");
        }else if(temp<=0 && humidity<=85 && humidity>60){
            $('#imgh').attr("src","gif/3b.gif");
        }else if(temp>0 && temp<=10 && humidity<=85 && humidity>60){
            $('#imgh').attr("src","gif/3t.gif");
        }else if(temp>10 && temp<=20 && humidity<=85 && humidity>60){
            $('#imgh').attr("src","gif/3y.gif");
        }else if(temp>20 && temp<=30 && humidity<=85 && humidity>60){
            $('#imgh').attr("src","gif/3o.gif");
        }else if(temp>30 && humidity<=85 && humidity>60){
            $('#imgh').attr("src","gif/3r.gif");
        }else if(temp<=0 && humidity<=100 && humidity>85){
            $('#imgh').attr("src","gif/4b.gif");
        }else if(temp>0 && temp<=10 && humidity<=100 && humidity>85){
            $('#imgh').attr("src","gif/4t.gif");
        }else if(temp>10 && temp<=20 && humidity<=100 && humidity>85){
            $('#imgh').attr("src","gif/4y.gif");
        }else if(temp>20 && temp<=30 && humidity<=100 && humidity>85){
            $('#imgh').attr("src","gif/4o.gif");
        }else if(temp>30 && humidity<=100 && humidity>85){
            $('#imgh').attr("src","gif/4r.gif");
        }
        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 



});

/* NY */
$(document).ready(function(){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
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
        // $('.p2').append('Temperature: ' + temp + " " + '°C' + '</br>');
        // $('.p2').append('Humidity: ' + humidity + " " + '%' + '</br>');
        // $('.p2').append('Visibility: ' + visibility + " " + 'm' + '</br>');

        $('.newyork span').attr('data-balloon', 'Temperature: ' + temp + " " + '°C \n' + ' Humidity: ' + humidity + "" + '% ' + ' Visibility: ' + visibility + " " + 'm' + '');
            
        if(visibility>10000 && temp<=0 && humidity<=30 && humidity>=0){
            waWeather = "1bc";
            //$('#imgw').attr("src","image/1bc.png");
        }else if(temp>0 && temp<=10 && humidity<=30 && humidity>=0){
            $('#imgn').attr("src","gif/1t.gif");    
        }else if(temp>10 && temp<=20 && humidity<=30 && humidity>=0){
            $('#imgn').attr("src","gif/1y.gif");    
        }else if(temp>20 && temp<=30 && humidity<=30 && humidity>=0){
            $('#imgn').attr("src","gif/1o.gif");
        }else if(temp>30 && humidity<=30 && humidity>=0){
            $('#imgn').attr("src","gif/1r.gif"); 
        }else if(temp<=0 && humidity<=60 && humidity>30){
            $('#imgn').attr("src","gif/2b.gif"); 
        }else if(temp>0 && temp<=10 && humidity<=60 && humidity>30){
            $('#imgn').attr("src","gif/2t.gif");   
        }else if(temp>10 && temp<=20 && humidity<=60 && humidity>30){
            $('#imgn').attr("src","gif/2y.gif"); 
        }else if(temp>20 && temp<=30 && humidity<=60 && humidity>30){
            $('#imgn').attr("src","gif/2o.gif");
        }else if(temp>30 && humidity<=60 && humidity>30){
            $('#imgn').attr("src","gif/2r.gif");
        }else if(temp<=0 && humidity<=85 && humidity>60){
            $('#imgn').attr("src","gif/3b.gif");
        }else if(temp>0 && temp<=10 && humidity<=85 && humidity>60){
            $('#imgn').attr("src","gif/3t.gif");
        }else if(temp>10 && temp<=20 && humidity<=85 && humidity>60){
            $('#imgn').attr("src","gif/3y.gif");
        }else if(temp>20 && temp<=30 && humidity<=85 && humidity>60){
            $('#imgn').attr("src","gif/3o.gif");
        }else if(temp>30 && humidity<=85 && humidity>60){
            $('#imgn').attr("src","gif/3r.gif");
        }else if(temp<=0 && humidity<=100 && humidity>85){
            $('#imgn').attr("src","gif/4b.gif");
        }else if(temp>0 && temp<=10 && humidity<=100 && humidity>85){
            $('#imgn').attr("src","gif/4t.gif");
        }else if(temp>10 && temp<=20 && humidity<=100 && humidity>85){
            $('#imgn').attr("src","gif/4y.gif");
        }else if(temp>20 && temp<=30 && humidity<=100 && humidity>85){
            $('#imgn').attr("src","gif/4o.gif");
        }else if(temp>30 && humidity<=100 && humidity>85){
            $('#imgn').attr("src","gif/4r.gif");
        }
        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 

});

/* Auckland */
$(document).ready(function(){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=2193732&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
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
        // $('.p3').append('Temperature: ' + temp + " " + '°C' +'</br>');
        // $('.p3').append('Humidity: ' + humidity + " " + '%' + '</br>');
        // $('.p3').append('Visibility: ' + visibility + " " + 'm' + '</br>');

        $('.auckland span').attr('data-balloon', 'Temperature: ' + temp + " " + '°C \n' + ' Humidity: ' + humidity + "" + '% ' + ' Visibility: ' + visibility + " " + 'm' + '');

        if(visibility>10000 && temp<=0 && humidity<=30 && humidity>=0){
            waWeather = "1bc";
            //$('#imgw').attr("src","image/1bc.png");
        }else if(temp>0 && temp<=10 && humidity<=30 && humidity>=0){
            $('#imga').attr("src","gif/1t.gif");    
        }else if(temp>10 && temp<=20 && humidity<=30 && humidity>=0){
            $('#imga').attr("src","gif/1y.gif");    
        }else if(temp>20 && temp<=30 && humidity<=30 && humidity>=0){
            $('#imga').attr("src","gif/1o.gif");
        }else if(temp>30 && humidity<=30 && humidity>=0){
            $('#imga').attr("src","gif/1r.gif"); 
        }else if(temp<=0 && humidity<=60 && humidity>30){
            $('#imga').attr("src","gif/2b.gif"); 
        }else if(temp>0 && temp<=10 && humidity<=60 && humidity>30){
            $('#imga').attr("src","gif/2t.gif");   
        }else if(temp>10 && temp<=20 && humidity<=60 && humidity>30){
            $('#imga').attr("src","gif/2y.gif"); 
        }else if(temp>20 && temp<=30 && humidity<=60 && humidity>30){
            $('#imga').attr("src","gif/2o.gif");
        }else if(temp>30 && humidity<=60 && humidity>30){
            $('#imga').attr("src","gif/2r.gif");
        }else if(temp<=0 && humidity<=85 && humidity>60){
            $('#imga').attr("src","gif/3b.gif");
        }else if(temp>0 && temp<=10 && humidity<=85 && humidity>60){
            $('#imga').attr("src","gif/3t.gif");
        }else if(temp>10 && temp<=20 && humidity<=85 && humidity>60){
            $('#imga').attr("src","gif/3y.gif");
        }else if(temp>20 && temp<=30 && humidity<=85 && humidity>60){
            $('#imga').attr("src","gif/3o.gif");
        }else if(temp>30 && humidity<=85 && humidity>60){
            $('#imga').attr("src","gif/3r.gif");
        }else if(temp<=0 && humidity<=100 && humidity>85){
            $('#imga').attr("src","gif/4b.gif");
        }else if(temp>0 && temp<=10 && humidity<=100 && humidity>85){
            $('#imga').attr("src","gif/4t.gif");
        }else if(temp>10 && temp<=20 && humidity<=100 && humidity>85){
            $('#imga').attr("src","gif/4y.gif");
        }else if(temp>20 && temp<=30 && humidity<=100 && humidity>85){
            $('#imga').attr("src","gif/4o.gif");
        }else if(temp>30 && humidity<=100 && humidity>85){
            $('#imga').attr("src","gif/4r.gif");
        }
        //END OF MYWEATHERINTERPRETATION FUNCTION
        } 
            
});


/* Wādī Ḩalfā */
$(document).ready(function(){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?id=364132&units=metric&APPID=adb5f4376eebe744a35c9034c0ee2764', //CHANGE THE URL TO YOUR API QUERY
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
        // $('.p4').append('Temperature: ' + temp + " " + '°C' + '</br>');
        // $('.p4').append('Humidity: ' + humidity + " " + '%' + '</br>');
        // $('.p4').append('Visibility: ' + visibility + " " + 'm' + '</br>');

        $('.wadihalfa span').attr('data-balloon', 'Temperature: ' + temp + " " + '°C \n' + ' Humidity: ' + humidity + "" + '% ' + ' Visibility: ' + visibility + " " + 'm' + '');

        if(visibility>10000 && temp<=0 && humidity<=30 && humidity>=0){
            waWeather = "1bc";
            //$('#imgw').attr("src","image/1bc.png");
        }else if(temp>0 && temp<=10 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","gif/1t.gif");    
        }else if(temp>10 && temp<=20 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","gif/1y.gif");    
        }else if(temp>20 && temp<=30 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","gif/1o.gif");
        }else if(temp>30 && humidity<=30 && humidity>=0){
            $('#imgw').attr("src","gif/1r.gif"); 
        }else if(temp<=0 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","gif/2b.gif"); 
        }else if(temp>0 && temp<=10 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","gif/2t.gif");   
        }else if(temp>10 && temp<=20 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","gif/2y.gif"); 
        }else if(temp>20 && temp<=30 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","gif/2o.gif");
        }else if(temp>30 && humidity<=60 && humidity>30){
            $('#imgw').attr("src","gif/2r.gif");
        }else if(temp<=0 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","gif/3b.gif");
        }else if(temp>0 && temp<=10 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","gif/3t.gif");
        }else if(temp>10 && temp<=20 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","gif/3y.gif");
        }else if(temp>20 && temp<=30 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","gif/3o.gif");
        }else if(temp>30 && humidity<=85 && humidity>60){
            $('#imgw').attr("src","gif/3r.gif");
        }else if(temp<=0 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","gif/4b.gif");
        }else if(temp>0 && temp<=10 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","gif/4t.gif");
        }else if(temp>10 && temp<=20 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","gif/4y.gif");
        }else if(temp>20 && temp<=30 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","gif/4o.gif");
        }else if(temp>30 && humidity<=100 && humidity>85){
            $('#imgw').attr("src","gif/4r.gif");
        }

        //END OF MYWEATHERINTERPRETATION FUNCTION
    } 


});

// $(document).ready(function(){
//     $(".textn").hover(function(){
//         console.log("here");
//     });
// });


//images
    
                
        //v>10000是c v=<10000是m 
        //0=<h<30是1 30=<h<60是2 60=<h<85是3 85=<h=<100是4
        //t=<0是b 0<t<10是t 10=<t<20是y 20=<t<30是o t>=30是r
