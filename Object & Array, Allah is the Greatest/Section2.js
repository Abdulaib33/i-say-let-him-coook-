// 🔁 SECTION 2: ARRAY METHODS MASTERY

// 5. map() exercise:
    // Given prices: [100, 200, 300], return array with 10% tax added.
    // => [110, 220, 330]


const prices = [100, 200, 3000]

const pricesWithTax = prices.map(price => price * 1.1)
console.log(pricesWithTax)