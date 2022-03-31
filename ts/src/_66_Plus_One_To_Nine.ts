function plusOneToNine(digits: number[], oneToNine: number): number[] {
    const result = []
    let carry = oneToNine
    while (true) {
        const digit = digits.pop()
        if (digit === undefined) {
            if (carry > 0) {
                result.push(carry)
            }
            break
        }
        if (digit + carry >= 10 ) {
            result.push(digit + carry - 10)
            carry = 1
        } else {
            result.push(digit + carry)
            carry = 0
        }
    }
    return result.reverse()
}


console.log(plusOneToNine([1, 2, 2], 9))