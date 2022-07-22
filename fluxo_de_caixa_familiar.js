let family = {
    incomes: [100, 1256, 254.65, 3256.12, 3956],
    expenses: [1254, 125, 469.36, 5569]
}

function sum(array){
    let sumTotal = 0

    for(let value of array){ //soma todos os valores dentro do array
        sumTotal += value
    }
    return sumTotal
}

function calculateBalance(incomes, expenses){
    balance = incomes - expenses
    
    if(balance<0){
        console.log(`Saldo negativo de R$ ${balance.toFixed(2).replace(".", ",")} `) //retorna o valor do saldo, limitando em 2 casas decimais e trocando a vírgula por ponto final
    }else{
        console.log(`Saldo positivo de R$ ${balance.toFixed(2).replace(".", ",")} `)
    }
}

calculateBalance(sum(family.incomes),sum(family.expenses)) //chama uma função usando valores vindos de outra função
