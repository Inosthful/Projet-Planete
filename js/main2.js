
// FOOTER ANIMATION 
$(document).ready(function () {
    $("#btnEnzo").mouseover(function () {
        $("#couleurteh").css("transform", "scale(1.1)");
    });

    $("#btnEnzo").mouseout(function () {
        $("#couleurteh").css("transform", "scale(1)");
    });
    $("#btnEnzo2").mouseover(function () {
        $("#couleurteh2").css("transform", "scale(1.1)");
    });

    $("#btnEnzo2").mouseout(function () {
        $("#couleurteh2").css("transform", "scale(1)");
    });

})

// BOUTON + ANIMATION 
let test = [".un", ".deux", ".trois", ".quatre", ".cinq", ".six", ".sept", ".huit"]
console.log(`${test}`)
let test2 = ["allezun", "allezdeux", "alleztrois", "allezquatre", "allezcinq", "allezsix", "allezsept", "allezhuit"]
// let test3 = "opun"
// , "opdeux","optrois","opquatre","opcinq","opsix","opsept","ophuit"
// FOLD UNFOLD CLASS, verifie quand t'appuie sur un bouton. Créer les class fold et unfold suivant si t'a appuyer pour "ouvrir" le bouton ou si t'appuie pour le "fermer"
let stylesheet = document.styleSheets[1]
let animation = document.getElementById("share")
console.log(animation)

animation.addEventListener("click", function () {
    if (animation.classList.contains("unfold")) {
        for (i = 0; i < 8; i++) {

            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.unfold ~ ${test[i]}` )
            // console.log(stylesheet.cssRules[un])
            un.style.removeProperty("animation")
            setTimeout(() => {
                un.style.setProperty("opacity", "1")
            }, 650);
        }

        animation.classList.remove("unfold")
        setTimeout(() => {
            animation.classList.add("fold")
        }, 1);

        // console.log(animation.child[0])
        for (i = 0; i < 8; i++) {

            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.fold ~ ${test[i]}`)
            // console.log(stylesheet.cssRules[un])
            un.style.setProperty("animation", `${test2[i]} 0.5s reverse`)
            setTimeout(() => {
                un.style.setProperty("opacity", "0")
            }, 650);

            // un.style.setProperty("animation", `${test3} 3s`)
        }
        // console.log(animation)
        // console.log(animation.classList.contains)
    }
    else if (animation.classList.contains("fold")) {
        animation.classList.remove("fold")
        setTimeout(() => {
            animation.classList.add("unfold")
        }, 20);

        for (i = 0; i < 8; i++) {

            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.unfold ~ ${test[i]}`)
            // console.log(stylesheet.cssRules[un])
            un.style.setProperty("animation", `${test2[i]} 1s`)
        }
    }
    else {
        animation.classList.add("unfold")
        for (i = 0; i < 8; i++) {
            
            let un = [...stylesheet.cssRules].find((r) => r.selectorText == `.share.unfold ~ ${test[i]}`)
            // console.log(stylesheet.cssRules[un])
            un.style.setProperty("animation", `${test2[i]} 1s`)
            setTimeout(() => {
                un.style.setProperty("opacity", "1")
            }, 650);
        }
    }
})

// CURSEUR MOUVEMENT

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

function redirect1() {
    window.open('https://fr.wikipedia.org/wiki/Mercure');
}


function redirect2() {
    window.open('https://fr.wikipedia.org/wiki/Venus');
}


function redirect3() {
    window.open('https://fr.wikipedia.org/wiki/Mars');
}

function redirect4() {
    window.open('https://fr.wikipedia.org/wiki/Terre');
}

function redirect5() {
    window.open('https://fr.wikipedia.org/wiki/Jupiter');
}

function redirect6() {
    window.open('https://fr.wikipedia.org/wiki/Saturne');
}

function redirect7() {
    window.open('https://fr.wikipedia.org/wiki/Uranus');
}

function redirect8() {
    window.open('https://fr.wikipedia.org/wiki/Neptune');
}

// BULLE ANIMATION
// const wrapper = document.getElementById("bulle-wrapper")

// const animateBulle = x => {
//     const bulle = document.createElement("div");
//     bulle.className = "bulle";
//     bulle.style.left= `${x}px`;
//     wrapper.appendChild(bulle);
//     setTimeout(() => wrapper.removeChild(bulle), 2500);
// }

// window.onmousemove = e => animateBulle(e.clientX)

particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#ffffff"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":2.5,"random":true,"anim":{"enable":true,"speed":1,"size_min":0,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);

