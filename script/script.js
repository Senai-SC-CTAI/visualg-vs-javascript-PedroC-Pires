let randnum;
randnum = Math.floor(Math.random() * 101);

function num(){
    randnum = Math.floor(Math.random() * 101);
    document.getElementById("campo").focus();
    document.getElementById("campo").value = "";
}

function alg(){
    var num = document.getElementById("campo").value;
    if(randnum - num >0){
        document.getElementById("resultado").innerHTML = "O número é maior que " + num;
    } else if(randnum - num <0){
        document.getElementById("resultado").innerHTML = "O número é menor que " + num;
    } else if (randnum - num == 0){
        document.getElementById("resultado").innerHTML = "Parabéns! O número era " + randnum;
        alert("Parabéns! O número secreto era " + randnum);
        randnum = Math.floor(Math.random() * 101);
    }
    if(document.getElementById("campo").value >100){
        document.getElementById("resultado").innerHTML = "Este número não pode ser maior que 100!";
    } else if(document.getElementById("campo").value <0){
        document.getElementById("resultado").innerHTML = "Este número não pode ser menor que 0!";
    }
    document.getElementById("campo").focus();
    document.getElementById("campo").value = "";
}

document.getElementById("campo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("botao").click();
        document.getElementById("campo").value = "";
    }
})