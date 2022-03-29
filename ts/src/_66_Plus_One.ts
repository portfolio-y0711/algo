function plusOne(digits: number[]): number[] {
    const result = []
    let carry = 1
    while (true) {
        const digit = digits.pop()
        if (digit === undefined) {
            if (carry > 0) {
                result.push(carry)
            }
            break
        }
        if (digit + carry === 10 ) {
            result.push(0)
            carry = 1
        } else {
            result.push(digit + carry)
            carry = 0
        }
    }
    return result.reverse()
}

