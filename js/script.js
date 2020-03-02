// number of product(increment-decrement) section
const sellDec = document.getElementById("sell-dec");
const sellInc = document.getElementById("sell-inc");
const caseDec = document.getElementById("case-dec");
const caseInc = document.getElementById("case-inc");

function sellDecs() {
    const sellDecId = "sellDecVal";
    const sellDec = getInputValueNumber("sellDecVal");
    const balanceDec = getInputTextNumber("sellCurrentBalance");
    console.log(sellDec);
    console.log(balanceDec);

    getSpanText(sellDecId, "sellDecVal", sellDec);
    getBalanceText(sellDecId, "sellCurrentBalance", balanceDec);
}
function sellIncs() {
    const sellIncId = "sellIncVal";
    const sellInc = getInputValueNumber("sellDecVal");
    const balanceInc = getInputTextNumber("sellCurrentBalance");
    console.log(sellInc);
    console.log(balanceInc);

    getSpanText(sellIncId, "sellDecVal", sellInc);
    getBalanceText(sellIncId, "sellCurrentBalance", balanceInc);
}
function caseDecs() {
    const caseDecId = "caseDecVal";
    const caseDec = getInputValueNumber("caseDecVal");
    const balanceDec = getInputTextNumber("caseCurrentBalance");
    console.log(caseDec);
    console.log(balanceDec);

    getSpanText(caseDecId, "caseDecVal", caseDec);
    getBalanceText(caseDecId, "caseCurrentBalance", balanceDec);
}
function caseIncs() {
    const caseIncId = "caseIncVal";
    const caseInc = getInputValueNumber("caseDecVal");
    const balanceInc = getInputTextNumber("caseCurrentBalance");
    console.log(caseInc);
    console.log(balanceInc);

    getSpanText(caseIncId, "caseDecVal", caseInc);
    getBalanceText(caseIncId, "caseCurrentBalance", balanceInc);
}



function getInputValueNumber(id) {
    console.log(id);
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function getInputTextNumber(id) {
    console.log(id);
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}



function getSpanText(sellId, id, currentNumber) {
    if (sellId == "sellDecVal") {
        console.log(currentNumber);
        const totalAmount = currentNumber - 1;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            return document.getElementById(id).value = 0;
        }
        document.getElementById(id).value = totalAmount;
    }
    else if (sellId == "sellIncVal") {
        console.log(currentNumber);
        const totalAmount = currentNumber + 1;
        ckeckNumber = Math.sign(totalAmount);
        document.getElementById(id).value = totalAmount;
    }
    else if (sellId == "caseDecVal") {
        console.log(currentNumber);
        const totalAmount = currentNumber - 1;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            return document.getElementById(id).value = 0;
        }
        document.getElementById(id).value = totalAmount;
    }
    else if (sellId == "caseIncVal") {
        console.log(currentNumber);
        const totalAmount = currentNumber + 1;
        document.getElementById(id).value = totalAmount;
    }
}



function getBalanceText(sellId, balanceId, balanceNumber) {
    if (sellId == "sellDecVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText;
        const subtotalNumber = parseFloat(subtotal);
        console.log("subtotalNumber:", subtotalNumber);

        const tax = document.getElementById("tax").innerText;
        const taxNumber = parseFloat(tax);
        console.log("taxNumber:", taxNumber);

        const caseCurrentBalance = document.getElementById("caseCurrentBalance").innerText;
        const caseCurrentBalanceNumber = parseFloat(caseCurrentBalance);
        console.log("caseCurrentBalanceNumber:", caseCurrentBalanceNumber);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber - 1000;
        console.log("totalAmount:", totalAmount);

        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            document.getElementById(balanceId).innerText = 0;
            if (totalAmount == 0) {
                document.getElementById("subtotal").innerText = subtotalNumber - 1000;
                document.getElementById("tax").innerText = taxNumber - 5;
            }
        }
        else {
            document.getElementById(balanceId).innerText = totalAmount;
            document.getElementById("subtotal").innerText = subtotalNumber - 1000;
            document.getElementById("tax").innerText = taxNumber - 5;
        }
        if (subtotalNumber == 1059) {
            document.getElementById("subtotal").innerText = subtotalNumber - 1000;
            document.getElementById("tax").innerText = taxNumber - 5;
        }
        if (caseCurrentBalanceNumber == 0 && totalAmount == 0) {
            console.log("caseCurrentBalanceNumber: && totalAmount: ", caseCurrentBalanceNumber, totalAmount);
            document.getElementById("subtotal").innerText = 0;
            document.getElementById("tax").innerText = 0;
        }
    }
    else if (sellId == "sellIncVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText;
        const subtotalNumber = parseFloat(subtotal);

        const tax = document.getElementById("tax").innerText;
        const taxNumber = parseFloat(tax);
        console.log("taxNumber:", taxNumber);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber + 1000;
        document.getElementById(balanceId).innerText = totalAmount;
        document.getElementById("subtotal").innerText = subtotalNumber + 1000;
        document.getElementById("tax").innerText = taxNumber + 5;
    }
    else if (sellId == "caseDecVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText;
        const subtotalNumber = parseFloat(subtotal);
        console.log("subtotalNumber:", subtotalNumber);

        const sellCurrentBalance = document.getElementById("sellCurrentBalance").innerText;
        const sellCurrentBalancelNumber = parseFloat(sellCurrentBalance);
        console.log("sellCurrentBalancelNumber:", sellCurrentBalancelNumber);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber - 59;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            document.getElementById(balanceId).innerText = 0;
            if (totalAmount == 0) {
                document.getElementById("subtotal").innerText = subtotalNumber - 59;
            }
        }
        else {
            document.getElementById(balanceId).innerText = totalAmount;
            document.getElementById("subtotal").innerText = subtotalNumber - 59;
        }
        if (subtotalNumber == 1059) {
            document.getElementById("subtotal").innerText = subtotalNumber - 59;
        }
        if (sellCurrentBalancelNumber == 0 && totalAmount == 0) {
            console.log("sellCurrentBalancelNumber: && totalAmount: ", sellCurrentBalancelNumber, totalAmount);
            document.getElementById("subtotal").innerText = 0;
        }
    }
    else if (sellId == "caseIncVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText;
        const subtotalNumber = parseFloat(subtotal);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber + 59;
        document.getElementById(balanceId).innerText = totalAmount;
        document.getElementById("subtotal").innerText = subtotalNumber + 59;
    }
}



// calculation of total balance section
sellDec.addEventListener("click", sellDecs);
sellInc.addEventListener("click", sellIncs);
caseDec.addEventListener("click", caseDecs);
caseInc.addEventListener("click", caseIncs);

function totalBalance(event) {
    event.preventDefault();

    const currentSubtotal = document.getElementById("subtotal").innerText;
    const currentSubtotalNumber = parseFloat(currentSubtotal);
    document.getElementById("subtotal").innerText = currentSubtotalNumber;
    console.log(currentSubtotalNumber);

    const currentTax = document.getElementById("tax").innerText;
    const currentTaxNumber = parseFloat(currentTax);
    document.getElementById("tax").innerText = currentTaxNumber;
    console.log(currentTaxNumber);


    const totalAmounts = currentSubtotalNumber + currentTaxNumber;
    document.getElementById("total").innerText = totalAmounts;

    if (currentSubtotalNumber == 0) {
        document.getElementById("message").innerText = "Opps !!! Your Cart is Empty.";
    }
    else {
        document.getElementById("message").innerText = "For total balance, please click this Check Out Button.";
    }
}
checkOut.addEventListener("click", totalBalance);



// after cart deleting section
const sellCrossBtn = document.getElementById("sellCrossBtn");
const caseCrossBtn = document.getElementById("caseCrossBtn");

function sellCaseCrossBtn(event) {
    var elementIds = getId(event.target.id);
    console.log(elementIds);

    elementIds.style.display = "none";
    setValue();
}

function getId(id) {
    var id = id;

    if (id == "sellCrossBtn") {
        console.log(id);
        return document.getElementById("sell-area");
    }
    console.log(id);
    return document.getElementById("case-area");
}

function setValue() {
    const subtotal = document.getElementById("subtotal").innerText;
    const subtotalNumber = parseFloat(subtotal);
    console.log("subtotalNumber:", subtotalNumber);

    const tax = document.getElementById("tax").innerText;
    const taxNumber = parseFloat(tax);
    console.log("taxNumber:", taxNumber);

    const sellCurrentBalance = document.getElementById("sellCurrentBalance").innerText;
    const sellCurrentBalancelNumber = parseFloat(sellCurrentBalance);
    console.log("sellCurrentBalancelNumber:", sellCurrentBalancelNumber);

    const caseCurrentBalance = document.getElementById("caseCurrentBalance").innerText;
    const caseCurrentBalanceNumber = parseFloat(caseCurrentBalance);
    console.log("caseCurrentBalanceNumber:", caseCurrentBalanceNumber);

    const total = document.getElementById("total").innerText;
    const totalNumber = parseFloat(total);
    console.log("totalNumber:", totalNumber);

    if (event.target.id == "sellCrossBtn") {
        document.getElementById("subtotal").innerText = subtotalNumber - sellCurrentBalance;
        document.getElementById("tax").innerText = 0;
        if (totalNumber !== 0) {
            document.getElementById("total").innerText = subtotalNumber - sellCurrentBalance;
            document.getElementById("tax").innerText = 0;
        }
    }
    else if (event.target.id == "caseCrossBtn") {
        document.getElementById("subtotal").innerText = subtotalNumber - caseCurrentBalanceNumber;
        if (totalNumber !== 0) {
            document.getElementById("total").innerText = subtotalNumber - caseCurrentBalanceNumber;
        }
    }
}
sellCrossBtn.addEventListener("click", sellCaseCrossBtn);
caseCrossBtn.addEventListener("click", sellCaseCrossBtn);