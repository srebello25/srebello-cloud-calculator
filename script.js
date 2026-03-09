async function calculate() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const op = document.getElementById("op").value;

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("result").innerText = "Enter both numbers";
        return;
    }

    try {
        const response = await fetch("https://api.eco-shop.shop/api/calc", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                a: a,
                b: b,
                op: op
            })
        });

        const data = await response.json();

        if (data.result !== undefined) {
            document.getElementById("result").innerText = "Result: " + data.result;
        } else {
            document.getElementById("result").innerText = "Error";
        }
    } catch (error) {
        document.getElementById("result").innerText = "Cannot connect to API";
    }
}