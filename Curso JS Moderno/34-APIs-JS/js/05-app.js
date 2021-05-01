document.addEventListener('visibilitychange', ()=>{
    console.log(document.visibilityState);
    if(document.visibilityState === "hidden"){
        console.log("hidden1");
    }
})