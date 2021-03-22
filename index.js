
let New = new Date("jan 1, 2022").getTime()

function newYears(){
    let now = new Date().getTime()
    let date = New - now

    let second = 1000
    let minute = second * 60
    let hour = minute * 60
    let day = hour * 24

    let d = Math.floor(date / (day))
    let h = Math.floor(date % (day) / (hour))
    let m = Math.floor(date % (hour) / (minute))
    let s = Math.floor(date % (minute) / (second))

    document.getElementById("days").innerHTML = formatTime(d)
    document.getElementById("hours").innerHTML = formatTime(h)
    document.getElementById("minutes").innerHTML = formatTime(m)
    document.getElementById("seconds").innerHTML = formatTime(s)
}
 function formatTime(time){
     if (time < 10){
         return time = "0" + time
     }else{
        return time
     }
      
 }
setInterval(newYears)