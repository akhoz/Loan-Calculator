const moneyFormat = (value) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'USD'
    })

    return formatter.format(value)
}



export {
    moneyFormat
}