/* 
                                    PROJETO RELOGIO
    Nesse projeto fiz bastante comentários para quem queira replica-lo possa faze-lo à sua maneira, deixei também imagens adicionais, todas para live uso, para que possão alterar a visualização na tela, assm como no css deixei a ultimá media queries opcional, se comentáda a parte de visualização para desktop é alterada, mantendo a responsividade, é dando exemplo de outros layouts para o relógio.

    Bons Estudos e Pratica!
*/
function adicionarHora () {
    // Variaveis que armazenam os valores de horas, minutos e segundos, usando métodos que pegam a hora do sistema
    let agora = new Date();
    let horaAgora = agora.getHours();
    let minutosAgora = agora.getMinutes();
    let segundosAgora = agora.getSeconds();

    
    /* 
    Foi criada a variavel 'horario' que usando o metodo 'querySelector' pega o campo hora através do seletor de classe e atribue a ele os valores de hora, minutos e segundos, usando o metodo 'textContent' que retorna uma string e a função 'mostraHora' concatenando os valores a ser mostrado na tela
    */
    let horario = document.querySelector(".relogio_hora");
    horario.textContent = mostrarHora(horaAgora) + ":" + mostrarHora(minutosAgora) + ":" + mostrarHora(segundosAgora);
   
    // Seleciona o campo onde será inserida as imagens de fundo exibidas na tela
    let relogioFundo = document.querySelector(".relogio_fundo");

    // Condições para alterar a imagem de fundo de acordo com a hora
    if (horaAgora >= 5 && horaAgora <= 11) {
        relogioFundo.cssText = "background-image: url(.imagens/nascer_do_sol.jpg)";
    }
    else if (horaAgora > 11 && horaAgora <= 13) {
        relogioFundo.style.cssText = "background-image: url(./imagens/meio_dia.jpg)";  
    }
    else if (horaAgora > 13 && horaAgora <= 17 ) {
        relogioFundo.style.cssText = "background-image: url(./imagens/tarde.jpg)";
    }
    else if (horaAgora > 17 && horaAgora <= 19 ) {
        relogioFundo.style.cssText = "background-image: url(./imagens/por_do_sol.jpg)";
    }
    else if (horaAgora > 19 && horaAgora <= 22 ) {
        relogioFundo.style.cssText = "background-image: url(./imagens/meia_noite2.jpg)";
    }
    else {
        relogioFundo.style.cssText = "background-image: url(./imagens/meia_noite.jpg)";
    }
}

function mostrarHora (valorHora) {
    if (valorHora < 10) {
        valorHora = "0" + valorHora;
    }

    return valorHora
}

mostrarHora();
setInterval(adicionarHora, 1000);