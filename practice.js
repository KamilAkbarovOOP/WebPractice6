//************Task 2************
const max_of_three = (a, b, c) =>{
    return(Math.max(a, b, c));
}

console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));
//*******************************



//************Task 3************
const sumTriple = (a, b) => {
    if(a == b){
        return (a + b) * 3;
    }
    else{
        return a + b;
    }
}

console.log(sumTriple(10, 10));
console.log(sumTriple(10, 20));
//******************************



//************Task 5************
const first_half = (word) => {
    if(word.length % 2 == 0){
        return word.slice(0, word.length / 2);
    }
    else{
        return word;
    }
}

console.log(first_half("Python"));
console.log(first_half("JavaScript"));
console.log(first_half("PHP"));
//******************************
