console.log("Hello, world!")

function solve1(num){
    console.log(num*2)
}

solve1(5);

function grade(num){
    if (num>=5){
        console.log("Excellent!")
    }
    else
    {
        console.log("Not excellent")
    }
}

grade(5.50);

function solve2(n){
    while(n>=1){
        console.log(n)
        n--
    }
}
solve2(5)

function solve3(m,n){
    for(let i = m; i>= n; i--){
        console.log(i)
    }
}
solve3(5,3)

function solve4(name, age, grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

solve4("Gabe", 17, 20.2222)