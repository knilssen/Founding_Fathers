$('.menu-tabs li .menu-item').click(function() {
  var s = document.querySelectorAll(".menu-tabs li");
  [].forEach.call(s, function(e) {e.classList.remove("active")});

  var display_id = this.classList[1]

  var info = document.querySelectorAll(".list-users-votes");
  [].forEach.call(info, function(e) {e.style.display = "none"});

  this.parentNode.classList.add("active");

  document.getElementById(display_id).style.display = "block";
});

// $('.list-items figure').height($('.box-photo').width() * 0.714);

// document.getElementById( 'back_image').style.backgroundImage = 'url(' + document.getElementById('page_location').dataset.page_picture + ')';

// document.getElementById('back_image').style.backgroundImage = 'url(' + document.getElementById('page_location').dataset.page_picture + ')';

// $('.box-site-head .box-bg:before').css({ 'background-image': 'url(' + document.getElementById('page_location').dataset.page_picture + ')' });


$('.nav-sections ul#nav-section-menu').css( { "margin-left" : ($(window).width()/2) - ($('.nav-sections ul#nav-section-menu').width()/2) } );

var data_width = $('.box-information').width();

// var sides = $('.box-photo').width();
// var tops = $('.box-photo').width() * 0.714;


$('.js-social').click(function() {

  document.querySelector('.list-share-circles').classList.toggle('style2');


});


$("#text-settings .tooltip").click(function() {
    $('html, body').animate({
        scrollTop: $(this).offset().top - 80
    }, 700);
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

var tops = document.getElementById('article_image');
var sides = $('.box-photo').width();

function initBLazy() {
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
          }

          if (height < width) {
            $(ele).height(tops);
          }

          if (Math.round($(ele).width(), -1) < Math.round(sides, -1)) {
            // console.log("correcting for small width", $(ele).width(), sides);
            // $(ele).height("auto");
            $(ele).width(sides);
          }

          if (Math.round($(ele).height(), -1) < Math.round(tops, -1)) {
            // console.log("correcting for small height", $(ele).height(), tops);
            // $(ele).width("auto");
            $(ele).height(tops);
          }

        }

    }
    });
}


// $('.menu-dropdown li').click(function(e) {
//   close_filters();
// });

$('#phone-nav').click(function(){
  setTimeout(function() {
  document.getElementById('text-settings-dropdown').classList.toggle("open");
  document.getElementById('box-filters-fixed').classList.toggle("active");
  var re_use = document.getElementById('open-filter-scroll');
    re_use.style.display = "block";
    re_use.classList.add('box-loading');
    re_use.classList.add('style2');
    re_use.classList.add('show');
    re_use.classList.add('open');
  // document.getElementById('box-filters-fixed').style.position = "fixed";
  // document.getElementById('header').style.position = "fixed";
}, 700);
});

$('#text-settings .tooltip').click(function(e) {
  // console.log(document.getElementById('text-settings-dropdown').classList);
  setTimeout(function() {
  document.getElementById('text-settings-dropdown').classList.toggle("open");
  document.getElementById('box-filters-fixed').classList.toggle("active");
  var re_use = document.getElementById('open-filter-scroll');
    re_use.style.display = "block";
    re_use.classList.add('box-loading');
    re_use.classList.add('style2');
    re_use.classList.add('show');
    re_use.classList.add('open');
  // document.getElementById('box-filters-fixed').style.position = "fixed";
  // document.getElementById('header').style.position = "fixed";
}, 700);
});

// function close_filters() {
//   // document.getElementById('open-filter-scroll').classList.remove("show"), setTimeout(function() {
//   //   document.getElementById('open-filter-scroll').style.display = "none",
//   //   document.getElementById('open-filter-scroll').classList.remove("box-loading", "style2", "open", "show"),
//   //   document.getElementById('open-filter-scroll').isOpen = !1,
//   document.getElementById('text-settings-dropdown').classList.toggle("open");
//   document.getElementById('box-filters-fixed').classList.toggle("active");
//     // document.getElementById('header').style.position = "absolute"
//   // }, 400);
// }

$('#open-filter-scroll').click(function(e) {
  document.getElementById('open-filter-scroll').classList.remove("show"), setTimeout(function() {
    document.getElementById('open-filter-scroll').style.display = "none",
    document.getElementById('open-filter-scroll').classList.remove("box-loading", "style2", "open", "show"),
    document.getElementById('open-filter-scroll').isOpen = !1,
    document.getElementById('text-settings-dropdown').classList.remove("open"),
    document.getElementById('box-filters-fixed').classList.remove("active")
  }, 400);
});


function close_filters() {
  document.getElementById('open-filter-scroll').classList.remove("show"), setTimeout(function() {
    document.getElementById('open-filter-scroll').style.display = "none",
    document.getElementById('open-filter-scroll').classList.remove("box-loading", "style2", "open", "show"),
    document.getElementById('open-filter-scroll').isOpen = !1,
    document.getElementById('text-settings-dropdown').classList.remove("open"),
    document.getElementById('box-filters-fixed').classList.remove("active")
  }, 400);
};

var font_spot = 1;
var default_font = 1;
var total_fonts = 3;
var font_list = ['ff-meta-serif-web-pro', 'sans-serif', 'monospace'];

var default_font_size = 20;
var font_size = 20;

var default_text_width = 25;
var text_width = 25;


document.getElementById('font-setting').innerHTML = 'Font ' + font_spot;

$('#font-next').click(function() {
  if(font_spot === total_fonts){font_spot = 0;};
  font_spot++;
  document.getElementById('font-setting').innerHTML = 'Font ' + font_spot;
  $('.article-text').css({ 'font-family': font_list[font_spot-1]});
});

$('#font-last').click(function() {
  if(font_spot === 1){font_spot = total_fonts + 1;};
  font_spot--;
  document.getElementById('font-setting').innerHTML = 'Font ' + font_spot;
  $('.article-text').css({ 'font-family': font_list[font_spot-1]});
});



document.getElementById('font-size-setting').innerHTML = font_size + "px";

$('#font-increase').click(function() {
  font_size++;
  document.getElementById('font-size-setting').innerHTML = font_size + "px";
  $('.article-text').css({ fontSize: font_size});
});

$('#font-decrease').click(function() {
  font_size--;
  document.getElementById('font-size-setting').innerHTML = font_size + "px";
  $('.article-text').css({ fontSize: font_size});
});



document.getElementById('text-width-setting').innerHTML = text_width + "%";

$('#text-width-increase').click(function() {
  text_width++;
  document.getElementById('text-width-setting').innerHTML = text_width + "%";
  $('.article-text').css({ paddingLeft: text_width + "%", paddingRight: text_width + "%"});
});

$('#text-width-decrease').click(function() {
  text_width--;
  document.getElementById('text-width-setting').innerHTML = text_width + "%";
  $('.article-text').css({ paddingLeft: text_width + "%", paddingRight: text_width + "%"});
});



$('#revert_to_default').click(function() {
  document.getElementById('font-size-setting').innerHTML = default_font_size + "px";
  $('.article-text').css({ fontSize: default_font_size});

  document.getElementById('text-width-setting').innerHTML = default_text_width + "%";
  $('.article-text').css({ paddingLeft: default_text_width + "%", paddingRight: default_text_width + "%"});

  document.getElementById('font-setting').innerHTML = "Font " + default_font;
  $('.article-text').css({ 'font-family': font_list[default_font-1]});


  font_spot = default_font;
  font_size = default_font_size;
  text_width = default_text_width;


  close_filters();
});



// Lazy loads all images on the page
$( document ).ready(function() {

  initBLazy();

});
