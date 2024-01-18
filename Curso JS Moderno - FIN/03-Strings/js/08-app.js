let cadena = "     HOLA MUNDO    ";
//console.log(`[${cadena}]`);

let pindexof = cadena.indexOf("HOLA");
//console.log(pindexof)

let pinclude = cadena.includes("HOLA");
//console.log(pinclude)

let ptrim  = cadena.trim();
//console.log(`[${ptrim}]`);

let preplace  = cadena.replace("HOLA", "HELLO");
reaplce  = cadena.replace("MUNDO", "WORLD");
//console.log(`[${preplace}]`);


let pslicestart = cadena.trim().slice(0, 4);
//console.log(`[${pslicestart}]`);
pslicestart = cadena.trim().slice(0, -4);
//console.log(`[${pslicestart}]`);
pslicestart = cadena.trim().slice(4,); // es equivalente pslicestart = cadena.trim().slice(4);
//console.log(`[${pslicestart}]`);

let ptoLoweCase = cadena.trim().toLowerCase();
//console.log(`[${ptoLoweCase}]`);

let ptoUpperCase = cadena.trim().toUpperCase();
//console.log(`[${ptoUpperCase}]`);

let psplit = cadena.trim().split(" ");
//console.log(psplit);

let pchatAt = cadena.trim().charAt(3);
//console.log(pchatAt);

let prepeat = cadena.trim().repeat(3);
//console.log(prepeat);

/*
indexof
includes
trim (trimEnd, strimStart)
slice
split
toUpperCase
toLowerCase
charAt
repeat
replace
 */