const axios = require('axios');

async function convertCurrency(currency, amount) {
    try {
        const response = await axios.get(`https://api.frankfurter.app/latest?from=EUR&to=${currency}`);
        const rate = response.data.rates[currency];
        const convertedAmount = (rate * amount).toFixed(2);
        console.log(`${currency} kursas: ${rate}`);
        console.log(`${amount} EUR => ${convertedAmount} ${currency}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        console.log('Galite Rinktis vieną iš šių valiutų: AUD, BGN, BRL, CAD, CHF, CNY, CZK, DKK, NOK, GBP, HKD');
    }
}

// Get the command line arguments
const currency = process.argv[2];
const amount = process.argv[3];

// Call the function with the command line arguments
convertCurrency(currency, amount);