let arr=[1,2,3,3,4,5,6,7,7]

let uniqueArr=[]

for (let value  of arr) {
    if (!uniqueArr.includes(value)) {
        uniqueArr.push(value)
    }
}

console.log(uniqueArr);