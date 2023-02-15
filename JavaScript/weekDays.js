/*
Day of the Week

Write a function 'returnDay' that takes one parameter(number from 1 to 7) and returns the day of the week.
        (where 1 is Monday, 2 is Tuesday, 3 is Wednesday, etc).
If the number is less than 1 or greater than 7, the function should return null.

Note: Store the days of the week in the array.

var weekDays=["Sunday","Monday","Tuesday", "Wednesday","Thursdays","Friday","Saturday"];

Solution 1:

function returnDay(num){
    if(num=>1 && num<=7){
        for(var i=0;i<=weekDays.length;i++){
            return console.log(weekDays[num]);
        }
    }
    else{
        return console.log("Null")
    }
}

returnDay(7);*/

/*<-----------We cannot use the above function------------>*/



Solution 2:

var weekDay = ['Sunday','Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday'];

function returnDay(x){
       return (x < 1) || (x > 7) ? null : weekDay[x];             /*<-----------We use the ternary operators for the desired output------------>*/
}

console.log(returnDay(0));




