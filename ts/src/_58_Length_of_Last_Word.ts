function lengthOfLastWord(s: string) {
    const target = s.trim()
    for (let i = 0; i < target.length -1; i++) {
        if (target[target.length -1 - i] === ' ') {
            return i
        }
    }
    return target.length
}
