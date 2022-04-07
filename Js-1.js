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
var timeStay = [];
var timeBefore = [];
var timeAfter = [];
var bill = 0;
// Get Bill
function getBill (checkIn, checkOut) {
    timeStay = [checkOut.year - checkIn.year, checkOut.month - checkIn.month, checkOut.day - checkIn.day, checkOut.hour - checkIn.hour, checkOut.minute - checkIn.minute];
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
    else {
        timeAfter.push(0);
    }
    bill = 200 + timeBefore[0]*30 + timeAfter[0]*30;
    if (bill >= 400) {
        bill = 400;
    }
    clear();
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

// test
getDate (inDay, outDay)
getBill (checkIn, checkOut)

var inDay = new Date('2022-12-7 13:00:00');
var outDay = new Date('2022-12-8 13:00:00');

var inDay = new Date('2022-12-7 08:00:00');
var outDay = new Date('2022-12-8 17:00:00');

