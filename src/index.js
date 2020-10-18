const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = expr.toString();
    let exprToArrayLength = str.length / 10;
    let exprToArray = [];
    let result = "";
    let letter = "";
    let k = 0 , j = 0;
    while (k < str.length){
        let item = str.substring(k, k+10);

        if(j < exprToArrayLength){
            exprToArray [j] = item;
        }
        j++;
        k = k+10;
    }
    for(let i = 0; i < exprToArrayLength; i++){
      k = 0;
      let stack = [];
      codeLetter = exprToArray[i];
      if(codeLetter.startsWith('*')){
        result += " ";
        continue;
      }
      let codeArray = codeLetter.split('');
      k = codeArray.length;
      let count = 0;

      while(k){
        stack.push(codeArray[k-2] + codeArray[k-1]);
        k = k - 2;
        count ++;
      }

      if(stack.empty){
        continue;
      }
      let morseCode = "";
      for(let j = 0; j < 5; j++){
        let code = stack.pop();
        if(code.indexOf('1') < 0) {
          continue;
        }
        if(code === "10"){
          morseCode += ".";
        }
        if(code === "11"){
          morseCode += "-";
        }
      }
      result += MORSE_TABLE[morseCode];
    }
    return result;
}
module.exports = {
    decode
}