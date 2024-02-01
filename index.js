const URL =
    "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let dropselect = document.querySelectorAll(".drop select");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
const btn = document.querySelector("form button");
const msg = document.querySelector(".msg");
for (let select of dropselect) {
    for (let currCode in countryList) {
        let option = document.createElement("option");
        option.innerText = currCode;
        option.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            option.selected = "selected";
        } else if (select.name === "to" && currCode === "PKR") {
            option.selected = "selected";
        }

        select.append(option);
    }

    select.addEventListener("change", (evt) => {
        flag(evt.target);
    });
}

let flag = (element) => {
    let currCode = element.value;
    let countrycode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countrycode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

const exchange = async () => {
    let amount = document.querySelector(".amount input");
    let amVal = amount.value;
    if (amVal === "" || amVal <= 0) {
        amtVal = 0;
        amount.value = "0";
    }
    const u2 = `${URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(u2);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    let finalAmount = amVal * rate;
    msg.innerText = `${amVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
btn.addEventListener("click", (evt) => {
    evt.preventDefault();
    exchange();
});

window.addEventListener("load", () => {
    exchange();
});
function reset() {
    let input = document.querySelector(".amount input");
    input = 0;
}

















































// btn.addEventListener("click",async (evt) => {
//     evt.preventDefault();
//     let amount = document.querySelector(".amount input ");
//     let amountvalue = amount.value;
//     console.log(amountvalue);
//     if (amountvalue == "" || amountvalue < 1) {
//         amountvalue = 1;
//         amount.value = "1";
        
//     }
//     let url2 = `${url}/${fromCurr}/${toCurr.jason()}`;
//     let Api = await fetch(url2);
//     let data = await api.jason();
//     let rate = data[toCurr.lowerCase()];
//     let final = amout * rate;
//     msg.innerText = `${amountvalue} ${fromCurr.value} =${final} ${toCurr.value}`;
    
// })