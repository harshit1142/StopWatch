
var timerRunning=false;
var seconds=0;
var minutes=0;
var hours=0;
var timerObj=document.getElementsByClassName("heading");
var start=document.getElementById("start");
var reset=document.getElementById("Reset");
var intervalId=null;

reset.addEventListener("click",()=>{
       console.log("reset clicked");
       timerRunning=false;
       timerObj[0].innerHTML="00:00:00";
       start.textContent="Start";
       clearInterval(intervalId);
       seconds=0;
       minutes=0;
       hours=0;
})
start.addEventListener("click", ()=>{
    console.log("start button clicked");
    if(timerRunning)
    {
        start.textContent="Start";
        timerRunning=false;
        clearInterval(intervalId);
       
    }
    else{
        start.textContent="Stop";
        timerRunning=true;
        intervalId=setInterval(function(){
           displayTimer();
            timerObj[0].textContent=hours+":"+minutes+":"+ seconds;
            console.log(seconds);
        },1000)

    }

})

function displayTimer(){
    seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }


















