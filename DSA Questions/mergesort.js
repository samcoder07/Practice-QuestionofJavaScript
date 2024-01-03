function mergesort(arr) {
    if (arr.length<=1) 
        return arr;
        let mid=Math.floor(arr.length/2)
        let left=mergesort(arr.slice(0,mid))
        let right=mergesort(arr.slice(mid))
       
        return merge(left,right)
}

function merge(left,right) {
    let sortedarr=[];
    while (left.length && right.ength) {
        if (left[0]<right[0]) {
            sortedarr.push(left.shift())
        } else {
            sortedarr.push(right.shift())
        }
    }

    return[...sortedarr,...left,...right];
}

console.log(mergesort([8,3,5,4,7,6,1,2]));