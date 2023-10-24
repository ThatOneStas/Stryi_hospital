document.addEventListener("DOMContentLoaded",()=>{
    const HERO_SLIDER = $(".hero__slider")
    HERO_SLIDER.slick({
        arrows: true,
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: 'linear',
        draggable: false,
        scroll: true
    })
})