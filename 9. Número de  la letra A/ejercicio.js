// escribe tu respuesta acá
function numeroDeAes(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count++;
        }
    }
    return count;
}

// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0