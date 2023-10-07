$(document).ready(() => {

    let visor = $("#visor");
    let resultado = null;
    let valVisor;

    $('.num, #ponto').on("click", (e) => {
        valor = e.target.value;
        if (resultado != null) {
            resultado += valor;
            
        } else {
            resultado = valor;
        }

        if(visor.val() != "0"){
            valVisor += valor;
            visor.val(valVisor)
        } else {
            valVisor = valor;
            visor.val(valVisor)

        }
    })

    $('.opr').on("click", (e) => {
        let opr = e.target.value;
        resultado += opr;
        valVisor = opr;
        visor.val(valVisor)
        valVisor = '';
    })

    $('#igualA').on("click", (e) => {
        resultado = eval(resultado)
        visor.val(resultado);
    })

    $('#limpar').on("click", (e) => {
        visor.val(0);
        resultado = null;
    })

    /*
    $('#backspace').on("click", (e) => {
        resultado -= resultado;
        visor.val(resultado)
    })
    */

})