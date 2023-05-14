let a = prompt();
a=+a;
  if (Number.isNaN(a)) {
  console.log(a, "Упс, кажется, вы ошиблись")
  }
    else if (a==0) {
     console.log("0")
    }
    else if (a%2 === 0) { 
    console.log(a, "Четное число")
    }
    else if (a%2 !== 0) {
    console.log(a, "Нечетное число")
    }
   