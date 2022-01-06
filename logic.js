// latihan 1
let bintang1 = ""
for ( let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
    bintang1 += "*"
    }

    bintang1 += "\n"
}
console.log(bintang1);

//latihan 2

let bintang2 = ""

for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
        if ( j == i ){
            bintang2 += "*" 
        } else if (j <= i) {
            bintang2 += " "
        }
    }
    
    bintang2 += "\n"
}
console.log(bintang2);

//latihan 3
let bintang3 = ""

for (let i = 0; i < 9; i++){
    for (let j = 0; j < 9; j++){
        if ((j + i) == 8 ) {
            bintang3 += "*" 
        } else   {
            bintang3 += " "
        }
    }
    
    bintang3 += "\n"
}
console.log(bintang3);

//latihan 4
let bintang4 = ''

for ( let i = 0; i < 9 ; i++){
    for ( let j = 0; j < 9 ; j++ ){
        if ( j  == 4 ) {
            bintang4 += "*"
        } else {
            bintang4 += " "
        }
    } 
    bintang4 += "\n"
}
console.log(bintang4);

//latihan 5

let bintang5 = ""

for ( let i = 0 ; i < 9 ; i++ ){
    for ( let j = 0 ; j < 9 ; j++ ){
        if ( j == i || ((j + i ) == 8) || (j == 4) || ( i == 4 ) ){
            bintang5 += "*"
        } else  {
            bintang5 += " "
        }
    } 
    bintang5 += "\n"
}

console.log(bintang5);

//latihan 6 {

let bintang6 = ""
    for (let i = 0; i <= 9; i++){
        for (let j = 0; j <= 9; j++){
            if ( j <= i ) {
                bintang6 += "*"
            }else if ( j >= i ){

                bintang6 += " "
            }
        }
        bintang6 += "\n"
    }
console.log(bintang6);

//latihan 7

let bintang7 = ""

for ( let i = 9; i > 0 ; i--) {
    for ( let j = 0 ; j <= 9 ; j++){
        if ( j >= i) {
            bintang7 += "*"
        } else  {
            bintang7 += " "
        }
    }
    bintang7 += "\n"
}

console.log(bintang7);


let bintang8 = ""