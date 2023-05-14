import "./index.html";
import "./page.html";
// new modules
import "swiper/scss";
import "swiper/scss/pagination";
import "./index.scss";
import { slidersInit } from "./modules/sliders";
import { videoBackgroundInit } from "./modules/videobackground";
import { menuControl } from "./modules/menuControl";
import { locationHover } from "./modules/locationHover";
import { initScrollButton } from "./modules/scrollTopButton";
import { pageControlInit } from "./modules/pageControl";

// use modules
videoBackgroundInit();
menuControl();
locationHover();
initScrollButton("arrow-top");
pageControlInit();

const carrerImageItems = document.querySelectorAll(".carrer__image-item");
carrerImageItems.forEach((item, i) => {
    item.classList.add(`carrer__image-item_${i % 2 ? "even" : "odd"}`);
});

slidersInit(".about__slider", {
    pagination: {
        el: ".about__slider-pagination",
        enabled: true,
    },
});

slidersInit(".carrer__slider", {
    pagination: {
        el: ".carrer__slider-pagination",
        enabled: true,
    },
    breakpoints: {
        576: {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: { enabled: false },
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: { enabled: false },
        },

        1024: {
            slidesPerView: "auto",
            spaceBetween: 26,
            pagination: { enabled: false },
        },

        1240: {
            slidesPerView: "auto",
            spaceBetween: 30,
            pagination: { enabled: false },
        },
    },
});
