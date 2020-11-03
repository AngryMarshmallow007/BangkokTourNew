$(function(){
    $('.asian-way__slider').slick({
        prevArrow: '<button class="asian-way__slider-btn asian-way__slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="asian-way__slider-btn asian-way__slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infiniti: false,
    });

    $('.food__slider').slick({
        prevArrow: '<button class="food__slider-btn food__slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17"/></svg></button>',
        nextArrow: '<button class="food__slider-btn food__slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1"/></svg></button>',
        infiniti: false,
    });
	
	 $(".menu, .food").on("click","a", function (event) {

         //отменяем стандартную обработку нажатия по ссылке
         event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
       
        top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
         $('body,html').animate({scrollTop: top}, 1500);
       });
});