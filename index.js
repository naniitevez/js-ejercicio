// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const myFunction = (str, num) => {
  let salida = str[0];
  let contador = 1;

  if (!str || !num || num === 0) return 'Los datos ingresados son incorrectos';

  for (let i = 1; i < str.length; i++) {
    let letra = str[i];
    let anterior = str[i - 1];

    if (letra === anterior && contador < num) {
      salida = salida + letra;
      contador++;
    } else if (letra !== anterior) {
      salida = salida + letra;
      contador = 1;
    }
  }
  return salida;
};

console.log(myFunction('jkdassdfd', 1));
