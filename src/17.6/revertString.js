export function revertString(str) {
    let result = '';
    if (typeof str === 'string') {
        for (let i = str.length -1; i >= 0; i--) {
            result += str[i];
        }
    }
    return result;
}