console.log("hello");


let hrs_C;
let mins_C;
let secs_C;
let count=1;  
let alarm_hrs;
let alarm_mins;
let rem_hrs;
let rem_mins;
let rem_secs;
let alarm_time;
let clock_time;
let rem_time;

let currentH=document.querySelector(".hrs_C");
let currentM=document.querySelector(".mins_C");
let currentS=document.querySelector(".secs_C");
let btn=document.querySelector(".btn");
let alarm_text=document.querySelector(".alarm_text");
let audio=document.querySelector(".audio");
let time_rem=document.querySelector(".time-rem");




// to show current time
function GetCurrentDate(){

const today = new Date();
     
    hrs_C=today.getHours();
    mins_C=today.getMinutes();
    secs_C=today.getSeconds();

    currentH.textContent=hrs_C;
    currentM.textContent=mins_C;
    currentS.textContent=secs_C;

}
setInterval(GetCurrentDate,1);

//check alaram time is up

function checkAlarm(){
    timeLeft(); 

    if(alarm_hrs==hrs_C && alarm_mins==mins_C){

           
     
           if(count==1){
               alarm_text.textContent="The time is up.Press any key to stop the alarm.";
               audio.play();
               time_rem.textContent="Time is up"  
            }
            document.addEventListener('keydown',function(){
               
                    audio.pause();
                    count=2;
                    audio.currentTime=0;
                    btn.style.display="initial";
                    alarm_text.textContent="";
             
                    time_rem.textContent="";
                   
                  
                   
                }
            )
        }
}

//remaining time calculations
function timeLeft(){
    alarm_hrs=parseInt(alarm_hrs);
    alarm_mins=parseInt(alarm_mins);
    if(alarm_time<clock_time)
    {
        alarm_hrs=alarm_hrs+24;
    }
    alarm_time=alarm_hrs*60+alarm_mins;
    clock_time=hrs_C*60+mins_C;
    
    rem_time=alarm_time-clock_time;
   
    rem_hrs=~~(rem_time/60);
    rem_mins=(rem_time%60);
    if (rem_mins==1) {
        rem_mins=0;
    }
    rem_secs=60-secs_C;
    
    if(count==1){
        time_rem.textContent=rem_hrs+" hours "+ rem_mins+" minutes "+rem_secs+" seconds  remaining";
    }

   
    
}


//for set alaram button press

function openPrompt()
    {
        alarm_hrs=prompt("Enter Time in hour to set alaram:");
        alarm_mins=prompt("Enter Time in mins to set alaram:");
        if(alarm_hrs>24 || alarm_mins>60 || alarm_hrs== null || alarm_mins==null){
            alert("Invalid time given.")
        }
        else{   
        btn.style.display="none";
        alert("The alarm is set for "+alarm_hrs+" : " +alarm_mins+" O'clock");
        
        alarm_text.textContent="The alarm is set for "+alarm_hrs+" : "+alarm_mins+" O'clock.";
         }
        
         count=1;
         setInterval(checkAlarm,1);
    }
   
btn.addEventListener('click',openPrompt);
















