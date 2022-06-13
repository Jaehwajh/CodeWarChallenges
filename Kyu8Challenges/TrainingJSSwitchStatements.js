/*
Task
Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

+---------------+-------------+
|    month      |    days     |
+---------------+-------------+
|1,3,5,7,8,10,12|     31      |
+---------------+-------------+
|4,6,9,11       |     30      |
+---------------+-------------+
|2              |     28      |  (Do not consider the leap year)
+---------------+-------------+
little tips: Use default for most of the cases can reduce your work.

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata.
*/


function howManydays(month){
    var days;
    switch (month){
        case 1 :
          return 31;
          break;
        case 2 :
          return 28;
          break;
        case 3 : 
          return 31;
          break;
        case 4 :
          return 30;
          break;
        case 5 :
          return 31;
          break;
        case 6 :
          return 30;
          break;
        case 7 :
          return 31;
          break;
        case 8 :
          return 31;
          break;
        case 9 :
          return 30;
          break;
        case 10 :
          return 31;
          break;
        case 11 :
          return 30;
          break;
        case 12 :
          return 31;
          break;
        
    
    }
    return days;
  }