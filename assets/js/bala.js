window.addEventListener("DOMContentLoaded", () => {
    let scrollPosition      = 0;
    let desktopHeader       = document.querySelector(".desktop-header");
    let navigationSwiper    = document.querySelector(".navigation-swiper");
    const placeholder       = document.querySelector(".header-placeholder");
    const productsSwiper    = document.querySelector(".products-swiper");
    const screenWidth       = window.screen.width;
    const menuPatent        = document.querySelector(".menu-patent");
    let btn7;


    if(menuPatent){
        menuPatent.addEventListener("click",()=>{
           btn7 =  menuPatent.querySelector(".btn7");
           btn7.classList.toggle("open");
           desktopHeader.classList.toggle("active");
        })
    }
    if(placeholder) {
        if (screenWidth > 767) {
            placeholder.style.height = desktopHeader.offsetHeight + "px";
        }
    }
    if(navigationSwiper) {
        var swiper = new Swiper('.navigation-swiper', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
    if (desktopHeader) {
        window.addEventListener("scroll", () => {
            if (screenWidth > 767) {
                if (window.scrollY > 98) {
                    scrollPosition = window.scrollY;
                    desktopHeader.classList.add("scrolled-header");
                } else {
                    scrollPosition = window.scrollY;
                    desktopHeader.classList.remove("scrolled-header");
                }
            }
        })
    }
    if (productsSwiper) {
        var swiper = new Swiper('.products-swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 50,
                },
            },
        });
    }
})