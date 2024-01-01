let items=[20,12,53,3]
function selection(data) {
    let midId;
    for (let i=0;i<data.length;i++)
    {
        midId=i;
        for(let j=i+1;j<data.length;j++){
            if (data[j]<data[midId]) {
                midId=j;
            }
        }
        let temp=data[midId];
        data[midId]= data[i];
        data[i]=temp;
    }
};

selection(items);
console.log(items)