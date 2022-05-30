class MinStack {
    list: number[]
    min: number
    constructor() {
        this.list = []
        this.min = Infinity
    }

    push(val: number): void {
        this.list.push(val)
        this.min = val < this.min ? val : this.min
    }

    pop(): void {
        if ((this.list.pop()) === this.min) {
            this.min = this.list.reduce((min, curr) => curr < min ? curr : min, Infinity) 
        }
    }

    top(): number {
       return this.list[this.list.length - 1] 
    }

    getMin(): number {
        return this.min
    }
}

let minStack = new MinStack()
console.log(minStack)
minStack.push(-1)
console.log(minStack)
minStack.push(0)
console.log(minStack)
minStack.push(-3)
console.log(minStack)
minStack.getMin()
console.log(minStack)
minStack.pop()
console.log(minStack)
minStack.top()
console.log(minStack)
minStack.getMin()
console.log(minStack)
