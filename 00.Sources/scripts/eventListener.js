// window.onload = function() {
//     alert(`I'm loaded!`);
// }

document.getElementById("clickMe").onclick = function() {
    alert(`I'm clicked!`);
}

function onClick() {
    alert(`I'm ckicked one more time!`);
}

function onClick2() {
    alert(`another event`);
}

document.getElementById("clickMe").addEventListener("click", onClick);
document.getElementById("clickMe").addEventListener("click", onClick2);
document.getElementById("clickMe").removeEventListener("click", onClick);