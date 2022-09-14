document.addEventListener('DOMContentLoaded', () => {
    localStorage.clear();
    let inputString = "";
    let key = "";
    function getInput() {
        let userInput = document.getElementById('inputString');
        let userKey = document.getElementById('key');
        if (userInput.value !== "" || userKey.value !== "") {
            localStorage.setItem("input", userInput.value);
            localStorage.setItem("key", userKey.value);
        }
        userInput.value = "";
        userKey.value = "";
        inputString = localStorage.getItem('input');
        key = localStorage.getItem('key');
    }
    let encryptButton = document.getElementById('encrypt');
    let decryptButton = document.getElementById('decrypt');
    encryptButton.addEventListener('click', () => {
        getInput();
        if (!inputString || !key)
            return;
        let output = encryptString(inputString, parseInt(key));
        console.log(output);
        let inputElement = document.getElementById('input');
        let outputElement = document.getElementById('output');
        let resElement = document.getElementById('result');
        inputElement.innerHTML = inputString;
        outputElement.innerHTML = output;
        resElement.classList.remove('hide');
        localStorage.setItem("input", output);
        localStorage.setItem("key", key);
    });
    decryptButton.addEventListener('click', () => {
        getInput();
        if (!inputString || !key)
            return;
        let output = decryptString(inputString, parseInt(key));
        console.log(output);
        let inputElement = document.getElementById('input');
        let outputElement = document.getElementById('output');
        let resElement = document.getElementById('result');
        inputElement.innerHTML = inputString;
        outputElement.innerHTML = output;
        resElement.classList.remove('hide');
        localStorage.setItem("input", output);
        localStorage.setItem("key", key);
    });
    function encryptString(input, key) {
        let matrix = [];
        let i = 0;
        let l = input.length;
        while (i < l) {
            let arr = [];
            for (let j = 0; j < key; j++) {
                if (i == l)
                    break;
                arr.push(input.charAt(i));
                i++;
            }
            matrix.push(arr);
        }
        console.log(matrix);
        let result = "";
        for (let j = 0; j < key; j++) {
            for (let i = 0; i < matrix.length; i++) {
                if (j >= matrix[i].length)
                    break;
                result += matrix[i][j];
            }
        }
        return result;
    }
    function decryptString(input, key) {
        let newkey = Math.floor(input.length / key);
        let rem = input.length % key;
        let matrix = [];
        let i = 0;
        let l = input.length;
        while (i < l) {
            let arr = [];
            for (let j = 0; j < newkey + rem; j++) {
                if (i == l)
                    break;
                arr.push(input.charAt(i));
                i++;
            }
            if (rem > 0)
                rem--;
            matrix.push(arr);
        }
        console.log(matrix);
        rem = input.length % key;
        let result = "";
        for (let j = 0; j < newkey + rem; j++) {
            for (let i = 0; i < matrix.length; i++) {
                if (j >= matrix[i].length)
                    break;
                result += matrix[i][j];
            }
        }
        return result;
    }
});
//# sourceMappingURL=index.js.map