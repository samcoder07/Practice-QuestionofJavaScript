function quicksort(array) {
    if (array.length ===1) {
        return array;
    }


const pivot=array[array.length-1];
const leftArr=[];
const rightArr=[];
for (const el of array.slice(0,array.length-1)) {
    el < pivot ? leftArr.push(el) : rightArr.push(el);
}

if (leftArr.length>0&&rightArr.length>0) {
    return[...quicksort(leftArr),pivot,...quicksort(rightArr)];
}else if(leftArr.length>0){
    return[...quicksort(leftArr),pivot]
}else{
    return [pivot, ...quicksort(rightArr)]
}
}

const arr=[1,4,8,2,4,5,6,255,355,600];

console.log(quicksort(arr));