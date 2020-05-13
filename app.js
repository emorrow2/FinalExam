function takeNums(){

    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1)){
        document.getElementById('dope1').innerHTML = 'Number 1 Input Invalid, please try again.';
    }
    if (isNaN(num2)){
        document.getElementById('dope2').innerHTML = 'Number 2 Input Invalid, please try again.';
    }
    else if (num1 < 2 || num1 > 100){
        document.getElementById('dope1').innerHTML = 'Number 1 Input Invalid, please try again.';
    }
    else if (num2 < 2 || num2 > 100){
    document.getElementById('dope2').innerHTML = 'Number 2 Input Invalid, please try again.';
    }

    else if(isNan(num1)){
        document.getElementById('dope1').innerHTML = 'Number 1 Input Invalid, please try again.';
    }
    else if (num1 >= 2 && num1 <= 100.00 && num2 >= 2 && num2 <= 100.00){
        arrayBuilder(num1, num2);
        document.getElementById('dope').innerHTML = ''
        document.getElementById('dope1').innerHTML = ''
        document.getElementById('dope2').innerHTML = ''
    }
} 