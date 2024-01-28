let mat1=[4, 1,
          8, 5]
let mat2=[4, 1,
          8, 5]

document.write("Matrix 1");

for (let i = 0; i <2; i++) {
    for (let j=0;j<2;j++){
        document.write(mat1[i]+[j]+"&nbsp;&nbsp;&nbsp;")
    }
    document.write("<br>");
}

document.write("Matrix 2");

for (let i = 0; i <2; i++) {
    for (let j=0;j<2;j++){
        document.write(mat2[i]+[j]+"&nbsp;&nbsp;&nbsp;")
    }
    document.write("<br>");
}

let mat3=[[],[]]
for(let i=0;i<2;i++){
    for(let j=0;j<2;j++){
        mat3[i][j]=mat1[i][j]+mat2[i][j];
    }
}