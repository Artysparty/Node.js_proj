function Task1(num){
    num = num.toString();
    let sum = 0;
    for (let i=0; i<num.length; i++){
        sum +=Number(num[i]);
    }
    console.log(sum)
}
Task1(12345)

function Task2(first, second, third){
    console.log(`${first}${second}${third}`)
}

Task2('%', 2, 'o')

function Task3(name, population, area){
    console.log(`Town ${name} has population of ${population} and area ${area} square km`)
}
Task3("Moscow", 12345, 1234)

function Task4(first, operation, second){
    let res = 0
    switch(operation){
        case'+':
            res = first + second;
            break
        case'-':
            res = first - second
            break
        case'*':
            res = first * second
            break
    }
    console.log(res.toFixed(2))
}
Task4('10', '*', '10')

function Task5(number){
    digit = parseInt(number, 2)
    console.log(digit)
}
Task5(11110000)