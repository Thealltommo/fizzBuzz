let output = [];
function fizzBuzz() {
    for (let count = 1; count<=100; count++) {
        if (count %3 === 0 && count %5 !== 0) {
            output.push("Fizz");
        }  
        else if (count %3 !==0 && count %5 ===0) {
            output.push("Buzz");
        }
        else if (count %3 ===0 && count %5 ===0) {
            output.push("FizzBuzz");
        }
        else {
            output.push(count);
 
        }  
    }
    return output;  
} 
   
console.log(fizzBuzz());
