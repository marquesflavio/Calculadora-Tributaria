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

})