// before
function localShippingRules(country) {
    const data = countryData.shippingRules[country];
    if(data) return new ShippingRules(data);
    else return -23;
}
if(status < 0) errorList.push({order: orderData, errorCode: status});

//after
try{
    calculateShippingCosts(orderData);
}catch (e) {
    if(e instanceof OrderProcessingError)
        errorList.push({order: orderData, errorCode: e.code});
    else
        throw e;
}