/* 
    Criar uma função que vai pegar os valores de dia, mês e ano e passar para uma variavel e chamar a função que irá exibir na tela
*/
function adicionarData () {
    let data = new Date();
    let dia = String(data.getDate()).padStart(2, '0');
    let mes = String(data.getMonth() + 1).padStart(2, '0');
    let ano = data.getFullYear();

    let dataCompleta = document.querySelector(".data");
    dataCompleta.textContent = `${dia}/${mes}/${ano}`;
}

adicionarData();
setInterval(adicionarData, 1000);
