var appForm = document.querySelector("#app form");

appForm.onsubmit = media;


function media(e) {
    e.preventDefault();

    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var n3 = document.getElementById("n3").value;
    var n4 = document.getElementById("n4").value;
    var n5 = document.getElementById("n5").value;
    var n6 = document.getElementById("n6").value;
    var n7 = document.getElementById("n7").value;
    var n8 = document.getElementById("n8").value;
    var n9 = document.getElementById("n9").value;
    var n10 = document.getElementById("n10").value;
    var n11 = document.getElementById("n11").value;
    var n12 = document.getElementById("n12").value;

    var total = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5) + parseInt(n6) + parseInt(n7) + parseInt(n8) + parseInt(n9) + parseInt(n10) + parseInt(n11) + parseInt(n12)) * parseInt(1)

    var result = document.getElementById("result");
    result.innerHTML = "";

    var result_moedas = document.getElementById("result-moedas");
    result_moedas.innerHTML = "";

    var valor_cents = total;
    result.innerHTML = total;

    var valor_cents = total
    result_moedas.innerHTML = total / 12;

    var moedas = separarMoedas(valor_cents);

}