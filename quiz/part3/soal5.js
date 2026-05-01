let input = 5
let bintang = ''

for (let i = 1; i <= input; i++){
    for (let j = 1; j <= i; j++){
        bintang += '*'
    }
    bintang += '\n'
}
console.log(bintang)



// nyoba nyoba refrensi dari gemini
// let input = 5
// let bintang = ''

// for (let i = 1; i <= input; i++){

//     for (let j = 1; j <= input - i; j++){
//         bintang += ' '
//     }
//     for (let b = 1; b <= 2 * i - 1; b++){
//         bintang += '*'
//     }
//     bintang += '\n'
// }
// console.log(bintang)