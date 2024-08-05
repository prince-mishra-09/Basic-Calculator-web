let num1;
let num2;
let sym = null
let res;
let display =0;
// let screenValue;

document.querySelector(".screen").innerHTML = '0'

let clickbtn = function (value) {
    
    if (value[0] == '_' && !(value == "_=") && (num1)) {
        sym = value.charAt(1)
        display += sym;
        screenValue(display)
    }

    if ((sym == null) && (value == '.' || value <= 0 || value > 0)) {
        if (!num1) {
            num1 = `${value}`
            display = `${value}`
            screenValue(display)
        }
        else {
            num1 += `${value}`
            display += `${value}`
            screenValue(display)
        }

    }

    if (!(sym == null) && (value == '.' || value <= 0 || value > 0)) {
        if (!num2) num2 = `${value}`
        else num2 = num2 + `${value}`
        display += `${value}`;
        screenValue(display)
    }

    if (value == 'C') {
        num1 = ''
        num2 = ''
        sym = null
        res = 0;
        display = '0'
        screenValue(display)
    }
    if (value == 'd') {
        if (num1 && !sym) {
            num1 = num1.slice(0, -1)
        }

        if (sym && !num2) {
            sym = ''
            sym = null
        }

        if (num2 && sym && num1) {
            num2 = num2.slice(0, -1)
        }

        display = display.slice(0, -1)
        screenValue(display)
    }



    if (value == "_=") {
        if (sym == '*') {
            res = num1 * num2
        }
        if (sym == '/') {
            res = num1 / num2
        }
        if (sym == '+') {
            res = num1 + num2
        }
        if (sym == '-') {
            res = num1 - num2
        }
        if (sym == '%') {
            console.log("i'm in percent" + res);
            res = (num1 * num2) / 100
        }

        display += '='
        screenValue(display)
        display += res
        screenValue(display)
        num1 = res
        num2 = 0
        display = num1
        screenValue(display)
        res = ''
    }


    // for symbol storing


    console.log("num1 = " + num1);
    console.log("symbol = " + sym);
    console.log("num2 = " + num2);
    console.log("res = " + res);
    console.log(">>>>>>>history = " + display);

    function screenValue(input){
        document.querySelector(".screen").innerHTML = `${input}`
    }
}


