
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");



const newYears="1 Jan 2024"

function countDown(){
    const newYearsDate=new Date(newYears)
    const currentDate=new Date()

    const seconds=(newYearsDate-currentDate)/1000
    const days=Math.floor(seconds/3600/24)
    const hours=Math.floor(seconds/3600)%24
    const mins=Math.floor(seconds/60)%60
    const sec=Math.floor(seconds)%60
    console.log(days,hours,mins,sec)
    
    daysEl.innerHTML=days
    hoursEl.innerHTML=hours
    minsEl.innerHTML=mins
    secondsEl.innerHTML=sec
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
countDown()

setInterval(countDown,1000)