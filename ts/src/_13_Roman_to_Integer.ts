type Roman = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' |  'M'
type Token = 'I' | 'IV' | 'IX' | 'V' | 'X' | 'XL' | 'XC' | 'L' | 'C' | 'CD' | 'D' | 'CM' | 'M'

const symbolicMap = {
    'I': 1,
    'IV': 4,
    'IX': 9,
    'V': 5,
    'X': 10,
    'XL': 40,
    'XC': 90,
    'L': 50,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
}

function romanToInt(s: string): number {
    const romans = (s.split('') as Roman[])
    const len = romans.length
    const tokens: Token[] = []
    for (let i = 0; i < len; i++) {
       const ch = romans.shift() 
       switch(ch) {
        case 'I': 
            if (romans[0] === 'V' || romans[0] === 'X') {
               tokens.push('I' + romans.shift() as 'V' | 'X') 
               i++
            } else {
                tokens.push('I')
            }
            break
        case 'X': 
            if (romans[0] === 'L' || romans[0] === 'C') {
               tokens.push('X' + romans.shift() as 'L' | 'C') 
               i++
            } else {
               tokens.push('X')
            }
            break
        case 'C': 
            if (romans[0] === 'D' || romans[0] === 'M') {
               tokens.push('C' + romans.shift() as 'D' | 'M') 
               i++
            } else {
                tokens.push('C')
            }
            break
        default:
            tokens.push(ch!)
            break
        }
    }
    return tokens.reduce((acc, token) => acc + symbolicMap[token], 0)
}

