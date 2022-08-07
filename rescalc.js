function calc() {
    let a = document.getElementById('overall').value;
    let b = document.getElementById('inventory').value;
    let c = document.getElementById('mining').value;
    let d = a - b;
    let e = ( a - b ) / 2;
    let f = ( ( a - b ) / 2 ) / c;

    document.getElementById('result1').innerHTML = d;
    document.getElementById('result2').innerHTML = e;
    document.getElementById('result3').innerHTML = f;

}