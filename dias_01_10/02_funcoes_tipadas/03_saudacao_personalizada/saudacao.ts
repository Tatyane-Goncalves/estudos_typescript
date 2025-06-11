type saudacao = {
  name: string;
  hour: number;
};

function saudar(name: string, hour: number): saudacao {
  if (hour >= 0 && hour < 12) {
    console.log(`Bom dia, ${name}!`);
  } else if (hour >= 12 && hour < 18) {
    console.log(`Boa tarde, ${name}!`);
  } else if (hour >= 18 && hour <= 23) {
    console.log(`Boa noite, ${name}!`);
  } else {
    console.log(`Hora inválida!`);
  }
  return { name, hour };
}

const saudacaoMostrada = saudar("Rosa", 15);
console.log(saudacaoMostrada);
