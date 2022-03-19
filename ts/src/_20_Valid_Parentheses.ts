type Parentheses = '(' | ')' | '[' | ']' | '{' | '}'

function isValid(s: string) : boolean {
    const chArr = s.split('') as Parentheses[]
    if (chArr.length === 1) return false
    let ch: Parentheses | undefined
    const stack: Parentheses[] = []
    while((ch = chArr.shift()) !== undefined) {
        switch(ch) {
            case '(':
                stack.push('(')
                break
            case '[':
                stack.push('[')
                break
            case '{':
                stack.push('{')
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
