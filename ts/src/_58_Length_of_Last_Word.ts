function lengthOfLastWord(s: string) {
    const target = s.trim()
    let result: number | undefined
    for (let i = 0; i < target.length -1; i++) {
        if (target[target.length -1 - i] === ' ') {
            return i
        }
    }
    return result ?? target.length
}
