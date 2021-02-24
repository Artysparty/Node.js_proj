function Task1(age){
    if (age>=0 && age<=2){
        console.log("Младенец")
    }
    else{
        if (age>2 && age<=13){
            console.log("Ребенок")
        }
        else{
            if(age>13 && age <=19){
            console.log("Подросток")
            }
            else{
                if (age>19 && age<=65){
                    console.log("Взрослый")
                }
                else{
                    if (age>=66){
                        console.log("Пожилой")}
                }
            }
        }
    }
}

Task1(66)

function Task2(number, accuracy){
    if (accuracy>15){
        accuracy = 15
    }
    console.log(parseFloat(number.toFixed(accuracy)))
}

Task2(2.5666, 2)

function Task3(num){
    while(true){
        if (num % 10 == 0){
            console.log("Число делится на 10")
            break
        }else{
            if (num % 7 == 0){
                console.log("Число делится на 7")
                break
            }else{
                if (num % 6 == 0){
                    console.log("Число делится на 6")
                    break
                }else{
                    if (num % 3 == 0){
                        console.log("Число делится на 3")
                        break
                    }else{
                        if (num % 2 == 0){
                            console.log("Число делится на 2")
                            break
                        }else{
                            console.log("Не делится")
                        }
                    }
                }
            }
        }
    }
}

Task3(2)


function Task4(numberOfGr, type, day){
    let price = 0
    let totalPrice = 0
    if (type == "Students"){
        if (day == "Friday"){
            price = 8.45
        }else{
            if (day == "Saturday"){
                price = 9.80
            }else{
                if (day == "Sunday"){
                    price = 10.46
                }
            }
        }
        if (numberOfGr >= 30){
            price = price * 0.85
        }
        totalPrice = price*numberOfGr
    }else{
        if (type == "Corporate"){
            if (day == "Friday"){
                price = 10.90
            }else{
                if (day == "Saturday"){
                    price = 15.60
                }else{
                    if (day == "Sunday"){
                        price = 16
                    }
                }
            }
        
        if (numberOfGr >= 100){
            totalPrice = price*numberOfGr - price*10
        }else{
            totalPrice = price*numberOfGr
        }
        }else{
            if (type == "Regular"){
                if (day == "Friday"){
                    price = 15
                }else{
                    if (day == "Saturday"){
                        price = 20
                    }else{
                        if (day == "Sunday"){
                            price = 22.50
                        }
                    }
                }
                totalPrice = price*numberOfGr
                if (numberOfGr>=10 && numberOfGr<=20){
                    totalPrice = totalPrice * 0.95
                }
            }
        }
    }
    console.log("Total price: ", totalPrice.toFixed(2))
}

Task4(14, "Regular", "Saturday")

function Task5(year){
    if ((year % 4 == 0) && (year % 100 > 0) || (year % 400 == 0)){
        console.log("yes")
    }else{
        console.log("no")
    }
}

Task5(4)