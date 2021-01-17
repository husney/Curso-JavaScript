// 0 - 100 multiplos de 3 imprimen Fizz
// multiplos de 5 imrpimen Buzz
// multiplos de 3 y 5 imprimern Fizz Buzz


for(let i = 1; i <101; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz N°"+i );
    }else if(i % 5 == 0){
        console.log("Buzz N°"+i);
    }else if(i % 3 == 0){
        console.log("Fizz N°"+i);
    }
} 