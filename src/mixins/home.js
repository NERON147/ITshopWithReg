import Swiper, { Navigation, Pagination } from 'swiper';

export default {
    beforeUpdate () {
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            centeredSlides: true,
            speed: 600,
              grabCursor: true,
              initialSlide: 0,
              autoplay : {
                delay: 1000,
                disableOnInteraction: false,
              },
              
              loop: true,
              breakpoints: {
                1000: {
                  slidesPerView: 2,
                  
                },
                700: {
                  slidesPerView: 1,
                  
                },
                640: {
                  slidesPerView: 1,
                  
                },
                320: {
                  slidesPerView: 1,
                  
                }
              },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            keyboard: {
              enabled: true,
              onlyInViewport: false,
            },
          });
          },
          mounted () {
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            centeredSlides: true,
            speed: 600,
              grabCursor: true,
              initialSlide: 0,
              autoplay : {
                delay: 1000,
                disableOnInteraction: false,
              },
              
              loop: true,
              breakpoints: {
                1000: {
                  slidesPerView: 2,
                  
                },
                700: {
                  slidesPerView: 1,
                  
                },
                640: {
                  slidesPerView: 1,
                  
                },
                320: {
                  slidesPerView: 1,
                  
                }
              },
          
            // If we need pagination
            pagination: {
              el: '.swiper-pagination',
            },
          
            // Navigation arrows
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          
            // And if we need scrollbar
            scrollbar: {
              el: '.swiper-scrollbar',
            },
            keyboard: {
              enabled: true,
              onlyInViewport: false,
            },
          });
          }
}