// user guide information
alert("use the keyboard keys to activate the drum kit corresponding to the image displayed. Have fun while at it!");

// detecting mouseclick events
document.querySelectorAll(".drum")[0].addEventListener("click", function(){
			
	var bass_drum = new Audio("audio/bass_drum.mp3");
	bass_drum.play();

});


document.querySelectorAll(".drum")[1].addEventListener("click", function(){
	
	var snare_drum = new Audio("audio/snare_drum.mp3");
	snare_drum.play();


});

document.querySelectorAll(".drum")[2].addEventListener("click", function(){
	
	var hi_hat = new Audio("audio/hi_hat.mp3");
	hi_hat.play();


});

document.querySelectorAll(".drum")[3].addEventListener("click", function(){
	
	var cymbal2 = new Audio("audio/cymbal2.mp3");
	cymbal2.play();


});

document.querySelectorAll(".drum")[4].addEventListener("click", function(){
	
	var tom1 = new Audio("audio/floor_tom1.mp3");
	tom1.play();
		

});

document.querySelectorAll(".drum")[5].addEventListener("click", function(){
	
	var tom2 = new Audio("audio/medium_tom1.mp3");
	tom2.play();


});

document.querySelectorAll(".drum")[6].addEventListener("click", function(){
	
var floor_tom1 = new Audio("audio/medium_tom3.mp3");
floor_tom1.play();	

});

document.querySelectorAll(".drum")[7].addEventListener("click", function(){
	
	var cymbal1 = new Audio("audio/cymbal1.mp3");
	cymbal1.play();


});










//detecting keyboard-press events

document.addEventListener("keypress", function(event){

	makeSound(event.key);

	buttonAnimation(event.key);

});


function makeSound(key){

	if (key === "w") {
		var bass_drum = new Audio("audio/bass_drum.mp3");
		bass_drum.play(); 
	
	} else if (key === "a") {
		var snare_drum = new Audio("audio/snare_drum.mp3");
		snare_drum.play();	
		}
	
	  else if (key === "s") {
		var hi_hat = new Audio("audio/hi_hat.mp3");
		hi_hat.play(); 
		}
	
	  else if (key === "d") {
		var cymbal2 = new Audio("audio/cymbal2.mp3");
		cymbal2.play();
	  }
	
	  else if (key === "f") {
		var tom1 = new Audio("audio/floor_tom1.mp3");
		tom1.play();  
	  }
	
	  else if (key === "j") {
		var tom2 = new Audio("audio/medium_tom1.mp3");
		tom2.play();
	  }
	
	  else if (key === "k") {
		var floor_tom1 = new Audio("audio/medium_tom3.mp3");
		floor_tom1.play();  
	  }
	
	  else if (key === "l") {
		var cymbal1 = new Audio("audio/cymbal1.mp3");
		cymbal1.play();  
	  }
	
	  else {
		  console.log(key);
	  }
	

}


//button animation event


function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);

 activeButton.classList.add("pressed");

 setTimeout(function (){
	 activeButton.classList.remove("pressed");
 }, 100);

}








