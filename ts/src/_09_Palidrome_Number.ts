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
    let right: string | undefined, left: string | undefined
    while(true) {
        [right, left] = [str.pop(), str.shift()]
        if (right === undefined || left === undefined ) {
            break
        }
        if (left !== right) {
            return false
        }
    }
    return true
}
