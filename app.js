function takeNums(){

    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    if (num1 < 2 || num1 > 100){
        document.getElementById('dope1').innerHTML = 'Number 1 Input Invalid, please try again.';
    }
    else if (num2 < 2 || num2 > 100){
    document.getElementById('dope2').innerHTML = 'Number 2 Input Invalid, please try again.';
    }
    
    else if (num1 >= 2 && num1 <= 100.00 && num2 >= 2 && num2 <= 100.00){
        arrayBuilder(num1, num2);
        EvenGenerator(num1, num2);
        document.getElementById('dope').innerHTML = ''
    }
    else if (isNaN(num1)){
        document.getElementById('dope1').innerHTML = 'Number 1 Input Invalid, please try again.';
    }
    else if (isNaN(num2)){
        document.getElementById('dope2').innerHTML = 'Number 2 Input Invalid, please try again.';
} 


function primeGenerator(num){
    var flag = true;
    for (var i=2; i<=Math.ceil(num/2); i++){
        if((num % i)==0){
            flag = false;
            break;
        }
    }
    return flag;
}

/* Function to verify that the smaller input is the start number,
    to add each true result from primeGenerator to Array,
    and also to print the array. */

function arrayBuilder(num1, num2){
    var startNum = 0;
    var endNum = 0;
    var Array = [];

    if (num1 > num2){
        startNum = num2;
        endNum = num1;
    }
    else if (num1 < num2){
        startNum = num1;
        endNum = num2;
    }

    while(startNum <= endNum){
        if(primeGenerator(startNum) == true){
            Array.push(startNum);
            startNum = startNum + 1;
        }
        else{
            startNum = startNum + 1;
        }
    }
    document.getElementById('blue-text').innerHTML = 'There are ' + Array.length + ' prime numbers.';
    document.getElementById('red-text').innerHTML = Array;
}
}

function EvenGenerator(num1,num2){
    var startNum = 0;
    var endNum = 0;
    var Array = [];

    if (num1 > num2){
        startNum = num2;
        endNum = num1;
    }
    else if (num1 < num2){
        startNum = num1;
        endNum = num2;
    }
    
    while (startNum <= endNum){
        if(startNum % 2 === 0){
            Array.push(startNum)
            startNum = startNum + 1;
        }
        else{
            startNum = startNum + 1;
        }
    }
    document.getElementById('blue-text2').innerHTML = 'There are ' + Array.length + ' even numbers.';
    document.getElementById('red-text').innerHTML = Array;
    }

