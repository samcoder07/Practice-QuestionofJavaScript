var num= prompt("please Enter a number");

if (num == 1) {
    console.log(`${num} is neither prime number nor composite number`);
}
else if(num >=1){
    console.log(`${num} is not a prime number`);
}
else{
    for(let i=1;i<num;i++){
        if (num%i==0) {
            let res=`${num} is not a prime number`;
            break;
        }else{
            var res=`${num} is a primber number`;
        }
    }
    console.log(res);
}