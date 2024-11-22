let dark_button = document.querySelector("#dark_mode")
let body = document.querySelector("body")
let img = document.querySelector("#dark_img")
let img2 = document.querySelector("#light_img")

let fnaf = document.querySelector(".FNAF")
let fnaf2 = document.querySelector(".FNAF2")
let ff = document.querySelector(".FF")
let night = document.querySelector(".Night")
let ffd = document.querySelector(".FFD")

let button = document.querySelectorAll("li button")

let buy_object = document.querySelectorAll(".buy")
let select_arrow0 = document.getElementById("0")
let select_arrow1 = document.getElementById("1")
let select_arrow2 = document.getElementById("2")
let select_arrow3 = document.getElementById("3")
let select_arrow4 = document.getElementById("4")
let select_arrow5 = document.getElementById("5")
let select_arrow6 = document.getElementById("6")
let select_arrow7 = document.getElementById("7")
let select_arrow8 = document.getElementById("8")
let select_arrow9 = document.getElementById("9")
let select_arrow10 = document.getElementById("10")
let select_arrow11 = document.getElementById("11")
let select_arrow12 = document.getElementById("12")

let select_list = [select_arrow0, select_arrow1, select_arrow2, select_arrow3, select_arrow4, select_arrow5, select_arrow6, select_arrow7, select_arrow8, select_arrow9, select_arrow10, select_arrow11, select_arrow12]

let audio = new Audio('sound/toy.mp3')

let cash = 500;
document.getElementById("cash").innerHTML = `${cash}`;

// Dark Mode
dark_button.addEventListener("click", function(){
    body.classList.toggle('white')
    img.classList.toggle('desactivate')
    img2.classList.toggle('desactivate')
    button.forEach(element => {
        element.classList.toggle('light_button')
    });
});

// Choix de la section boutique
button.forEach(element => {
    element.addEventListener("click",function() {
        button.forEach(element2 => {
            element2.classList.remove("tab-active")
        })

        let content = document.querySelectorAll(".content")

        content.forEach(element2 => {
            element2.classList.remove("content")
            element2.classList.add("desactivate")
        })

        this.classList.toggle("tab-active")

        if (this.classList.contains('FNAF_but')) {
            fnaf.classList.toggle("content")
            fnaf.classList.toggle("desactivate")
        } else if (this.classList.contains('FNAF2_but')) {
            fnaf2.classList.toggle("content")
            fnaf2.classList.toggle("desactivate")
        } else if (this.classList.contains('FF_but')) {
            ff.classList.toggle("content")
            ff.classList.toggle("desactivate")
        } else if (this.classList.contains('FFD_but')) {
            ffd.classList.toggle("content")
            ffd.classList.toggle("desactivate")
        } else if (this.classList.contains('Night_but')) {
            night.classList.toggle("content")
            night.classList.toggle("desactivate")
        }
        })
})

// Achat
buy_object.forEach(element => {
    element.addEventListener("mouseenter",function() {
        for (let i=0; i < select_list.length; i++) {
            if (this.classList.contains(i.toString()))
                select_list[i].classList.toggle("invisible")
        }
    })

    element.addEventListener("mouseleave",function() {
        for (let i=0; i < select_list.length; i++) {
            if (this.classList.contains(i.toString()))
                select_list[i].classList.toggle("invisible")
        }
    })
})

function toy_sound() {
    audio.play()
}
