enum Plano {
  basico = 19.9,
  profissional = 49.9,
  premium = 99.9
}

function calcularPlano(plano: Plano): void {
  const precoForm = plano.toFixed(2)
  let nome = ""

  if (plano === Plano.basico) {
    nome = "básico" 
  } else if (plano === Plano.profissional) {
    nome = "profissional"
  }
  else if (plano === Plano.premium) {
    nome = "premium"
  }
  
  console.log(`O plano ${nome} custa R$ ${precoForm}.`)
}

calcularPlano(Plano.basico)

