const btnValidar = document.getElementById('btn-validar');
const status = document.getElementById('status');
const btnCadastrar = document.getElementById('btn-cadastrar');

btnCadastrar.onclick = function(){
    let entrada = prompt("Cadastra seu Nome Completo: ");
    if (!entrada) return;

    let nomes = entrada.trim().split(/\s+/)
    if (nomes.length >= 2){
        status.innerHTML = "Nome Aceito"
    }

}

btnValidar.onclick = function(){
    nome = prompt("Digite seu Nome Completo: ")
    if (!nome) return;

    let nomesArrays = nome.trim().split(/\s+/);
    if (nomesArrays.length < 2) {
        alert("Erro: Digite nome e sobrenome.");
        return;
    }

    let cpf = prompt("Digite o CPF (apenas números): ");
    if(!cpf) return;
    let cpfLimpo = cpf.replace(/\D/g, '');

    if (validarCPF(cpfLimpo)) {
        status.innerHTML = `<span style="color:green">✅ Cliente ${nomesArrays[0]} validado!</span>`;
    } else {
        status.innerHTML = `<span style="color:red">❎ CPF ${cpfLimpo} é inválidado!</span>`
    }
}