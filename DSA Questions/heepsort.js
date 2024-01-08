function hepify(arr,length,parentIndex) {
    let largest=parentIndex;
    let left=parentIndex*2+1;
    let right=left+1;

    if (arr[left]>arr[largest]) {
        largest=left;
    }
    if (arr[right]>arr[largest]) {
        largest=right;
    }
}

function heapSort(arr){
   let length=arr.length;
   let lastParentNode=Math.floor(length/2-1)
   let lastChild=length-1;

   while (lastParentNode>=0) {
    hepify(arr,length,lastParentNode);
    lastParentNode--;
   }
   while (lastChild>=0) {
    [arr[0],arr[lastChild]]=[arr[lastChild],arr[0]]
    hepify(arr,lastChild,0)
    lastChild--;
   }
   return arr;
}

console.log(heapSort([2,8,5,3,9,1]));