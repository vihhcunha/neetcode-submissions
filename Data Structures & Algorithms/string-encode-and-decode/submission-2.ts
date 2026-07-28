class Solution {
    
    private static delimiter: string = "ç";
    private static letterDelimiter: string = "Ç";

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const result: string[] = [];

        if (strs.length <= 0)
            return " ";

        for (let i = 0; i <= strs.length - 1; i++){
            for (let j = 0; j <= strs[i].length - 1; j++){
                result.push(strs[i][j].charCodeAt(0).toString());
                if (j < strs[i].length - 1)
                    result.push(Solution.letterDelimiter);
            }
            if (i < strs.length - 1)
                result.push(Solution.delimiter);
        }

        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        console.log(str)
        if (str == " ")
            return [];

        var words = str.split(Solution.delimiter);
        for (let i = 0; i <= words.length - 1; i++){
            const wordArray = words[i].split(Solution.letterDelimiter);
            var word = "";
            console.log(wordArray)
            for (let j = 0; j <= wordArray.length - 1; j++){
                if (wordArray[j] == ''){
                    word = "";
                    break;
                }
                let letter = String.fromCharCode(Number(wordArray[j]));
                word = letter == null ? "" : word + letter;
            }
            result.push(word);
        }
        return result;
    }
}
