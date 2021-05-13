export default function () {

    var swiper = new Swiper("#productPageThumbNail", {
        loop: true,
        spaceBetween: 15,
        slidesPerView: 4.5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper("#productPageLarge", {
        loop: true,
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });

}