//Stopwatch Functions Start
var time = 0; // 6000 seconds = 1 hour 40 minutes 10 seconds // 3590 = 59 minutes 50 seconds  
function countdown(){ //displays the time left
	if(resuming)
	{
		resuming = false;
		watchRun = setInterval(countdown , 1000);
	}
	if(startIsClicked){
	time--;
	}	
		if(time >= 3600){
			if(Math.floor(time/3600) < 10) { //if the hours hand is less than 10 
				if(Math.floor(time/60)%60 >= 10){ //if the minute hand is greater than 10 
					if(time%60 >= 10){ //if the seconds hand is greater than 10
						document.getElementById('stopwatch').innerHTML = "0" + Math.floor(time/3600) + ':' + Math.floor(time/60)%60 + ':' + time%60 ; 	
					}
					else{
						document.getElementById('stopwatch').innerHTML = "0" + Math.floor(time/3600) + ':' + Math.floor(time/60)%60 + ':' + "0" + time%60 ;
					}
				}
				else{ //if the minute hand is less than 10 
					if(time%60 >= 10){
						document.getElementById('stopwatch').innerHTML = "0" + Math.floor(time/3600) + ':' + '0' + Math.floor(time/60)%60 + ':' + time%60 ; 	
					}
					else{
						document.getElementById('stopwatch').innerHTML = "0" + Math.floor(time/3600) + ':' + '0' + Math.floor(time/60)%60 + ':' + "0" + time%60;
					}
				}
			}
			else{ //if the hours hand is greater than 10 
				if(Math.floor(time/60)%60 >= 10){ //if the minute hand is greater than 10 
					if(time%60 >= 10){ //if the seconds hand is greater than 10
						document.getElementById('stopwatch').innerHTML = Math.floor(time/3600) + ':' + Math.floor(time/60)%60 + ':' + time%60 ; 	
					}
					else{
						document.getElementById('stopwatch').innerHTML = Math.floor(time/3600) + ':' + Math.floor(time/60)%60 + ':' + "0" + time%60 ;
					}
				}
				else{ //if the minute hand is less than 10 
					if(time%60 >= 10){
						document.getElementById('stopwatch').innerHTML = Math.floor(time/3600) + ':' + '0' + Math.floor(time/60)%60 + ':' + time%60 ; 	
					}
					else{
						document.getElementById('stopwatch').innerHTML = Math.floor(time/3600) + ':' + '0' + Math.floor(time/60)%60 + ':' + "0" + time%60;
					}
				}
			}
	 	}
		if(time >= 60 && time < 3600){
			if(Math.floor(time/60) < 10 && time%60 < 10){
				document.getElementById('stopwatch').innerHTML = "00:0" + Math.floor(time/60) + ':' + "0" + time%60;
			}
			else if(Math.floor(time/60) < 10 && time%60 >= 10){
				document.getElementById('stopwatch').innerHTML = "00:0" + Math.floor(time/60) + ':'  + time%60;
			}
			else if(Math.floor(time/60) >= 10 && time%60 < 10){
				document.getElementById('stopwatch').innerHTML = "00:" + Math.floor(time/60) + ':' + "0" + time%60;
			}
			else if(Math.floor(time/60) >= 10 && time%60 >= 10){
				document.getElementById('stopwatch').innerHTML = "00:" + Math.floor(time/60) + ':' + time%60;
		}

		}
		if(time >= 10 && time < 60){
			document.getElementById('stopwatch').innerHTML = "00:" + "00:" + time;
		}
		else if(time < 10 && time < 60) {
			document.getElementById('stopwatch').innerHTML = "00:" + "00:" + "0" + time;
		}
	if(time == 0 && startIsClicked === true) //checks if the time is up -- it is at the bottom, because we want the watch to update to 0 before stopping completely
	{
		clearInterval(watchRun);
		window.alert("nice");
		startIsClicked = false;
	}
}
var intervalPoint = 0;
var interval;
var resuming = false;
var watchRun;
var buttonStartClicked = false; //checks if start has been clicked at least once
var startIsClicked = false;
var checkTime;

function startWatch(){ //Executes when you press "start" -- if time is already 0 it will pop up telling the user to set a time
	if(time != 0 && buttonStartClicked === false && resuming == false){
		countdown();
	buttonStartClicked = true;
	startIsClicked = true;
	watchRun = setInterval(countdown,1000);
	interval = setInterval(continuePoint, 1);
	}
	else if(resuming){ //if start is clicked after stop is clicked
		watchRun = setTimeout(countdown , 1000 - intervalPoint);
		startIsClicked = true;
	}
	else if(buttonStartClicked === false){ //time is 0 and user clicks start
		window.alert('Please set a time first! \nRegards, Danny');
	}
}

function continuePoint(){
	if(intervalPoint<1000)
	{
		intervalPoint++;
	}
	else{
		intervalPoint = 0;
	}
}

function stopTheWatch(){
	if(startIsClicked){
	clearInterval(watchRun);
	clearInterval(interval);
	resuming = true;
	startIsClicked = false;
	}
}

function reset(){
	resuming = false;
	startIsClicked = false;
	intervalPoint = 0;
	buttonStartClicked = false;
	time = 0;
	clearInterval(watchRun);
	clearInterval(interval);
	document.getElementById('stopwatch').innerHTML = "00:00:00";
}

function addSec(){
	time++;
	countdown();
}

function subSec(){
	if (time >= 1) {
	time--;
	countdown();
	}
	else{
		window.alert('There isn\'t enough to subtract from!');
	}
}

function addMin(){
	time += 60;
	countdown();
}

function subMin(){
	if(time >= 60){
	time -= 60;
	countdown();
	}
	else{
		window.alert('There isn\'t enough to subtract from!');
	}
}

function addHour(){
	time += 3600
	countdown();
}

function subHour(){
	if(time >= 3600){
	time -= 3600;
	countdown();
	}
	else{
		window.alert('There isn\'t enough to subtract from!');
	}
}