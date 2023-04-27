const btn = document.querySelector("#calcular")

btn.addEventListener("click", function(e){
    e.preventDefault();

    const receitaMensal = document.querySelector('#receita_mensalV')
    const recMes = receitaMensal.value;
    
    console.log(recMes)

    let imposto = document.querySelector('#impostoV');
    
    let Calcimposto = parseInt(recMes * 0.155);

    imposto.innerHTML(`${Calcimposto}`)


})