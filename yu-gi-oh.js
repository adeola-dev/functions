function checkYuGiOh(n) {
    let myArray = [];
    
    for (let i = 1; i < n; i++) {
        myArray.push(i);   
    }
    let iterator = myArray.values();
for (const value of iterator) {
    if (iterator % 2 === 0) {
        myArray[iterator] = 'yu';
        }
    else if (iterator % 3 === 0) {
        myArray[iterator] = 'gi';
    }
    else if (iterator % 5 === 0) {
        myArray[iterator] = 'oh';
    }
    else if ((iterator % 2 === 0) &&  (iterator % 3 === 0)) {
        myArray[iterator] = 'yu-gi';
    }
    else if ((iterator % 2 === 0) &&  (iterator % 5 === 0)) {
        myArray[iterator] = 'yu-oh';
    }
    else if ((iterator % 2 === 0) &&  (iterator % 3 === 0)  && (iterator % 5 === 0)) {
        myArray[iterator] = 'yu-gi-oh';
    }
    if (( n !== "string") && ( n !== "number")) { 
        console.log(`invalid parameter: ${n}`)
      
}
    console.log(value);
  }
  console.log(myArray)
}
checkYuGiOh(6);



