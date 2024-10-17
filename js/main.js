window.onload = function(){
    const menuGlobal = document.querySelector('#global-menu');
    const btnMenu = menuGlobal.children[0];

    btnMenu.addEventListener('click',function(){
        menuGlobal.classList.toggle('open');
    });
}