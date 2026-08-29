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
            let firstDigit = Math.floor(x / div);
            let lastDigit = Math.floor(x % 10);

            if (firstDigit != lastDigit) {
                return false;
            }

            x = Math.floor((x % div) / 10);
            div = div / 100;
        }
        return true;
    }
}
