let arr=[10,15,25,65,75]
let temp;
function test(arr,start,end) {
    if (start<=end) {
        temp=arr[start];
        arr[start]=arr[end];
        arr[end]=temp;
        test(arr,start+1,end-1)
    }
    console.log(arr);
}

test(arr,0,arr.length-1)