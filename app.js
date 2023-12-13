//Modulo app.js

const { frutas, dinero } = require("./frutas");  // Importo array frutas 

frutas.forEach(i => {  // Recorro array frutas 
  console.count(i);
});

console.log ("El dinero es: " , dinero); 