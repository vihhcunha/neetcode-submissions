class MinStack {
    stack: number[] = [];
    private minValues: number[] = [];

    constructor() {
        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if (this.minValues.length <= 0 || val <= this.minValues[this.minValues.length - 1])
            this.minValues.push(val);
    }

    /**
     * @return {void}
     */
    pop(): void {
        var top = this.top();
        if (top == this.minValues[this.minValues.length - 1])
            this.minValues.pop();

        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minValues[this.minValues.length - 1];
    }
}
