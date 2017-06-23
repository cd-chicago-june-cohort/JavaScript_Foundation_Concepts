function canIHaveTheTime (hour, minute, period){
    // ready to accept statements related to minutes
    var relMins = "";
    // ready to accept statements related to the period of the day ie morning, after, etc. 
    var perDay = ""; 
    // creating a new variable to account for time statements that refer to the next hour i.e. quarter til
    var newHour = hour;
    // special condtions for midnight & noon
    if (minute == 0 && hour ==12){
        if (period == "AM"){
            return "It's midnight!";
        } else { // for period == "PM"
            return "It's noon!";
        };
    };

    // setting period of day statements
    if (period == "AM"){
        if (hour <= 6 || hour == 12){
            perDay = " in the early morning.";
        } else { // for hours between 7AM and noon
            perDay = " in the morning.";
        };
    } else { // for period == "PM"
        if (hour <= 5 || hour == 12){
            perDay = " in the afternoon.";
        } else { //for hours between 6PM and midnight
            perDay = " in the evening.";
        };
    };

    // setting statements for relationship to the hour
    if (minute <= 30){
        relMins = minute + " after "
    } else { // for all "t0 the next hour" statements
        var toNextHour = 60 - minute
        relMins = toNextHour + " to ";
        newHour = hour + 1
    }

    // over-writing previous statements for special relationships to the hour statements 
    if (minute == 0){ // for on the hour
        relMins = "exactly ";
    };
    if (minute == 30){ // for half past the hour 
        relMins = "half past ";
    };
    if (minute == 15){ // for quarter after the hour
        relMins = "quarter after ";
    };
    if (minute == 45){ // for quarter til the next hour
        relMins = "quarter to ";
    };
    
    return "It's " + relMins + newHour + perDay;
}

//testing the function//

console.log("Expected: It's midnight!");
console.log("Actual:  ", canIHaveTheTime(12,0,"AM"));

console.log("Expected: It's noon!");
console.log("Actual:  ", canIHaveTheTime(12,0,"PM"));

console.log("Expected: It's quarter after 4 in the early morning.");
console.log("Actual:  ", canIHaveTheTime(4,15,"AM"));

console.log("Expected: It's 5 after 8 in the morning.");
console.log("Actual:  ", canIHaveTheTime(8,5,"AM"));

console.log("Expected: It's 20 to 7 in the evening.");
console.log("Actual:  ", canIHaveTheTime(6,40,"PM"));

console.log("Expected: It's half past 12 in the afternoon.");
console.log("Actual:  ", canIHaveTheTime(12,30,"PM"));

console.log("Expected: It's quarter to 4 in the afternoon.");
console.log("Actual:  ", canIHaveTheTime(3,45,"PM"));

console.log("Expected: It's exactly 9 in the evening.");
console.log("Actual:  ", canIHaveTheTime(9,0,"PM"));