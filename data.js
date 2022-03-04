/* 
    Criar uma função que vai pegar os valores de dia, mês e ano e passar para outra função que irá exibir na tela

*/
function adicionarData () {
    let data = new Date();
    let dia = data.getDay()-1;
    let mes = data.getMonth()+1;
    let ano = data.getFullYear();

    let dataCompleta = document.querySelector(".data");
    dataCompleta.textContent = `${mostrarData(dia)}/${mostrarData(mes)}/${mostrarData(ano)}`;
}

function mostrarData (valorData) {
    if (valorData < 10) {
        valorData = "0" + valorData;
    }

    return valorData;
}

mostrarData();
setInterval(adicionarData, 1000);
