/*let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva']
for (let j = 0; j <= list.length; ++i) {
  list[i] = list[i].toUpperCase()
  switch (list[i]) {
    case "ALICE":
      consol.log('Alice want to exchange with Bob')
      break;
      Case"Bob":
      console.log('Bob want to exchange with Alice')
      break;
      Case CHARLIE:
      console.log('Charlie is a generic third participant')
      break;
      Case CRAIG:
      console.log('Craig is a password cracker')
      break;
      Case EVE:
      console.log('Eve is an eavesdropper')
  }
}*/
//Vous devez corriger le code précédent et obtenir l'affichage suivant:

//Alice want to exchange with Bob
//Bob want to exchange with Alice
//Charlie is a generic third participant
//Craig is a password cracker
//Eve is an eavesdropper


let list = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eva']
for (let j = 0; j <= list.length; ++j) {
  //list[j] = list[j].ToUpperCase()
  switch (list[j]) {
    case "Alice":
      console.log('Alice want to exchange with Bob');
      break;
    case "Bob":
      console.log('Bob want to exchange with Alice');
      break;
    case "Charlie":
      console.log('Charlie is a generic third participant');
      break;
    case "CRAIG":
      console.log('Craig is a password cracker');
      break;
    case "Eva":
      console.log('Eva is an eavesdropper');
      break;
  }
}