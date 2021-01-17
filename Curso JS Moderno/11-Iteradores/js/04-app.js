
let i = 1;

while(i <101){

    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz N°"+i );
    }else if(i % 5 == 0){
        console.log("Buzz N°"+i);
    }else if(i % 3 == 0){
        console.log("Fizz N°"+i);
    }

    i++;
}


console.log("----");

i = 0;

while(i < 101){
    console.log(i);
    i++;
}


console.log("---");

i = 100;

while( i > 0){
    console.log(i);
    i--;
}

i = 0;

while(i <= 50){
    console.log(i);
    i++;
}