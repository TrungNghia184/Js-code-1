// Can test for cases with multiple days months and years
// First type in test const 
// Then use "test()"
const checkIn = {
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    second: "" 
};
const checkOut = {
    year: "",
    month: "",
    day: "",
    hour: "",
    minute: "",
    second: "" 
}
const DIM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var timeStay = [];
var timeBefore = [];
var timeAfter = [];
var dayStay = 0;
var monthStay = 0;
var yearStay = 0;
var bill = 0;
var fakeTimeStay = 0;
// Get Bill
function getBill (checkIn, checkOut) {
    timeStay = [checkOut.year - checkIn.year, checkOut.month - checkIn.month, checkOut.day - checkIn.day];
    fakeTimeStay = timeStay;
    if (timeStay[0] == 0 && timeStay[1] == 0 && timeStay[2] == 1 || timeStay[2] == 0) {
        oneNightStay();
    }
    if (timeStay[0] != 0 || timeStay[1] != 0){
        if (timeStay[0] == 0) {
            dayStay = DIM[checkIn.month] - checkIn.day + checkOut.day;
            countMonth1();
            oneNightStay();
            bill += (dayStay -1) * 200;
        }
        if (timeStay[0] != 0) {
            oneNightStay();
            yearStay = checkOut.year - checkIn.year - 1;
            dayStay = 365 * yearStay;
            countMonth2(); 
            dayStay += DIM[checkIn.month] - checkIn.day + checkOut.day;
            bill += (dayStay -1) * 200; 
        }
    }
    clear();
    console.log("Total bill " + bill + 'k');
    alert("Total bill: " + bill + 'k  ' + "Daystay: " + dayStay);
}
// Get checkIn, checkOut
function getDate (inDay, outDay) {
    checkIn.year = inDay.getFullYear();
    checkIn.month = inDay.getMonth();
    checkIn.day = inDay.getDate();
    checkIn.hour = inDay.getHours();
    checkIn.minute = inDay.getMinutes();
    checkIn.second = inDay.getSeconds();
//     
    checkOut.year = outDay.getFullYear();
    checkOut.month = outDay.getMonth();
    checkOut.day = outDay.getDate();
    checkOut.hour = outDay.getHours();
    checkOut.minute = outDay.getMinutes();
    checkOut.second = outDay.getSeconds();
}
function clear() {
    timeStay = [];
    timeBefore = [];
    timeAfter = [];
}

function oneNightStay() {
    if (checkIn.hour < 12) {
        timeBefore.push(12 - checkIn.hour);
    }
    // THIS LINE MUST BE FIX
    if (checkOut.hour > 12) {
        timeAfter.push(checkOut.hour - 12);
    }
    if (checkOut.minute > 0 && checkOut.hour == 12) {
        timeAfter.push(1);
    }
    if (checkIn.hour >= 12) {
        timeBefore.push(0);
    }
    if (checkOut.hour <= 12) {
        timeAfter.push(0);
    }
    bill = 200 + timeBefore[0]*30 + timeAfter[0]*30;
    if (bill >= 400) {
        bill = 400;
    }

}

function countMonth1() {
    for (var i = checkIn.month + 1; i < checkOut.month; i++) {
        dayStay += DIM[i];
    }
}
function countMonth2() {
    for (var i = checkIn.month + 1; i < 12; i++) {
        dayStay += DIM[i];
    }
    for (var i = 0; i < checkOut.month; i++) {
        dayStay += DIM[i];
    }
}
// Test function 
function test () {
    getDate (inDay, outDay)
    getBill (checkIn, checkOut)
}
    
// test
var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 11:00:00');

var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 13:00:00');

var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 15:00:00');

var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 20:00:00');

var inDay = new Date('2022-04-06 10:00:00');
var outDay = new Date('2022-04-07 11:00:00');

// More test 
var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 11:00:00');

var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 13:00:00');

var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 15:00:00');

var inDay = new Date('2022-04-06 13:00:00');
var outDay = new Date('2022-04-07 20:00:00');

var inDay = new Date('2022-04-06 10:00:00');
var outDay = new Date('2022-04-07 11:00:00');
