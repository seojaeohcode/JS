const fs = require('fs');
const inputData1 = fs.readFileSync(0,'utf8').toString().split(' ');

const A = parseInt(inputData1[0]);
const B = parseInt(inputData1[1]);

if(A>B){
    console.log(A-B);
}
else{
    console.log(B-A);
}