function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    let discountValue = price * discountRate;
    return price - discountValue;
}

module.exports = {calculateDiscount};
