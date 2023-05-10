let arrY=[1, 1, 1, 1];
let checkResult="true";
for (let i=0; i<arrY.length-1; i++) {
  if (arrY[i]!==arrY[i+1]) {
    checkResult="false";
  }
}
console.log(checkResult);