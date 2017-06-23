function rangePrint(start, end, skip){   
    // set default skip if only 2 parameters passed in
    if (skip === undefined) {
          skip = 1;
    };
    // set default start if only 1 parameter passed in
    if (end === undefined) {
        end = start;
        start = 0;
    };
    // for positive skip values, "counting up"
    if (skip > 0){
        for (var count = start; count < end; count += skip){
            console.log(count);
        };
    } else { // for negative skip values
        for (var count = start; count > end; count += skip){
            console.log(count);
        };
    };    
};


// Testing the function

// All parameters positive and passed in
console.log("Expected 2,4,6,8");
rangePrint(2, 10, 2);

// No skip passed in
console.log("Expected 2,3,4");
rangePrint(2, 5);

// No skip or end passed in
console.log("Expected 0,1,2,3");
rangePrint(4);

// Negative skip 
console.log("Expected 5,3,1");
rangePrint(5,0,-2);

// Negative start
console.log("Expected -1,2,5,8");
rangePrint(-1,10,3);
