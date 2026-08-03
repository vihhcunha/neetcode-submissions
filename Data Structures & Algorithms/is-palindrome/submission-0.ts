class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            console.log(s[i])
            console.log(s[j])
            console.log("")
            if (!this.isAlphanumeric(s[i])){
                i++;
                continue;
            }
            if (!this.isAlphanumeric(s[j])){
                j--;
                continue;
            }
            if (s[i].toLowerCase() != s[j].toLowerCase()){
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    private isAlphanumeric(s: string){
        const code = s.charCodeAt(0);
        if (
            !(code > 47 && code < 58) &&  // numeric (0-9)
            !(code > 64 && code < 91) &&  // upper alpha (A-Z)
            !(code > 96 && code < 123)    // lower alpha (a-z)
            ) {
            return false;
        }
        return true;
    }
}
