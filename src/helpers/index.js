const moneyFormat = (value) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'USD'
    })

    return formatter.format(value)
}

const calculateTotalToPay = (amount, term) => {
    let totalToPay = 0

    if (amount <= 1000) {
        totalToPay = amount * 1.25
    } else if (amount > 1000 && amount <= 5000) {
        totalToPay = amount * 1.20
    } else {
        totalToPay = amount * 1.15
    }

    if (term === 6) {
        totalToPay *= 1.05
    } else if (term === 12) {
        totalToPay *= 1.10
    } else {
        totalToPay *= 1.30
    }

    return totalToPay
}
export {
    moneyFormat,
    calculateTotalToPay
}