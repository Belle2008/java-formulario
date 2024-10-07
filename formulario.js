const btnCadastrar = document.getElementById("BotaoCadastro");
btnCadastrar.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    document.getElementById("nomelista").innerHTML = "Nome: " + nome;
    let email = document.getElementById("email").value;
    document.getElementById("emailista").innerHTML = "email: " + email;
    let data = document.getElementById("data").value;
    document.getElementById("datalista").innerHTML = "data de nascimento: " + data;
});

const btnlimpar = document.getElementById("limpar");
btnlimpar.addEventListener("click", () => {
    let nome = document.getElementById("nome").value;
    document.getElementById("nomelista").innerHTML = "";
    let email = document.getElementById("email").value;
    document.getElementById("emailista").innerHTML = "";
    let data = document.getElementById("data").value;
    document.getElementById("datalista").innerHTML = "";
});

