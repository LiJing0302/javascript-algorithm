
//!给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
var partition = function (s) {
    let result = []
    let path = []
    function backTracking(s, startIndex) {
        if (startIndex >= s.length) {
            result.push([...path])
            return
        }
        for (let i = startIndex; i < s.length; i++) {
            console.log(s.substr(startIndex, i-startIndex+ 1))
            if (!checkPalindrome(s.substr(startIndex, i-startIndex+ 1))) {
                continue
            } else {
                path.push(s.substr(startIndex, i-startIndex + 1))
            }
            backTracking(s, i + 1)
            path.pop()
        }
    }
    backTracking(s, 0)
    return result
};
function checkPalindrome(s) {
    debugger
    if (s.length === 1) return true
    else if (s.length > 1) {
        for (let i = 0; i < Math.floor(s.length); i++) {
            if (s[i] != s[s.length - 1 - i]) {
                return false
            }
        }
        return true
    }
}


console.log(partition('aab'));