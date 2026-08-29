class Solution {
    /**
     * @param {number} x
     * @return {boolean}
     */
    isPalindrome(x: number): boolean {
        if (x < 0)
            return false;

        let div = 1;
        while (x >= div * 10){
            div = div * 10;
        }
        
        while (x !== 0) {
            let lastDigit = Math.trunc(x % 10);
            let firstDigit = Math.trunc(x / div);

            if (lastDigit != firstDigit)
                return false;

            x = Math.trunc((x % div) / 10);
            div = div / 100;
        }
        return true;
    }
}
