type Roman = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M'

function romanToInt(s: string): number {
    const mapSymbolicToNum = (ch: Roman) => {
        const symbolicMap = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000,
        }
        return symbolicMap[ch]
    }
    const nums = (s.split('') as Roman[]).map(mapSymbolicToNum)
    if (nums.length === 1) {
       return nums[0]
    }
    let i = 0, sum = 0
    while (i < nums.length) {
        const left = nums[i]
        const right = nums[i + 1]
        if (left < right) {
            sum += right - left
            i++
        } else {
            sum += left
        }
        i++
    }
    return sum
}

