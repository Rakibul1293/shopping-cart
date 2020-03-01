const sellCrossBtn = document.getElementById("sellCrossBtn");
const caseCrossBtn = document.getElementById("caseCrossBtn");
const val = 0;

function sellCaseCrossBtn(event) {
    var elementIds = getId(event.target.id);
    console.log(elementIds);

    elementIds.style.display = "none";
    setZero(event);
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

function setZero(event) {
    var element = event.target;
    var elementId = element.id;
    console.log(elementId);

    document.getElementById("subtotal").innerText = "$0";
    document.getElementById("tax").innerText = "$0";
    document.getElementById("total").innerText = "$0";
}
sellCrossBtn.addEventListener("click", sellCaseCrossBtn);
caseCrossBtn.addEventListener("click", sellCaseCrossBtn);



const sellDec = document.getElementById("sell-dec");
const sellInc = document.getElementById("sell-inc");
const caseDec = document.getElementById("case-dec");
const caseInc = document.getElementById("case-inc");

function sellDecs(event) {
    const sellDecId = "sellDecVal";
    const sellDec = getInputValueNumber("sellDecVal");
    const balanceDec = getInputTextNumber("sellCurrentBalance");
    console.log(sellDec);
    console.log(balanceDec);

    getSpanText(sellDecId, "sellDecVal", sellDec);
    getBalanceText(sellDecId, "sellCurrentBalance", balanceDec);
}
function sellIncs(event) {
    const sellIncId = "sellIncVal";
    const sellInc = getInputValueNumber("sellDecVal");
    const balanceInc = getInputTextNumber("sellCurrentBalance");
    console.log(sellInc);
    console.log(balanceInc);

    getSpanText(sellIncId, "sellDecVal", sellInc);
    getBalanceText(sellIncId, "sellCurrentBalance", balanceInc);
}
function caseDecs(event) {
    const caseDecId = "caseDecVal";
    const caseDec = getInputValueNumber("caseDecVal");
    const balanceDec = getInputTextNumber("caseCurrentBalance");
    console.log(caseDec);
    console.log(balanceDec);

    getSpanText(caseDecId, "caseDecVal", caseDec);
    getBalanceText(caseDecId, "caseCurrentBalance", balanceDec);
}
function caseIncs(event) {
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
        return document.getElementById(id).value = totalAmount;
    }
    else if (sellId == "sellIncVal") {
        console.log(currentNumber);
        const totalAmount = currentNumber + 1;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            return document.getElementById(id).value = 0;
        }
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
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            return document.getElementById(id).value = 0;
        }
        document.getElementById(id).value = totalAmount;
    }
}



function getBalanceText(sellId, balanceId, balanceNumber) {
    if (sellId == "sellDecVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText
        const subtotalNumber = parseFloat(subtotal);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber - 1000;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            document.getElementById(balanceId).innerText = 0;
            document.getElementById("subtotal").innerText = 0;
        }
        document.getElementById(balanceId).innerText = totalAmount;
        document.getElementById("subtotal").innerText = subtotalNumber;
    }
    else if (sellId == "sellIncVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText
        const subtotalNumber = parseFloat(subtotal);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber + 1000;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            document.getElementById(balanceId).innerText = 0;
            document.getElementById("subtotal").innerText = 0;
        }
        document.getElementById(balanceId).innerText = totalAmount;
        document.getElementById("subtotal").innerText = subtotalNumber;
    }
    else if (sellId == "caseDecVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText
        const subtotalNumber = parseFloat(subtotal);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber - 59;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            document.getElementById(balanceId).innerText = 0;
        }
        document.getElementById(balanceId).innerText = totalAmount;
        document.getElementById("subtotal").innerText = subtotalNumber - 59;
    }
    else if (sellId == "caseIncVal") {
        console.log(balanceNumber);
        const subtotal = document.getElementById("subtotal").innerText
        const subtotalNumber = parseFloat(subtotal);

        const current = document.getElementById(balanceId).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = currentNumber + 59;
        ckeckNumber = Math.sign(totalAmount);
        if (ckeckNumber == -1 || ckeckNumber == 0) {
            document.getElementById(balanceId).innerText = 0;
        }
        document.getElementById(balanceId).innerText = totalAmount;
        document.getElementById("subtotal").innerText = subtotalNumber + 59;
    }
}

sellDec.addEventListener("click", sellDecs);
sellInc.addEventListener("click", sellIncs);
caseDec.addEventListener("click", caseDecs);
caseInc.addEventListener("click", caseIncs);


// function totalBalance(event) {
// event.preventDefault();
// const subtotal = document.getElementById("subtotal");
// const currentSubtotal = document.getElementById("subtotal").innerText;
// const currentSubtotalNumber = parseFloat(currentSubtotal);
// document.getElementById("subtotal").innerText = currentSubtotalNumber;
// console.log(currentSubtotalNumber);

// // const tax = document.getElementById("tax");
// const currentTax = document.getElementById("tax").innerText;
// const currentTaxNumber = parseFloat(currentTax);
// document.getElementById("tax").innerText = currentTaxNumber;
// console.log(currentTaxNumber);

// // const total = document.getElementById("total");
// const currentTotal = document.getElementById("total").innerText;
// const currentTotalNumber = parseFloat(currentTotal);
// document.getElementById("total").innerText = currentTotalNumber;
// console.log(currentTotalNumber);

// const totalAmounts = currentSubtotalNumber + currentTaxNumber + currentTotalNumber;
// document.getElementById("total").innerText = totalAmounts;
// }
// checkOut.addEventListener("click", totalBalance);


