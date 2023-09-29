const shapes = require("./modul");

const sisiPersegi = 8;
const panjangPersegiPanjang = 7;
const lebarPersegiPanjang = 4;

const luasPersegi = shapes.luasPersegi(sisiPersegi);
const kelilingPersegi = shapes.kelilingPersegi(sisiPersegi);
const luasPersegiPanjang = shapes.luasPersegiPanjang(
  panjangPersegiPanjang,
  lebarPersegiPanjang
);
const kelilingPersegiPanjang = shapes.kelilingPersegiPanjang(
  panjangPersegiPanjang,
  lebarPersegiPanjang
);

console.log(`Luas Persegi: ${luasPersegi}`);
console.log(`Keliling Persegi: ${kelilingPersegi}`);
console.log(`Luas Persegi Panjang: ${luasPersegiPanjang}`);
console.log(`Keliling Persegi Panjang: ${kelilingPersegiPanjang}`);
