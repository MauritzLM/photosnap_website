// pricing toggle

// prices data
const prices = {
    monthly: [
        '19.00',
        '39.00',
        '99.00'
    ],
    yearly: [
        '190.00',
        '390.00',
        '990.00'
    ]
}

// if checked = yearly / unchecked = monthly
// select toggle input(checkbox) / all price elements / all interval elements
const toggle = document.querySelector('.toggle .toggle-checkbox');
const pricesArr = document.querySelectorAll('.option .price');
const intervalsArr = document.querySelectorAll('.option .interval');

// when input changes
toggle.addEventListener('change', (e) => {

    if (toggle.checked) {
        for (let i = 0; i < pricesArr.length; i++) {
            pricesArr[i].textContent = `$ ${prices.yearly[i]}`;
            intervalsArr[i].textContent = 'per year';
        }
    } else {
        for (let i = 0; i < pricesArr.length; i++) {
            pricesArr[i].textContent = `$ ${prices.monthly[i]}`;
            intervalsArr[i].textContent = 'per month';
        }
    }
});


