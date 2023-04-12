export const insertHTML = () => {
    const body =  document.getElementsByTagName("body")[0];
    body.innerHTML = `
        <h1 class = "tittle">Historia 2</h1>
        <p>Gustavo logro hacer su tarea de webpack :))</p>        
        `
}

window.onload = () => {
    insertHTML();
}

