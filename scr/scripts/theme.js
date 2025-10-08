function mode(){
    const background = window.document.querySelector('body');
    const main = window.document.getElementById('relogio');
    let buttonTheme = window.document.getElementById('buttonTheme');
    let icon = window.document.getElementById('icon');

    buttonTheme.addEventListener('click', ()=>{
        background.classList.toggle('darkTheme');
        main.classList.toggle('darkTheme');
        
        if(background.classList.contains('darkTheme')){
            buttonTheme.innerHTML = `Light Theme <img src="scr/images/icons8-sol-64.png" alt="Tema Claro">`;
            
        } else{
            buttonTheme.innerHTML = `Dark Theme <img src="scr/images/icons8-lua-brilhante-30.png" alt="Tema Escuro">`;
        }
    });
}
mode();

