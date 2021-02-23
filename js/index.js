const frasePalindroma = "Amigo no gima";
const otraFrasePalindroma = "A Mercedes ése de crema";

const eliminarAccentos = frase => frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const esPalindroma = frase => {
  const fraseSinMayusculasYAccentos = eliminarAccentos(frase).toLowerCase();
  console.log(fraseSinMayusculasYAccentos);
  const fraseReverse = "";
  return frase === fraseReverse;
};

esPalindroma(otraFrasePalindroma);
