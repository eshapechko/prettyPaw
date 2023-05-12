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

// use modules
videoBackgroundInit();
menuControl();
locationHover();

const carrerImageItems = document.querySelectorAll(".carrer__image-item");
carrerImageItems.forEach((item, i) => {
    item.classList.add(`carrer__image-item_${i % 2 ? "even" : "odd"}`);
});

slidersInit(".about__slider", {
    pagination: {
        el: ".about__slider-pagination",
    },
});

slidersInit(".carrer__slider", {
    pagination: {
        el: ".carrer__slider-pagination",
    },
    breakpoints: {
        576: {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: { type: "bullets" },
        },
        768: {
            slidesPerView: "auto",
            spaceBetween: 20,
            pagination: { type: "" },
        },

        1024: {
            slidesPerView: "auto",
            spaceBetween: 26,
            pagination: false,
        },

        1240: {
            slidesPerView: "auto",
            spaceBetween: 30,
            pagination: false,
        },
    },
});
