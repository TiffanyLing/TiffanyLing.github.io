/* 2 */
alert("Welcome! Please view console on your browser.")

/* 3 */ /* Variable */
var name = "Yu Tong Tiffany Ling";
console.log(name);

var age = 20;
console.log(age);

var luckynumber = "32";
console.log(luckynumber);

var boolean = true;
console.log(boolean);

var combo = name + luckynumber;
console.log(combo);

/* 4 */ /* Calculation */
console.log(2 * 10);
console.log(100 / 5);
console.log(-50 + 70);
console.log(50 - 30);
console.log(5 * 4);

/* 5 */ /* Countries */
var countries = ["Egypt", "Netherland", "Greece", "Iceland", "Pueto Rico"];
console.log(countries[0]);
console.log(countries.length);

/* 6 */ /* var */
var time = new Date();
console.log("The current time is " + time);

/* 7 */
var currentHours = new Date().getHours();
if (currentHours == 11) {
	var msg = "It is 11 now."
}
if (currentHours != 11) {
	var msg = "It is not 11 yet."
}
console.log(msg);

/* 8 */
var number = name.length-1;
console.log(number);
if(number <= 9){
	var message = "My name is relatively short."
}
else if(number > 14){
	var message = "My name is relatively long."
}
else{ /* can i code "else if(9 < number <= 14)" in here? */
	var message = "My name is neither short nor long."
}
console.log(message);

/* 9 */ /* Function */
var newyork = 44.6;
var Casablanca =  64.4;
function temperatureConverter(valNum) {
  return (valNum-32)*(5/9)
}
console.log("The temperature in New York City is" + temperatureConverter(44.6) + " " + "°C" + "at 11 a.m.")
console.log("The temperature in Casablanca is" + temperatureConverter(64.4) + " " + "°C" + "at 4 p.m.")

/* 10 */ /* Loop */
for (var i = 0; i < 22; i ++) {
	document.write("Happy" + " " + i + " " +"year-old birthday" + "<br>");
}
$(document).ready(function(){
  for(var counter=0; counter<20; counter++){
    
      var postop = 200 + (counter * 10); 
      var posleft = 300 + (counter * 10); 
      
      var mydynamicbox = '<div style="position: absolute; top: ' + postop + 'px; left: ' + posleft + 'px; width: 20px; height: 20px; background-color: white;"></div>'
  
      $('body').append(mydynamicbox);
  }  
});

/* Extra Credit */
document.getElementById("demo").innerHTML = Math.random();






