// Desafio 11
function generatePhoneNumber(num) {
  let tamanho = num.length;

  let numF = '(';
  let ok = true;
  if (tamanho !== 11) {
    ok = false;
    return 'Array com tamanho incorreto.';
  } else {
    for (let v of num) {
      let quantidadeElementos = num.filter((x) => x === v).length;
      if (v < 0 || v > 9 || quantidadeElementos > 3) {
        ok = false;
        return 'não é possível gerar um número de telefone com esses valores';
      } else if (numF.length < 3) {
        numF = numF + v;
      } else if (numF.length === 3) {
        numF = numF + ') ';
        numF = numF + v;
      } else if (numF.length < 10) {
        numF = numF + v;
      } else if (numF.length === 10) {
        numF = numF + '-';
        numF = numF + v;
      } else if (numF.length < 15) {
        numF = numF + v;
      }
    }
  }
  
  if (ok === true) {
    return numF;
  }
}


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let ok = null;
  let a = Math.abs(lineA);
  let b = Math.abs(lineB);
  let c = Math.abs(lineC);

  if (lineA % lineB > c) {
    ok = true;
  } else if (lineA % lineC > b) {
    ok = true;
  } else if (lineC % lineB > a) {
    ok = true;
  }

  if (lineA > lineB + lineC) {
    ok = false;
  } else if (lineB > lineA + lineC) {
    ok = false;
  } else if (lineC > lineA + lineB) {
    ok = false;
  }
  return ok;
}

// Desafio 13
function hydrate (string) {
  let arrayNomes = string.replace(' e ', ', ')
  
  let soma3 = 0
  let soma2 = 0
  let numeric = false
  for (item of arrayNomes ) {
    let soma = []
        for (n = 1; n<9; n += 1) {
          if (item == n) {
            soma2 = soma2 += item
          }
        }
      
      }

    for (v of soma2) {
      v = parseInt(v)
      soma3 += v
    }  
    
  
      
  return soma3+' copos de água'
} 

let arr = [1,2,3,4,5,6,7,8,9,10];
let soma = 0;
for(var i = 0; i < arr.length; i++) {
    soma += arr[i];
}



module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};





