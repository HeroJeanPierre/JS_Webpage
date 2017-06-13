/** This is a simple program that visualizes the 
first problem in project euler. Green is for numbers
divisible by 5 or 3, red is for numbers not divisible.

Author: Julien Jean-Pierre
**/

var numbers = [];
var colors = [];
var current = 0;

function setup() {
    createCanvas(1900, 800);
   
    for(var i = 0; i < 1000; i++){
	numbers.push(i + 1)	
	// Set color to black to start
	colors.push([0,0,0])
    }    
}

function draw() {
    background(0);
    number = 0
    if(isDivis(current)){
	colors[current] = [0, 255, 0];
    }else{
	colors[current] = [255, 0, 0];
    }

    console.log(colors[current])
    for(var j = 0; j < height; j += height/20){
        for(var i = 0; i < width; i += width/50){
            fill(colors[number], 50);
            ellipse((10 + i*.99) + 10, (10 + j) + 5, 20 + getWidth(number), 20);
	    fill(255);
            text(numbers[number],  10 + i*.99, 20 + j);
            number++;
        }
    }
    current++;
}

function getWidth(number){
    if(number < 10){
	return 0;
    }else if( number < 100){
	return 5;
    }else if(number < 1000){
	return 11;
    }else{
	return 14;
    }
}

function isDivis(number){
    if(number % 3 == 0 || number % 5 == 0){
	return true;
    }else{
	return false;
    }
}
