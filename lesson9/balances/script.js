'use strick';

//input arr
//output num

function getTotalRevenue(arr) {
  return arr.map(el => Object.values(el)[1]).reduce((acc, n) => acc + n);
}



