const menui=document.getElementById("menu-icone");
const menu=document.getElementById("menu");

menui.addEventListener('click', () =>{

if(menu.className =='hidden'){

    menu.classList.remove('hidden');
}else{
    menu.classList.add('hidden');
}





})