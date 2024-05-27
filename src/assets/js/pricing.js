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
const monthlyLabel = document.querySelector('.toggle .monthly');
const yearlyLabel = document.querySelector('.toggle .yearly');

// when input changes
toggle.addEventListener('change', (e) => {
    // checked
    if (toggle.checked) {
        for (let i = 0; i < pricesArr.length; i++) {
            pricesArr[i].textContent = `$ ${prices.yearly[i]}`;
            intervalsArr[i].textContent = 'per year';
        }
        yearlyLabel.classList.add('cs-active');
        monthlyLabel.classList.remove('cs-active');
    }
    // unchecked 
    else {
        for (let i = 0; i < pricesArr.length; i++) {
            pricesArr[i].textContent = `$ ${prices.monthly[i]}`;
            intervalsArr[i].textContent = 'per month';
        }
        yearlyLabel.classList.remove('cs-active');
        monthlyLabel.classList.add('cs-active');
    }
});


