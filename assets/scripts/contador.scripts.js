function dec() {
    let contador = Number(document.getElementById("contador").innerText)
    document.getElementById("contador").innerHTML = contador -1;
};
function acre() {
    let contador = Number(document.getElementById("contador").innerText)
    document.getElementById("contador").innerHTML = contador +1;
};
function res() {
    document.getElementById("contador").innerHTML = 0;
}