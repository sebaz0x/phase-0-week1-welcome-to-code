// gemini 
// function konversiMenit(menit) {
//     let jam = Math.floor(menit / 60)
//     let sisaMenit = menit % 60
    
//     if (sisaMenit < 10){
//         sisaMenit = '0' + sisaMenit
//     }
//     return jam + ':' + sisaMenit
// }

function konversiMenit(menit){
    let jam = 0
    let sisaMenit = menit

    while (sisaMenit >= 60){
        sisaMenit -= 60
        jam++
    }
    if (sisaMenit < 10){
        sisaMenit = '0' + sisaMenit
    }
    return jam + ':' + sisaMenit
}
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00