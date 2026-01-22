const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencyConvert = document.querySelector(".currency-convert")

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValuetoConvert = document.querySelector(".currency-value-to-convert")
    const currencyValuetoConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL")
        .then(response => response.json())

    console.log(data)

    const valor = {
        dolar: data.USDBRL.high,
        euro: data.EURBRL.high,
        bitcoin: data.BTCBRL.high,
        libra: data.GBPBRL.high,
        real: 1
    }


    const valorInReal = inputCurrencyValue * valor[currencyConvert.value]


    if (currencySelect.value == "dolar") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorInReal / valor.dolar)
    }

    if (currencySelect.value == "euro") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorInReal / valor.euro)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(valorInReal / valor.bitcoin)
    }

    if (currencySelect.value == "libra") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(valorInReal / valor.libra)
    }

    if (currencySelect.value == "real") {
        currencyValuetoConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valorInReal / valor.real)
    }


    if (currencyConvert.value == "real") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencyConvert.value == "dolar") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencyConvert.value == "euro") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencyConvert.value == "libra") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencyConvert.value == "bitcoin") {
        currencyValuetoConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }
}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./img/bitcoin.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImage.src = "./img/libra.png"
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./img/real.png"
    }

    convertValues()
}


function changeCurrencyOrigem() {

    const currencyNameOrigem = document.getElementById("currency-name-origem")
    const currencyImageOrigem = document.querySelector(".currency-image-origem")

    if (currencyConvert.value == "real") {
        currencyNameOrigem.innerHTML = "Real Brasileiro"
        currencyImageOrigem.src = "./img/real.png"
    }

    if (currencyConvert.value == "dolar") {
        currencyNameOrigem.innerHTML = "Dólar Americano"
        currencyImageOrigem.src = "./img/dolar.png"
    }

    if (currencyConvert.value == "euro") {
        currencyNameOrigem.innerHTML = "Euro"
        currencyImageOrigem.src = "./img/euro.png"
    }

    if (currencyConvert.value == "bitcoin") {
        currencyNameOrigem.innerHTML = "Bitcoin"
        currencyImageOrigem.src = "./img/bitcoin.png"
    }

    if (currencyConvert.value == "libra") {
        currencyNameOrigem.innerHTML = "Libra Esterlina"
        currencyImageOrigem.src = "./img/libra.png"
    }

    convertValues()
}


currencyConvert.addEventListener("change", changeCurrencyOrigem)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
