// function clock() {
//     let secDots = document.getElementById("secDots");
//     let minDots = document.getElementById("minDots");
//     let hrDots = document.getElementById("hrDots");
  
//     var date = new Date();
//     var hours = date.getHours() % 12 || 12; // Convert to 12-hour format, handle midnight (0 should be 12)
//     var amPm = date.getHours() >= 12 ? "PM" : "AM";
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();

//     var secondsDots = '';
//     for (var i = 1; i < 61; i++) {
//         var rotation = i * 6; // rotate each line degree
//         if (i === seconds) {
//             secondsDots += '<div class="dot active" style="transform: rotate(' + rotation + 'deg)"></div>';
//         } else {
//             secondsDots += '<div class="dot" style="transform: rotate(' + rotation + 'deg)"></div>';
//         }
//     }
    
  
//     //  Use zero() function to add leading zeros
// secDots.innerHTML = secondsDots + '<b>' + amPm + '</b>' + `<h2>${zero(seconds)} <br><span>Seconds</span></h2>`;
// minDots.innerHTML = `<h2>${zero(minutes)}  <br><span>Seconds</span> </h2>`;
// hrDots.innerHTML = `<h2>${zero(hours)}  <br><span>Hours</span> </h2>`;
  
//   // Function to add leading zero for single-digit numbers
//   function zero(number) {
//     if (number < 10){
//     return '0' + number;
//   }
//   return number;
// }
//   // Update clock every second
//   setInterval(clock, 1000);
// }
//   // Call once immediately to prevent delay
//   clock();
function clock() {
    let secDots = document.getElementById("secDots");
    let minDots = document.getElementById("minDots");
    let hrDots = document.getElementById("hrDots");

    var date = new Date();
    var hours = date.getHours() % 12 || 12; // Convert to 12-hour format
    var amPm = date.getHours() >= 12 ? "PM" : "AM";
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    // Generate the seconds dots
    var secondsDots = '';
    for (var i = 1; i < 61; i++) {
        var rotation = i * 6; // Each second rotates 6 degrees
        if (i === seconds) {
            secondsDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
        } else {
            secondsDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
        }
    }


    var minutesDots = '';
    for (var i = 1; i < 61; i++) {
        var rotation = i * 6; // Each second rotates 6 degrees
        if (i === minutes) {
            minutesDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
        } else {
            minutesDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
        }
    }

    var hoursDots = '';
    for (var i = 1; i < 13; i++) {
        var rotation = i * 30; // Each second rotates 6 degrees
        if (i === hours) {
            hoursDots += `<div class="dot active" style="transform: rotate(${rotation}deg)"></div>`;
        } else {
            hoursDots += `<div class="dot" style="transform: rotate(${rotation}deg)"></div>`;
        }
    }
    // Update the clock UI
    secDots.innerHTML = `${secondsDots} <b>${amPm}</b> <h2 class="green">${zero(seconds)} <br><span>Seconds</span></h2>`;
    minDots.innerHTML = ` ${minutesDots} <h2 class="yellow">${zero(minutes)}  <br><span>Minutes</span></h2>`;
    hrDots.innerHTML = ` ${hoursDots} <h2 class="red">${zero(hours)}  <br><span>Hours</span></h2>`;
}

// Function to add leading zero to single-digit numbers
function zero(number) {
    return number < 10 ? '0' + number : number;
}

// Start the clock immediately and update every second
clock();
setInterval(clock, 1000);
