$(document).ready(function(e) {
	
    $('.faq h2').click(function(e){
        $(this).parent().find('.faq_cnt').slideToggle();
        $(this).parent().siblings().find('.faq_cnt').slideUp();
        $(this).parent().toggleClass('active');
        $(this).parent().siblings().removeClass('active');
    })

    });