function calculate(){

    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const op = document.getElementById("op").value;

    let result;

    if(op === "add"){
        result = a + b;
    }
    else if(op === "sub"){
        result = a - b;
    }
    else if(op === "mul"){
        result = a * b;
    }
    else if(op === "div"){
        result = a / b;
    }

    document.getElementById("result").innerText =
        "Result: " + result;

}