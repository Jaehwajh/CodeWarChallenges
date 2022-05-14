/*
Task:
Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

number	price (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
You can use if..else or ternary operator to complete it.
*/

function saleHotdogs(n){
    if(n < 5){
      return n * 100;
    }
    if(n >= 5 && n < 10){
      return n * 95;
    }
    if(n >= 10){
      return n * 90;
    }
  }