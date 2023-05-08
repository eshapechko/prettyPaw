import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

await imagemin(["src/img/carrer_img/*.{jpg,png}"], {
    destination: "src/img/carrer_img",
    plugins: [imageminWebp({ quality: 70 })],
});

console.log("Конвертация в WEBP завершена");
