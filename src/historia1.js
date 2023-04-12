export const insertHTML = () => {
    const body =  document.getElementsByTagName("body")[0];
    body.innerHTML = `
        <h1 class = "tittle">Historia 1</h1>
        <p>Erase una vez un Gustavo que no hizo la tarea de webpack</p>        
        `
}

window.onload = () => {
    insertHTML();
}

