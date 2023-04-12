import {insertHTML1 as insertH1} from './historia1.js' ;
import {insertHTML2 as insertH2} from './historia2.js' ;
import './style.scss';

const insertHTML = () => {
    const body =  document.getElementsByTagName("body")[0];
    body.innerHTML = `
        <h1 class = "tittle">Webpack Test</h1>
        <p>Bienvenido a esta prueba de webpack</p>
        <p>Este es un cambio</p>
        <br>
        <a href="historia1.html">Historia1</a> 
        <a href="historia2.html">Historia2</a>        
        `
}

window.onload = () => {
    insertHTML();
}

