let tangal = 12
let bulan = 'februari'
let tahun = 2000

switch (bulan){
    case 'januari':
        bulan = 1
        break;
    case 'februari':
        bulan = 2
        break;
    default :
        bulan = 'isi namaBulan'
        break;    
}

console.log(`${tangal} ${bulan} ${tahun}`)

// inspiration by ai gemini

// let tangal = 12
// let bulan = 'februari'
// let tahun = 2000
// let bulanAngka;

// switch (bulan){
//     case 'januari':
//         bulanAngka = 1;
//         break;
//     case 'februari':
//         bulanAngka = 2;
//         break;
//     default :
//         bulanAngka = 'isi bulan';
//         break;    
// }


// console.group(`${tangal} ${bulanAngka} ${tahun}`)