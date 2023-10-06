// dates

let mydate = new Date()
console.log(mydate.toString());
// iso localString json localdateString
console.log(mydate.toJSON());  


console.log(typeof mydate);   // object

// let myCreatesDate = new  Date(2023,0,23)

// let myCreatesDate = new  Date(2023,0,23,5,3)
// let myCreatesDate = new  Date("2023-01-14")

// let myCreatesDate = new  Date("01-14-2023")
// console.log(myCreatesDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatesDate.getTime());
console.log(Date.now()/1000)


let newDate = new Date()

// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:"long"
    

})


//++++++++++++++++++++++++++++++++++++++++   Instance methods  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Date.prototype.getDate()
// Returns the day of the month (1 – 31) for the specified date according to local time.

// Date.prototype.getDay()
// Returns the day of the week (0 – 6) for the specified date according to local time.

// Date.prototype.getFullYear()
// Returns the year (4 digits for 4-digit years) of the specified date according to local time.

// Date.prototype.getHours()
// Returns the hour (0 – 23) in the specified date according to local time.

// Date.prototype.getMilliseconds()
// Returns the milliseconds (0 – 999) in the specified date according to local time.

// Date.prototype.getMinutes()
// Returns the minutes (0 – 59) in the specified date according to local time.

// Date.prototype.getMonth()
// Returns the month (0 – 11) in the specified date according to local time.

// Date.prototype.getSeconds()
// Returns the seconds (0 – 59) in the specified date according to local time.

// Date.prototype.getTime()
// Returns the numeric value of the specified date as the number of milliseconds since January 1, 1970, 00:00:00 UTC. (Negative values are returned for prior times.)

// Date.prototype.getTimezoneOffset()
// Returns the time-zone offset in minutes for the current locale.

// Date.prototype.getUTCDate()
// Returns the day (date) of the month (1 – 31) in the specified date according to universal time.

// Date.prototype.getUTCDay()
// Returns the day of the week (0 – 6) in the specified date according to universal time.

// Date.prototype.getUTCFullYear()
// Returns the year (4 digits for 4-digit years) in the specified date according to universal time.

// Date.prototype.getUTCHours()
// Returns the hours (0 – 23) in the specified date according to universal time.

// Date.prototype.getUTCMilliseconds()
// Returns the milliseconds (0 – 999) in the specified date according to universal time.

// Date.prototype.getUTCMinutes()
// Returns the minutes (0 – 59) in the specified date according to universal time.

// Date.prototype.getUTCMonth()
// Returns the month (0 – 11) in the specified date according to universal time.

// Date.prototype.getUTCSeconds()
// Returns the seconds (0 – 59) in the specified date according to universal time.

// Date.prototype.getYear() Deprecated
// Returns the year (usually 2–3 digits) in the specified date according to local time. Use getFullYear() instead.

// Date.prototype.setDate()
// Sets the day of the month for a specified date according to local time.

// Date.prototype.setFullYear()
// Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to local time.

// Date.prototype.setHours()
// Sets the hours for a specified date according to local time.

// Date.prototype.setMilliseconds()
// Sets the milliseconds for a specified date according to local time.

// Date.prototype.setMinutes()
// Sets the minutes for a specified date according to local time.

// Date.prototype.setMonth()
// Sets the month for a specified date according to local time.

// Date.prototype.setSeconds()
// Sets the seconds for a specified date according to local time.

// Date.prototype.setTime()
// Sets the Date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC. Use negative numbers for times prior.

// Date.prototype.setUTCDate()
// Sets the day of the month for a specified date according to universal time.

// Date.prototype.setUTCFullYear()
// Sets the full year (e.g. 4 digits for 4-digit years) for a specified date according to universal time.

// Date.prototype.setUTCHours()
// Sets the hour for a specified date according to universal time.

// Date.prototype.setUTCMilliseconds()
// Sets the milliseconds for a specified date according to universal time.

// Date.prototype.setUTCMinutes()
// Sets the minutes for a specified date according to universal time.

// Date.prototype.setUTCMonth()
// Sets the month for a specified date according to universal time.

// Date.prototype.setUTCSeconds()
// Sets the seconds for a specified date according to universal time.

// Date.prototype.setYear() Deprecated
// Sets the year (usually 2–3 digits) for a specified date according to local time. Use setFullYear() instead.

// Date.prototype.toDateString()
// Returns the "date" portion of the Date as a human-readable string like 'Thu Apr 12 2018'.

// Date.prototype.toISOString()
// Converts a date to a string following the ISO 8601 Extended Format.

// Date.prototype.toJSON()
// Returns a string representing the Date using toISOString(). Intended for use by JSON.stringify().

// Date.prototype.toLocaleDateString()
// Returns a string with a locality sensitive representation of the date portion of this date based on system settings.

// Date.prototype.toLocaleString()
// Returns a string with a locality-sensitive representation of this date. Overrides the Object.prototype.toLocaleString() method.

// Date.prototype.toLocaleTimeString()
// Returns a string with a locality-sensitive representation of the time portion of this date, based on system settings.

// Date.prototype.toString()
// Returns a string representing the specified Date object. Overrides the Object.prototype.toString() method.

// Date.prototype.toTimeString()
// Returns the "time" portion of the Date as a human-readable string.

// Date.prototype.toUTCString()
// Converts a date to a string using the UTC timezone.

// Date.prototype.valueOf()
// Returns the primitive value of a Date object. Overrides the Object.prototype.valueOf() method.

// Date.prototype[@@toPrimitive]()
// Converts this Date object to a primitive value.

