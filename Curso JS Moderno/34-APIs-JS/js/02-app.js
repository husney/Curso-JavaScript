document.addEventListener('DOMContentLoaded', ()=>{
    const observer = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting){
            console.log("Se esta mostrando");
        }else{
            console.log("No se esta mostrando");
        }
    });

    observer.observe(document.querySelector('.premium'));

});