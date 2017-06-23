
// How much will the reward be after 30 days?

var reward = 0.01 //given on day 1 
var rewardSum = reward //sum of rewards on day 1
var tenThousandDay = 1 

for (var day=2; day<=30; day += 1){
    reward = reward * 2;
    rewardSum += reward;
    if (reward < 10000){
        tenThousandDay = day;
    };
}

console.log ("$", reward);
console.log ("The servant passed $10,000 on day " + tenThousandDay);

while (rewardSum < 1000000000){
    reward = reward * 2;
    rewardSum += reward;
    day += 1;
}
// extra line of code to revert line 22 when rewardSum passes a billion
var billionDay = day-1

console.log ("The servant would pass $1,000,000,000 on day " + billionDay)

while (rewardSum < Infinity){
    reward = reward * 2;
    rewardSum += reward;
    day += 1;
}
// extra line of code to revert line 22 when rewardSum passes a billion
var infinityDay = day-1

console.log ("The servant would pass JavaScript's Infinity on day " + infinityDay)