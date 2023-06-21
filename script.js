//your JS code here. If required.
let p = document.querySelector("#timer");
setTimeout(function getTime(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let meridiam = "AM";
    if(hours >= 12){
        meridiam = "PM"
    }else{
        meridiam = "AM";
    }
    p.textContent = `${day}/${month}/${year}, ${hours}:${min}:${sec} ${meridiam}`
    setTimeout(getTime, 1000);
}, 1000);