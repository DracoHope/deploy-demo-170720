// Using the <input type="color"> for the color picker
// Using the background-image: linear-gradient(direction, color-stop1, color-stop2, ...); for the gradient background

// Recap : Javascript can read from the DOM and react to it. 
//         Javascript can can tell DOM to change the Web Page

// The objective of this Tutorial is as follow:
// 1. The user will select 2 color for the graident background from the the color picker
// 2. The Javascript will read the value of the 2 color picker
// 3. User can also enter a custom text in the <h3> Tag
// 4. The value of color and the entered text will be display in the Web Page

var css = document.querySelector("h3");// Since there is only 1 <h3> Tag so no need to create a class for it

var color1 = document.querySelector(".color1"); //Note for this case is selecting for a class so need a dot sign "." then class name
var color2 = document.querySelector(".color2"); //Note for this case is selecting for a class so need a dot sign "." then class name

// Need to change the background color of the web page according to the color picked by the user
// The background is under the <body> Tag, can use the developer tool  --> inspect function
// 
// body {
//     font: 'Raleway', sans-serif;
//     color: rgba(0,0,0,.5);
//     text-align: center;
//     text-transform: uppercase;
//     letter-spacing: .5em;
//     top: 15%;
//     background: linear-gradient(to right, red , yellow);
// }
var body = document.getElementById("gradient");
//Checking the result
// color: rgba(0,0,0,.5);
// text-align: center;
// text-transform: uppercase;
// letter-spacing: .5em;
// top: 15%;
// background: linear-gradient(to right, red , yellow);

// <body id="gradient">
// 	<h1>Ming Backgroung Generator</h1>

// 	<!-- Color Picker : using  <input type="color"> where the "value" is the default color value -->
// 	<input class="color1" type="color" name="color1" value="#00ff00">
// 	<!-- Need to Color Picker because from one color to the other color for gradient color background -->
// 	<input class="color2" type="color" name="color2" value="#ff0000">

// 	<h2>Ming Current CSS Background</h2>
// 	<h3></h3>
// 	<script type="text/javascript" src="script.js"></script> 

// </body>


console.log(body);
console.log(css);
console.log(color1);
console.log(color2);

// What type of event to be use for the color picker?
// MOuse click and keypress does not apply for color picker!!!
// For color picker we can use the "input" event to read the value of picked color
// The "input" event will detect any picked color changes

//We can actually change the background color directly by the CSS command as follow:
//body.style.background = "pink";

function setGradient(){
	console.log("Color 1 value: ", color1.value + "  Color 2 value: " , color2.value);
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	// This will add a text at the background of the web page
	css.textContent = body.style.background + ";";
}


// ************************ Important Note: ************************
// There is diferent betwwen color1.addEventListener("input", setGradient()); and
// color1.addEventListener("input", setGradient);
// color1.addEventListener("input", setGradient()); --> This mean whenever the input event is created the setGraient() method 
// will be executed which mean the response is on th fly real time whenever the pointer is in the color picker
// But
// color1.addEventListener("input", setGradient); --> This mean the setGraient() method will only execute when
// the input event is executed. This mean the background will only be set only when 
// user have finalize the color value



// Important Note: 
// In Javascript, the syntax to call and excute a function is "functionName();" 
// color1.addEventListener("input", setGradient()); // notice the function in the parameter is "setGradient()"
// color2.addEventListener("input", setGradient()); // notice the function in the parameter is "setGradient()"
// The above command mean the setGradient() will be execute even without the event "input" event
// The objective of the addEventListener is to trigger a action when a specific event is trigger therefore the above syntax is not fully correct

// This is the correct syntax to execute the "setGradient" function when the "input" event is been trigger
// The addEventListener will automatically execute the parameter "setGradient" whenever the "input" Event is detected
// Refer to Lecture 134 ---> 13.40 min
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// *******************************************************************

// color1.addEventListener("input", function(){
// 	console.log("This is Color 1 value: ", color1.value);
// 	setGradient();
// });

// color2.addEventListener("input", function(){
// 	console.log("This is Color 2 value: ", color2.value);
// 	setGradient();
// });


// color1.addEventListener("input", function(){
// 	console.log("This is Color 1 value: ", color1.value);
// 	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// });

// color2.addEventListener("input", function(){
// 	console.log("This is Color 2 value: ", color2.value);
// 	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
// });

