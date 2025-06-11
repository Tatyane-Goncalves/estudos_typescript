type Person = {
  name: string;
  age: number;
};

function maiorDeIdade(name: string, age: number): Person {
  if (age >= 18) {
    console.log(`${name} é maior de idade`);
  } else {
    console.log(`${name} não é maior de idade`);
  }
  return { name, age };
}

const agePerson = maiorDeIdade("Taty", 21);
console.log(agePerson);

// OU

function idadeMaior(age: number): boolean {
  return age >= 18;
}

console.log(idadeMaior(21));
console.log(idadeMaior(15));
