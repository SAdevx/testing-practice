function caesarCipher(str,shift_factor){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        if(str.toLowerCase().charCodeAt(i) >= 97 && str.toLowerCase().charCodeAt(i) <= 122){
            let n = String.fromCharCode(((str.toLowerCase().charCodeAt(i) + shift_factor) - 'a'.charCodeAt(0)) % 26 + 97);
            newStr += isUpper(str[i])? n.toUpperCase() : n;
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

function isUpper(ch){
    if(ch === ch.toUpperCase()) return true;
    return false;
}

export {caesarCipher};