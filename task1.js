/* 
Task description
You are given an array S consisting of N strings. Every string is of the same length M. Your task is to find a pair of 
strings in array S, such that there exists a position in which both of the strings have the same letter. Both the index in array S
 and the positions in the strings are numbered from zero.
For example, given S = ["abc", "bca", "dbe"], string 0 ("abc") and string 2 ("dbe") have the same letter 'b' in position 1. On the other hand, for strings "abc" and "bca" there does not exist a position in which they have the same letter.
Write a function:
function solution(S);
that, given a zero-indexed array S of N strings, returns an array describing a pair of strings from S which share a common letter at some index. If there is no such pair, the function should return an empty array. If there is more than one correct answer, the function can return any of them.
The result should be represented as an array containing three integers. The first two integers are the indexes in S of the strings belonging to the pair. The third integer is the position of the common letter.
For S = ["abc", "bca", "dbe"], as above, the result array should be represented as [0, 2, 1]. Another correct answer is [2, 0, 1], as the order of indexes of strings does not matter.
Examples:
1. Given: S = ["abc", "bca", "dbe"], your function may return [0, 2, 1] as described above.
2. Given: S = ["zzzz", "ferz", "zdsr", "fgtd"], your function may return [0, 1, 3]. Both "zzzz" and "ferz" have 'z' in position 3. The function may also return [1, 3, 0], which would reflect strings "ferz", "fgtd" and letter 'f'.
3. Given A = ["gr", "sd", "rg"], your function should return []. There is no pair of strings that fulfils the criteria.
4. Given A = ["bdafg", "ceagi"], your function may return [0, 1, 2].
Write an efficient algorithm for the following assumptions:
N is an integer within the range [1..30,000];
M is an integer within the range [1..2,000];
each element of S consists only of lowercase English letters (a-z);
N * M ≤ 30,000
*/
function solution(S) {
    // Iterate through each string in the array
    for (let i = 0; i < S.length; i++) {
        const s1 = S[i];
        
        // Iterate through the rest of the strings in the array
        for (let j = i + 1; j < S.length; j++) {
            const s2 = S[j];
            
            // Iterate through each character position in the strings
            for (let k = 0; k < s1.length; k++) {
                // If the characters at the current position in both strings are equal
                if (s1[k] === s2[k]) {
                    // Return the indexes of the strings and the position of the common letter
                    return [i, j, k];
                }
            }
        }
    }
    
    // If no pair of strings shares a common letter, return an empty array
    return [];
}

// Example usage
const S = ["abc", "bca", "dbe"]
console.log(solution(S)); 
const S2 = ["zzzz", "ferz", "zdsr", "fgtd"];
console.log(solution(S2)); 
const S3 = ["gr", "sd", "rg"];
console.log(solution(S3));
const S4 = ["bdafg", "ceagi"];
console.log(solution(S4));