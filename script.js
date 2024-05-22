const menuBtn = document.querySelector('.menu');
menuBtn.addEventListener('click',function(){
    const navItems = document.querySelector(".nav-items");
    if(navItems.classList){
        navItems.classList.toggle('visible');
    }
});