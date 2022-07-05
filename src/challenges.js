// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else if (a === false && b === false) {
    return false;
  } else if (a === true && b === false) {
    return false;
  } else if (a === false && b === true) {
    return false;
  }
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let arrayNomes = frase.split(' ');
  return arrayNomes;
}

// Desafio 4
function concatName(array) {
  let last = array.length;
  let res = array[last - 1] + ', ' + array[0];
  return res;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPontos = 0;
  totalPontos += wins * 3;
  totalPontos += ties;
  return totalPontos;
}

// Desafio 6
function highestCount(array) {
  let maior = Math.max.apply(null, array);
  let total = 0;
  for (v of array) {
    if (v === maior) {
      total++;
    }
  }
  return total;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let pos1 = null;
  let pos2 = null;
  if (cat1 > mouse) {
    pos1 = cat1 - mouse;
  } else if (cat1 < mouse) {
    pos1 = mouse - cat1;
  }
  if (cat2 > mouse) {
    pos2 = cat2 - mouse;
  } else if (cat2 < mouse) {
    pos2 = mouse - cat2;
  }
  if (pos1 < pos2) {
    return 'cat1';
  } else if (pos2 < pos1) {
    return 'cat2';
  } else if (pos1 === pos2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newarray = [];
  for (valor of array) {
    if (valor % 3 === 0 && valor % 5 === 0) {
      newarray.push('fizzBuzz');
    } else if (valor % 3 !== 0 && valor % 5 !== 0) {
      newarray.push('bug!');
    } else if (valor % 3 === 0) {
      newarray.push('fizz');
    } else if (valor % 5 === 0) {
      newarray.push('buzz');
    }
  }
  return newarray;
}

// Desafio 9
function encode(texto) {
  let newstring = '';
  for (let palavra of texto) {
    if (palavra === 'a') {
      newstring = newstring + 1;
    } else if (palavra === 'e') {
      newstring = newstring + 2;
    } else if (palavra === 'i') {
      newstring = newstring + 3;
    } else if (palavra === 'o') {
      newstring = newstring + 4;
    } else if (palavra === 'u') {
      newstring = newstring + 5;
    } else {
      newstring = newstring + palavra;
    }
  }
  return newstring;
}

function decode(texto) {
  let newstring = '';
  for (let palavra of texto) {
    if (palavra === '1') {
      newstring = newstring + 'a';
    } else if (palavra === '2') {
      newstring = newstring + 'e';
    } else if (palavra === '3') {
      newstring = newstring + 'i';
    } else if (palavra === '4') {
      newstring = newstring + 'o';
    } else if (palavra === '5') {
      newstring = newstring + 'u';
    } else {
      newstring = newstring + palavra;
    }
  }
  return newstring;
}

// Desafio 10
function techList(lista, nome) {
  let arrayOrdenado = lista.sort();
  let newarray = [];
  let tamanho = lista.length;
  if (tamanho === 0) {
    return 'Vazio!';
  }
  for (item of arrayOrdenado) {
    newarray.push({
      name: nome,
      tech: item,
    });
  }
  if (tamanho > 0) {
    return newarray;
  }
}



module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
