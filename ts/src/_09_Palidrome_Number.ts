function isPalindrome_1(x: number): boolean {
    const str = x.toString()
    for (let i = 0; i <= Math.floor((str.length - 1) / 2); i++ ) {
        if (str[i] !== str[(str.length - 1 - i)]) {
            return false
        }
    }
    return true
}

function isPalindrome_2(x: number): boolean {
    const str = x.toString().split('')
    while(true) {
        const right = str.pop()
        const left = str.shift()
        if (right === undefined || left === undefined ) {
            break
        }
        if (left !== right) {
            return false
        }
    }
    return true
}
