const app= document.getElementById("typewriter");
const typewriter = new Typewriter (app,{
    loop:true,
    delay:90
});

typewriter
    .typeString("The capital of the Sun")
    .pauseFor(200)
    .start();