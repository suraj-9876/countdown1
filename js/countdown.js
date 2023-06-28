const endDate="31 December 2023 00:00 AM";

document.getElementById("end-date").innerHTML = endDate;

const inputs = document.querySelectorAll("input");
 //document.querySelectorAll('title').textContent= atul;





const clock = () => {
    const end = new Date(endDate);
    const now = new Date()
    //console.log(end);
    //console.log(now);
    const diff = (end - now)/1000;
    //console.log(diff);
     if(diff < 0) return
    const days=diff/3600/24;
    //console.log(Math.floor(days));
    inputs[0].value = Math.floor(days);

     const hour = (diff/3600)%24;
    //console.log(Math.floor(hour));
    inputs[1].value = Math.floor(hour);

    const min = (diff/60)%60;
    //console.log(Math.floor(min));
    inputs[2].value = Math.floor(min);

    const sec = diff%60;
    //console.log(sec);
    inputs[3].value = Math.floor(sec);

}

//initiat call
clock()




/****
 * 1 day = 24 hrs
 * 1 hr = 60 min
 * 1 min = 60 sec
 * 60 min = 3600 sec
 */


setInterval(
    () => {
        clock()
    },
    1000
)