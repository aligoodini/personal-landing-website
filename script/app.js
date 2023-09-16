let $ = document;
const ham = $.querySelector(".nav__hamberger"),
navHambergerLine = $.querySelector(".nav__hamberger-line"),
navMenu = $.querySelector(".nav__menu"),
cover = $.querySelector("#cover"),
rlis = $.querySelectorAll(".resu-left__item");

let rotate = true;

// document.documentElement.style.setProperty("--tranform-befor", 'rotate(45deg)');


ham.addEventListener("click", ()=>{
    navHambergerLine.classList.toggle("nav__hamberger-line--open");
    if(rotate){
        document.documentElement.style.setProperty("--tranform-befor", 'rotate(45deg) translateY(1.35rem)');
        document.documentElement.style.setProperty("--tranform-after", 'rotate(-45deg) translateY(-1.45rem)');
        rotate = false;
    }
    else{
        document.documentElement.style.setProperty("--tranform-befor", 'rotate(0deg) translateY(0rem)');
        document.documentElement.style.setProperty("--tranform-after", 'rotate(0deg) translateY(0rem)');
        rotate = true;
    }
    
    
    navMenu.classList.toggle("nav--open");
    cover.classList.toggle("cover");
});

rlis.forEach(item =>{
    item.addEventListener("click",(item)=>{
        rlis.forEach(e => {
            e.classList.remove("resu-left__item");
        });
    })
});

