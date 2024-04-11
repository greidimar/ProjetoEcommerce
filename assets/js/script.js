
const valor = document.querySelector("#valor").addEventListener("change", calcularcompra)

function calcularcompra()
{
    
    const qtde = document.querySelector("#qtde").value
    let vpreco = valor;   

    document.querySelector("#orcamento").innerText = "R$ " + vtotal.toFixed(2)
    //console.log(preco)
}

