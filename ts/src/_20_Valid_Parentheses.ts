type Parentheses = '(' | ')' | '[' | ']' | '{' | '}'

function isValid(s: string) : boolean {
    const chArr = s.split('') as Parentheses[]
    const len = chArr.length
    const stack: Parentheses[] = []
    for (let i = 0; i <= len; i++) {
        const ch = chArr.shift()
        switch(ch) {
            case '(':
            case '[':
            case '{':
                stack.push(ch)
                break
            case ']':
                if (stack.pop() !== '[') return false
                break
            case ')':
                if (stack.pop() !== '(') return false
                break
            case '}':
                if (stack.pop() !== '{') return false
                break
        }
    }
    if (stack.length > 0) return false
    return true
}
