
function strStr_1(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let matched = true
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                matched = false
            }
        }
        if (matched) return i
    }
    return -1 
}


function strStr_2(haystack: string, needle: string): number {
    outer:
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                continue outer
            }
        }
        return i
    }
    return -1 
}
