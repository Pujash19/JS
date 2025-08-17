let currentdate= new Date(); // Date is a class, in this like we are making a object of class.
console.log(currentdate);  
// console.log(currentdate)
//  Shows ISO 8601 UTC string.
// 2025-08-17T20:01:30.788Z means:
// Date: 17 Aug 2025
// Time: 20:01:30.788
// Z = UTC
console.log(currentdate.getDate()); 
//Your UTC date is 17th, but you live in India (UTC+5:30) → it becomes 18th Aug.
console.log(currentdate.getMonth()+1); //+1 because it calculates from 0.
console.log(currentdate.getFullYear());
console.log(currentdate.getDay()+1); ////+1 because it calculates from 0.
console.log(currentdate.getTime());  //Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
console.log(currentdate.getHours());
console.log(currentdate.getMinutes());
console.log(currentdate.getSeconds());
console.log(currentdate.getMilliseconds());
