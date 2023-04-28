const btn = document.querySelector("#calcular")

//Função para pegar o valor do input Receita Mensal e calcular o valor do imposto (15,5%) e o INSS (11%)

btn.addEventListener("click", function(e){
    e.preventDefault();

    const receitaMensal = document.querySelector('#receita_mensalV')
    const recMes = receitaMensal.value;

    const proLabore = document.querySelector('#pro-laboreV')
    const proLab = proLabore.value;

    let imposto = document.querySelector('#impostoV');
    let calcImposto = parseInt(recMes * 0.155);

    let inssV = document.querySelector('#inssV');
    let calcInss = parseInt(proLab * 0.11);

    imposto.value = calcImposto

    inssV.value = calcInss  

    //Calculadora do anexo V com redução

    const receitaMensalReducao = document.querySelector('#receita_mensal')
    const recMesRed = receitaMensalReducao.value;

    let impostoReducao = document.querySelector('#imposto')
    let calcImpostoRed = parseInt(recMesRed * 0.06);

    impostoReducao.value = calcImpostoRed;

    let proLaboreReducao = document.querySelector('#pro_labore')
    let calcProLaboreRed = parseFloat(recMesRed * 0.28);

    proLaboreReducao.value = calcProLaboreRed;

    let inssReducao = document.querySelector('#inss')
    let calcInssRed = parseInt(calcProLaboreRed * 0.11);

    inssReducao.value = calcInssRed

    let somaImpostos = calcImposto + calcInss ;
    let somaImpostosRed = calcImpostoRed + calcInssRed ;
    let economiaTribut = somaImpostos - somaImpostosRed

    //Mostra o resultado no HTML
    const para = document.createElement("p");
    para.innerHTML = `Aplicando a legislação, o total de tributos federais a pagar são R$ ${somaImpostos} de Simples Nacional e INSS, já com a aplicação da redução o total ficou R$ ${somaImpostosRed}, representando, portanto, uma economia de R$ ${economiaTribut}`;
    
    document.getElementById('resultado').appendChild(para);
    
})

function zerarCampos(){
    document.getElementsByTagName('input').value = ''

   

}
