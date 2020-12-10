'use strick';



const getTotalRevenue = arr => arr.map(item => item.amount).reduce((acc, item) => acc + item );



