function convert() {
    let c=document.getElementById('data').value;
    let f=(c * 1.8)+32;
    document.getElementById('res').innerText=`${c} C = ${f} F`; 
}