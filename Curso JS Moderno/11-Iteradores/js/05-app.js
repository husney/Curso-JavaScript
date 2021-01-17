let i = 0;

do{
    console.log(i);
    i++;
}while(i <= 100);

i = 1;

do{
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz N°"+i );
    }else if(i % 5 == 0){
        console.log("Buzz N°"+i);
    }else if(i % 3 == 0){
        console.log("Fizz N°"+i);
    }
    i++;
}while(i <101);