// menubar
let menu_open = 0;
const menu = () => {
    if(menu_open === 0) {
        document.querySelectorAll('.menu-bar').forEach(element => element.classList.add('open-menu'))
        document.querySelectorAll('#line-1').forEach(element => {
            element.style.transform = 'rotate(45deg)';
            element.style.backgroundColor = 'black';
        });
        document.querySelectorAll('#line-2').forEach(element => {
            element.style.transform = 'rotate(-45deg)';
            element.style.backgroundColor = 'black';
        });
        document.querySelectorAll('.navbar-left').forEach(element => element.style.color = 'black')
        document.querySelector('.disc').style.backgroundColor = 'black';
        document.querySelector('.disc2').style.backgroundColor = 'black';
        document.querySelector('.fix-nav').style.backgroundColor = 'white';
        document.querySelector('.mode-disc').style.backgroundColor = 'black';

        document.querySelector('.mode').style.color = 'black';
        document.querySelectorAll('.disp').forEach(element => element.classList.add('disp-none'))
        document.querySelector('.translate-box-1').style.transform = 'translateY(0)';
        document.querySelector('.translate-box-2').style.transform = 'translateY(0)';
        document.querySelector('.translate-box-2').style.transition = 'transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)';
        document.querySelector('.translate-box-1').style.transition = 'transform 1s ease-in-out';
        menu_open = 1;
    }

    else {
        document.querySelectorAll('.menu-bar').forEach(element => element.classList.remove('open-menu'))
        document.querySelectorAll('#line-1').forEach(element => {
            element.style.transform = 'rotate(0)';
            element.style.backgroundColor = 'white';
        });
        document.querySelectorAll('#line-2').forEach(element => {
            element.style.transform = 'rotate(0)';
            element.style.backgroundColor = 'white';
        });
        document.querySelectorAll('.navbar-left').forEach(element => element.style.color = 'white')
        document.querySelector('.disc').style.backgroundColor = 'white';
        document.querySelector('.disc2').style.backgroundColor = 'white';
        document.querySelector('.fix-nav').style.backgroundColor = 'black';
        document.querySelector('.mode-disc').style.backgroundColor = 'white';
        document.querySelector('.mode').style.color = 'white';
        document.querySelectorAll('.disp').forEach(element => element.classList.remove('disp-none'))
        document.querySelector('.translate-box-1').style.transform = 'translateY(-100%)';
        document.querySelector('.translate-box-2').style.transform = 'translateY(-100%)';
        document.querySelector('.translate-box-1').style.transition = 'transform 1s cubic-bezier(0.075, 0.82, 0.165, 1)';
        document.querySelector('.translate-box-2').style.transition = 'transform 1s ease-in-out';
        menu_open = 0;
    }
}

document.querySelector('.menu-bar').addEventListener('click', () => menu());
document.querySelector('.fix-nav-menu-bar').addEventListener('click', () => menu());
document.querySelector('.close').addEventListener('click', () => menu());

/**************************************************************************************/

// carousel functioning
const carousel = (id) => {
    document.querySelectorAll('.carousel-item').forEach(element => {element.style.transform = `translateX(${(1-id)*100}%)`;})
    document.querySelectorAll('.bg-img').forEach(element => {element.style.transform = `translateX(${(1-id)*100}%)`;})
    document.querySelectorAll('.carousel-btn').forEach(element => element.classList.remove('carousel-btn-active'));
    document.querySelector(`#carousel-btn${id}`).classList.add('carousel-btn-active')
    let i=1
    document.querySelectorAll('.carousel-item').forEach((element, i) => {
        document.querySelectorAll(`.c-${i}`).forEach(ele => {
            if(i !==id){
                ele.style.animation = 'downward 2s cubic-bezier(0, 0.52, 0.68, 1.42)';
            }
            else{
                ele.style.animation = 'upward 2s cubic-bezier(0, 0.52, 0.68, 1.42)';
            }
        });
        i++;
    })
}

document.querySelector('#carousel-btn1').addEventListener('click', () => carousel(1))
document.querySelector('#carousel-btn2').addEventListener('click', () => carousel(2))
document.querySelector('#carousel-btn3').addEventListener('click', () => carousel(3))
document.querySelector('#carousel-btn4').addEventListener('click', () => carousel(4))
document.querySelector('#carousel-btn5').addEventListener('click', () => carousel(5))

let box = document.querySelectorAll('.carousel-item-box');

const carousel_box = (inside) => { 

    if(inside === 0) {
        box.forEach(element => {
            element.style.borderColor = 'white';
            element.style.opacity = '0.7';
            document.querySelector('.carousel-item-box-body-span').style.transform = 'translateX(4px)';
        })
    }

    else {
        box.forEach(element => {
            element.style.borderColor = '#636363';
            element.style.opacity = '1';
            document.querySelector('.carousel-item-box-body-span').style.transform = 'translateX(0)';
        })
    }
}
/**************************************************************************************/

// theme
let mode = 1
let root = document.querySelector(':root');
let light = document.querySelector('.light')

const change_mode = () => {
    if(mode === 1) {
        light.innerHTML = 'Dark Mode'
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--white', 'black');
        mode = 0;
    }

    else{
        light.innerHTML = 'Light Mode'
        root.style.setProperty('--white', 'white')
        root.style.setProperty('--black', 'black')
        mode = 1;
    }
}

document.querySelector('.mode').addEventListener('click', () => change_mode())

/**************************************************************************************/

let slide1_1 = document.querySelector('.carousel-item-1-1');
let slide1_2 = document.querySelector('.carousel-item-1-2');
let slide1_3 = document.querySelector('.carousel-item-1-3');
let slide1_4 = document.querySelector('.carousel-item-1-4');
let slide_box_1 = document.querySelector('.carousel-item-1-box');

let slide_5_1 = document.querySelector('.carousel-item-5-1');
let slide_5_2 = document.querySelector('.carousel-item-5-2');
let slide_5_3 = document.querySelector('.carousel-item-5-3');
let slide_5_4 = document.querySelector('.carousel-item-5-4');
let slide_box_5 = document.querySelector('.carousel-item-5-box');

let fix_nav = document.querySelector('.fix-nav');

let bg_img = document.querySelectorAll('.bg-img');

// parallax
let scrolltop = window.pageYOffset;

const parallax = (scrolltop) => {

    scrolltop = window.pageYOffset;

    if(scrolltop < 700 || scrolltop > 5550) {
        fix_nav.style.transform = `translateY(-100%)`;
    }
    else{
        fix_nav.style.transform = `translateY(0)`;
    }
    
    slide1_1.style.transform = `translateY(calc(${-scrolltop * 0.15}px))`;
    slide1_2.style.transform = `translateY(calc(${(-scrolltop * 0.3)}px))`;
    slide1_3.style.transform = `translateY(calc(${(-scrolltop * 0.3)}px))`;
    slide1_4.style.transform = `translateY(calc(${-scrolltop * 0.45}px))`;
    slide_box_1.style.transform = `translateY(calc(${-scrolltop * 0.15}px))`;

    slide_5_1.style.transform = `translateY(calc(${-scrolltop * 0.15}px))`;
    slide_5_2.style.transform = `translateY(calc(${(-scrolltop * 0.3)}px))`;
    slide_5_3.style.transform = `translateY(calc(${(-scrolltop * 0.3)}px))`;
    slide_5_4.style.transform = `translateY(calc(${-scrolltop * 0.45}px))`;
    slide_box_5.style.transform = `translateY(calc(${-scrolltop * 0.15}px))`;

    document.querySelector('.navigate-carousel').style.transform = `translateY(calc(${(-scrolltop * 0.15)}px))`;
    document.querySelector('.scroll').style.transform = `translateY(calc(${(-scrolltop * 0.15)}px))`;

    // background opacity
    bg_img.forEach(element => {element.style.opacity = `${1 - scrolltop*0.0012}`});

    // font families
    document.querySelectorAll('.fam-card-col-2').forEach(element => { 
        element.style.transform = `translateY(calc(${(1810 - scrolltop) * 0.35}px + 30%))`;
    })

    document.querySelectorAll('.fam-card-col-3').forEach(element => { 
        element.style.transform = `translateY(calc(${(1810 - scrolltop) * 0.2}px + 15%))`;
    })
    
    document.querySelectorAll('.fam-card-col-4').forEach(element => { 
        element.style.transform = `translateY(calc(${(1810 - scrolltop) * 0.3}px + 22%))`;
    })
    
    if(scrolltop % 100 < 50){
    document.querySelector('.circle-rotate').style.transform = `rotate(10deg)`;
    }
    else{
        document.querySelector('.circle-rotate').style.transform = `rotate(0deg)`;
    }

    document.querySelector('.pizza-translate-div').style.transform = `translateY(calc(${(-3170 + scrolltop) * 0.07}px - 10%)`;
    document.querySelector('.festival-translate-div').style.transform = `translateY(calc(${(-3425 + scrolltop) * 0.07}px - 10%)`;
    document.querySelector('.arc-translate-div').style.transform = `translateY(calc(${(-4380 + scrolltop) * 0.07}px - 10%)`;
    document.querySelector('.huspy-translate-div').style.transform = `translateY(calc(${(-4390 + scrolltop) * 0.07}px - 10%)`;
    document.querySelector('.room-translate-div').style.transform = `translateY(calc(${(-4387 + scrolltop) * 0.07}px - 10%)`;

    document.querySelectorAll('.pang-translate-div').forEach(element => {
        element.style.transform = `translateY(calc(${(-4440 + scrolltop) * 0.05}px - 10%)`;
    })

    document.querySelector('.footer-translate').style.transform = `translateY(calc(${(-6710 + scrolltop) * 0.1}px)`;
}

window.addEventListener("scroll", () => {
    parallax();
})

/**************************************************************************************/

// underline function
const underline_out = (id) => {
    document.querySelectorAll('.underline').forEach(element => element.classList.remove('und_link_out'));
    document.querySelector(`.underline-${id}`).classList.add('und_link_in');
}

const underline_in = (id) => {
    document.querySelectorAll('.underline').forEach(element => element.classList.remove('und_link_in'));
    document.querySelector(`.underline-${id}`).classList.add('und_link_out');
}

document.querySelector('.about-div-2-link').addEventListener('mouseover', () => underline_in(1))
document.querySelector('.about-div-2-link').addEventListener('mouseout', () => underline_out(1))

document.querySelector('.about-div-3-link').addEventListener('mouseover', () => underline_in(2))
document.querySelector('.about-div-3-link').addEventListener('mouseout', () => underline_out(2))

document.querySelector('.und_3').addEventListener('mouseover', () => underline_in(3))
document.querySelector('.und_3').addEventListener('mouseout', () => underline_out(3))

document.querySelector('.und_4').addEventListener('mouseover', () => underline_in(4))
document.querySelector('.und_4').addEventListener('mouseout', () => underline_out(4))

document.querySelector('.und_5').addEventListener('mouseover', () => underline_in(5))
document.querySelector('.und_5').addEventListener('mouseout', () => underline_out(5))

/**************************************************************************************/
// changing font
let font = document.querySelector('.font-change');
let font_1_1 = document.querySelector('#font-col-1-1');
let font_1_2 = document.querySelector('#font-col-1-2');
let font_1_3 = document.querySelector('#font-col-1-3');
let font_1_4 = document.querySelector('#font-col-1-4');
let font_2_1 = document.querySelector('#font-col-2-1');
let font_2_2 = document.querySelector('#font-col-2-2');
let font_2_3 = document.querySelector('#font-col-2-3');
let font_2_4 = document.querySelector('#font-col-2-4');
let font_3_1 = document.querySelector('#font-col-3-1');
let font_3_2 = document.querySelector('#font-col-3-2');
let font_3_3 = document.querySelector('#font-col-3-3');
let font_3_4 = document.querySelector('#font-col-3-4');
let font_4_1 = document.querySelector('#font-col-4-1');
let font_4_2 = document.querySelector('#font-col-4-2');
let font_4_3 = document.querySelector('#font-col-4-3');
let font_4_4 = document.querySelector('#font-col-4-4');

font_1_1.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_neue_machinainktrapRg';
})

font_1_2.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_raderregular';
})

font_1_3.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_fraktion_monoregular';
})

font_1_4.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_supply_monoregular';
})

font_2_1.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_moriregular';
})

font_2_2.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_right_gothiclight';
})

font_2_3.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_neue_montrealmedium';;
})

font_2_4.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_pangram_sanscompactRg';
})

font_3_1.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_right_sanslight';
})

font_3_2.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_eikomedium';
})

font_3_3.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_neue_worldregular';
})

font_3_4.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_radio_groteskregular';
})

font_4_1.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_formulalight';;
})

font_4_2.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_editorial_newregular';
})

font_4_3.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_object_sansregular';
})

font_4_4.addEventListener('mouseover', () => {
    font.style.color = 'black';
    font.style.fontFamily = 'pp_cirkalight';
})