function Task1(arr){
    var sumInFirst = 0;
    for (let i=0; i < arr.length; i++){
        sumInFirst = sumInFirst + arr[i];
    }
    var sumInSec = 0;
    for (let i=0; i < arr.length; i++){
        if (arr[i]%2===0){
            arr[i] += i;
            sumInSec += arr[i];
        }else{
            arr[i] -= i;
            sumInSec += arr[i]
        }
    }
    for (let i=0; i < arr.length; i++){
        console.log(arr[i])
    }
    console.log(sumInFirst)
    console.log(sumInSec)
}

//Task1([5,15,23,56,35])

function Task2(arr1, arr2){
    for (let i=0; i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if (arr1[i]==arr2[j]){
                console.log(arr1[i]);
            }
        } 
    }
}
//Task2(['Hey','Hello',2,4,'Peter'], ['Hey',2,'lol'])

function Task3(arr, n){
        for(i = 0; i<n; i++){
            arr.push(arr[0]);
            arr.shift();
        }
    for (let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
};
//Task3([1,2,3,4,5], 2)

function Task4(arr){
    var sumInRows = [];
    var sumInCol = [];
    for (let i=0; i<arr.length; i++){
        for (let j=0;j<arr.length;j++){
            sumInRows[i] += arr[i,j];
            sumInCol[j] += arr[j,i];
        }
    }
    var isMatMagic
    for (let i=0; i<arr.length;i++){
        if (sumInRows[i]===sumInCol[i]){
            isMatMagic = true
        }else{
            isMatMagic = false
        }
    }
    console.log(isMatMagic)
}
Task4([[4,5,6],[6,5,4],[5,5,5]])