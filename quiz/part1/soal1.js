let nama = '', peran = 'ksatria'

console.log('welcome to game aselole');

    if (nama === ''){
    console.log(`tolong isi nama anda`)
};

    if (peran === 'ksatria' ){
        console.log(`ksatria ${nama} kamu dapat menyerang dengan pedangmu`)
    } if (peran === 'penyihir'){
        console.log(`penyihir ${nama} ciptakan keajaiban melalui sihirmu`)
    } if (peran === 'penyembuh'){
        console.log(`lindungi temanmu wahai ${peran}`)
    } if (peran === ''){
        console.log(`tolong isi peran anda`)
    }


//inspiration by soal2
// let nama = 'icikiwir', peran = 'penyihir';

// if (nama === ''){
//     console.log('isi nama kamu')
// }

// switch (peran){
//     case 'ksatria' :
//         peran = 'kamu dapat membabat habis musushmu'
//         break;
//     case 'penyihir' :
//         peran = 'kamu dapat ciptakan keajaiban dengan sihirmu'
//         break;
//     default :
//         peran = 'isi peran kamu'
//         break;            
// }

// console.log(`${nama} ${peran}`)