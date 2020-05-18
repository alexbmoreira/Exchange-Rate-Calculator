const currency_from = document.getElementById("currency_from");
const amount_from = document.getElementById("amount_from");
const currency_to = document.getElementById("currency_to");
const amount_to = document.getElementById("amount_to");

const rate = document.getElementById("rate");
const swap = document.getElementById("swap");

caclulate();

currency_from.addEventListener("change", caclulate);
amount_from.addEventListener("input", caclulate);
currency_to.addEventListener("change", caclulate);

swap.addEventListener("click", function (e)
{
    const temp = currency_from.value;
    currency_from.value = currency_to.value;
    currency_to.value = temp;
    caclulate();
});

function caclulate()
{
    const from = currency_from.value;
    const to = currency_to.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${from}`)
        .then(res => res.json())
        .then(data =>
        {
            amount_to.innerText = (amount_from.value * data.rates[to]).toFixed(2);

            rate.innerText = `1.00 ${from} ~ ${(data.rates[to]).toFixed(2)} ${to}`
        });
}
