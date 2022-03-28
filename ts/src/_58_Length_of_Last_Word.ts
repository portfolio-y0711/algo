function lengthOfLastWord(s: string): number {
    return s.trim().split(' ').filter(c => c !== '').pop()!.length
}
