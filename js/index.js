const frasePalindroma = "Amigo no gima";
const otraFrasePalindroma = "A Mercedes ése de crema";
const fraseNoPalidroma = "Hola como estas";

const eliminarAccentosYEspacios = frase => frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,:;()_?¿!¡-\s]/g, "");

const esPalindroma = frase => {
  const fraseSinMayusculasYAccentos = eliminarAccentosYEspacios(frase).toLowerCase();
  const fraseInvertida = fraseSinMayusculasYAccentos.split("").reverse().join("");
  return fraseSinMayusculasYAccentos === fraseInvertida;
};

console.log(`La frase '${frasePalindroma}'${esPalindroma(frasePalindroma) ? "" : " no"} es palindroma`);
console.log(`La frase '${otraFrasePalindroma}'${esPalindroma(otraFrasePalindroma) ? "" : " no"} es palindroma`);
console.log(`La frase '${fraseNoPalidroma}'${esPalindroma(fraseNoPalidroma) ? "" : " no"} es palindroma`);
