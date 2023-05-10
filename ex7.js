let arrZ=[1, 4, 2, 6, 7, 9, 12, 11, 0, 0, 0, ""];
let Even=0;
let Odd=0;
let Zero=0;
let Other=0
for (let i=0; i<arrZ.length; i++) {
  if ((typeof (arrZ[i])=="number")&&(!Number.isNaN(arrZ[i]))) {
    if (arrZ[i]=== 0) { 
    Zero++;
    }
    else if  (arrZ[i]%2 === 0) { 
    Even++;
    }
    else if (arrZ[i]%2 !==0) { 
    Odd++;
    } 
  }
}
Other=arrZ.length-Zero-Even-Odd;
console.log(Even);
console.log(Odd);
console.log(Zero);
console.log(Other);