function akarPangkat(angka){

    if (angka < 0) {
        console.log("Tidak bisa input bilangan negatif");
    } else if (angka % 2 !== 0){
        console.log("Tidak bisa input bilangan ganjil")
    }
    return Math.sqrt(angka)
}

console.log(akarPangkat(4))
console.log(akarPangkat(-10))
console.log(akarPangkat(3))