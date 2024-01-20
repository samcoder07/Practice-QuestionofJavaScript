function sum(num) {
    if (num>0) {
        return num + sum(num-1);
    } else {
        return num;
    }
}
var res=sum(20);
console.log(res);