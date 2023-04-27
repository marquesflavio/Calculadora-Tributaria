const btn = document.querySelector("#calcular")

//Função para pegar o valor do input Receita Mensal e calcular o valor do imposto (15,5%)
btn.addEventListener("click", function(e){
    e.preventDefault();

    const receitaMensal = document.querySelector('#receita_mensalV')
    const recMes = receitaMensal.value;
    
    // console.log(recMes)

    let imposto = document.querySelector('#impostoV');
    let calcImposto = parseInt(recMes * 0.155);

    imposto.value = calcImposto
    // console.log(calcImposto)

})