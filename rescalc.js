function calc() {
    let a = document.getElementById('OverallInput').value;
    let b = document.getElementById('AtmInput').value;
    let c = ( a - b ) / 2;
    let d = document.getElementById('SpeedInput').value;
    let e = c / d;
    
    document.getElementById('result1').innerHTML = c;
    console.log(c)

    document.getElementById('result2').innerHTML = e;
    console.log(e)
}