

function updateClock() {

  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var dayOfWeek = now.getDay();
  var date = now.getDate();
  var month = now.getMonth();
  var year = now.getFullYear();
  var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
  document.getElementById("day").textContent = dayNames[dayOfWeek];
  document.getElementById("date").textContent = formatTime(date);
  document.getElementById("month").textContent = formatTime(month);
  document.getElementById("year").textContent = formatTime(year);

 
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function fulldate(){
  var now = new Date();
  var date = now.getDate();
  var month = now.getMonth() + 1;
  var year = now.getFullYear();

  document.getElementById("fulldate").innerHTML=month + "/" + date + "/" + year;
}





setInterval(updateClock, 1000);