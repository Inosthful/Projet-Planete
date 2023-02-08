
// let test1 = ["animationBouton", "animationBouton2"]

// $(document).ready(function () {
//     $(".bouton").mouseover(function () {
//         $(".bouton").css("transform", "scale(1.25)");
//         test1[1].style.setProperty("animation", "1.5s")
//     });

//     $(".bouton").mouseout(function () {
//         $(".bouton").css("transform", "scale(1)");
//         test1[2].style.setProperty("animation", "1.5s")
//     });

// })


///// CURSEUR MOUVEMENT



const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 22)+"px; left: "+(e.pageX - 22)+"px;")
})

document.addEventListener('click', () => {
    cursor.classList.add("expand");

    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500)
})

// REDIRECTION 

function redirectTerre(){ 
    window.open('https://fr.wikipedia.org/wiki/Terre');
}

function redirectSoleil(){
    window.open('https://fr.wikipedia.org/wiki/Soleil')
}

function redirectMercure(){ 
    window.open('https://fr.wikipedia.org/wiki/Mercure');
}


function redirectVenus(){ 
    window.open('https://fr.wikipedia.org/wiki/Venus');
}


function redirectMars(){ 
    window.open('https://fr.wikipedia.org/wiki/Mars');
}

function redirectJupiter(){ 
    window.open('https://fr.wikipedia.org/wiki/Jupiter');
}

function redirectSaturne(){ 
    window.open('https://fr.wikipedia.org/wiki/Saturne');
}

function redirectUranus(){ 
    window.open('https://fr.wikipedia.org/wiki/Uranus');
}

function redirectNeptune(){ 
    window.open('https://fr.wikipedia.org/wiki/Neptune');
}

function redirectAccueil(){ 
    window.location = ('index.html');
}
