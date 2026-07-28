class Solution {
    
    private static delimiter: string = "#";

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        var result: string = "";

        for (let i = 0; i <= strs.length - 1; i++){
            result = result + strs[i].length + Solution.delimiter + strs[i];
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];

        var i = 0;
        while (i <= str.length - 1){
            var countStr = "";
            while (str[i] != Solution.delimiter){
                countStr = countStr + str[i];
                i++;        
            }
            let count = Number(countStr);
            i++;
            if (count == 0){
                result.push("");
                continue;
            }
            result.push(str.substring(i, i + count));
            i += count;
        }
        return result;
    }
}
