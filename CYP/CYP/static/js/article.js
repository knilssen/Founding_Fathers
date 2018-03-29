$('.menu-tabs li .menu-item').click(function() {
  var s = document.querySelectorAll(".menu-tabs li");
  [].forEach.call(s, function(e) {e.classList.remove("active")});

  var display_id = this.classList[1]

  var info = document.querySelectorAll(".list-users-votes");
  [].forEach.call(info, function(e) {e.style.display = "none"});

  this.parentNode.classList.add("active");

  document.getElementById(display_id).style.display = "block";
});

document.getElementById('back_image').style.backgroundImage = 'url(' + document.getElementById('page_location').dataset.page_picture + ')';

$('.box-site-head .box-bg:before').css({ 'background-image': 'url(' + document.getElementById('page_location').dataset.page_picture + ')' });


$('.nav-sections ul#nav-section-menu').css( { "margin-left" : ($(window).width()/2) - ($('.nav-sections ul#nav-section-menu').width()/2) } );

var data_width = $('.box-information').width();

var sides = $('.box-photo').width();
var tops = $('.box-photo').width() * 0.714;


$('.js-social').click(function() {

  document.querySelector('.list-share-circles').classList.toggle('style2');


});

var v_height = ($(window).height()/2) - $('.box-information').height()/2;

$(".nav-sections li .navscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#" + (this.dataset.idpage)).offset().top - (($(window).height()/2) - $("#" + this.dataset.idpage).height()/2)
    }, 1400);
});




$(document).ready(function(){
  var $slider = $('.nav-sections .slider'),
      width = $('.nav-sections li span').width;
  $slider.width( width );
});

$(window).resize(function(){
  var $slider = $('.nav-sections .slider');
  var width = $('.nav-sections li span').width;
  var $isActive = $('.nav-sections li.active span');
  var isX = $isActive.position().left;
  var isW = $isActive.width();
  var y = $isActive.position().top + $isActive.outerHeight(true);;
  $slider.css({ left: isX, width: isW, top: y });


  $('.nav-sections li').each(function(){
    var x = $(this).position().left;
    var w = $(this).find('span').width();

    $(this).on({
      mouseenter: function(){
        $slider.css({ left: x, width: w, top: y });
      }, mouseleave: function(){
        $slider.css({ left: isX, width: isW, top: y });
      }
    });
  });
}).resize();

// Lazy loads all images on the page
$( document ).ready(function() {

  var bLazy = new Blazy({
    selector: 'img' // all images

    , breakpoints: [{
              width: 420 // max-width
		        , src: 'data-src-small'
       }
     , {
              width: 768 // max-width
            , src: 'data-src-medium'
    }]

    , success: function(ele){
        if ($(ele).hasClass("article_top_image")){

          var height = $(ele).prop('naturalHeight');
          var width = $(ele).prop('naturalWidth');

          if (height > width) {
            $(ele).width('100%');
            // $('.list-items figure').height($(ele).width() * 0.714);
          }

          if (height < width) {
            $(ele).height(tops);
          }

          if (Math.round($(ele).width(), -1) < Math.round(sides, -1)) {
            console.log("correcting for small width", $(ele).width(), sides);
            $(ele).height("auto");
            $(ele).width(sides);
            // $('.list-items figure').height($(ele).width() * 0.714);
          }

          if (Math.round($(ele).height(), -1) < Math.round(tops, -1)) {
            console.log("correcting for small height", $(ele).height(), tops);
            $(ele).width("auto");
            // $('.list-items figure').height($(ele).width() * 0.714);
            $(ele).height(tops);
          }

        }

    }
  });

});
