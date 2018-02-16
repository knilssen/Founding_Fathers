var sides = $('.box-photo').width();
var tops = $('.box-photo').width() * 0.714;

$('.box-photo img').each(function(){
        var height = $(this).prop('naturalHeight');
        var width = $(this).prop('naturalWidth');

        if (height > width) {
          $( this ).width('100%');
          // $('.list-items figure').height($( this ).width() * 0.714);
        }

        if (height < width) {
          $( this ).height(tops);
        }

        if (Math.round($( this ).width(), -1) < Math.round(sides, -1)) {
          console.log("correcting for small width", $( this ).width(), sides);
          $( this ).height("auto");
          $( this ).width(sides);
          // $('.list-items figure').height($( this ).width() * 0.714);
        }

        if (Math.round($( this ).height(), -1) < Math.round(tops, -1)) {
          console.log("correcting for small height", $( this ).height(), tops);
          $( this ).width("auto");
          // $('.list-items figure').height($( this ).width() * 0.714);
          $( this ).height(tops);
        }

});

$('.list-items figure').height($('.box-photo').width() * 0.714);

// $('.list-items figure').height( * 0.714);
// $('.list-items figure').height($('.box-photo').width() * 0.714);

$("#outlines .land").hover(function(){
    $(this).css("fill", "#49c5b6");
    }, function(){
      $(this).css("fill", "#D3D3D3");
  });

// document.getElementById('united-states').style.marginTop = ();


$(window).on('resize', function() {
    var height = Math.ceil((($('body').height() - 70) - $('#states').height()) / 2);

    $('#united-states').css({marginTop: height});
}).trigger('resize');


function nav_menu_click(e) {
  var s = document.querySelectorAll("#nav-main .menu li");

  [].forEach.call(s, function(e) {e.classList.remove("active")});
  alert(e);
  e.classList.add("active");
}

document.getElementById(document.getElementById('page_location').dataset.page).classList.add("active")

document.getElementById('location-path').textContent = document.getElementById('page_location').dataset.page_path

document.getElementById('states_menu_selector').onclick = function(e) {
  _openMenu(e.currentTarget);
};

document.getElementById('js-nav-menu').onclick = function(e) {
  _openMenu(e.currentTarget);
};

function _openMenu(e) {
  var t = e,
    n = document.getElementById(t.dataset.menuId),
    i = n.dataset.menuName,
    r = n.dataset.menuId,
    s = document.querySelectorAll("#nav-main .menu");
  [].forEach.call(s, function(e) {e.classList.remove("active")});
  n.classList.add("active");
  t.classList.contains("js-nav-main") ? document.querySelector(".js-nav-menu").textContent = i : (document.querySelector(".js-nav-menu").textContent = i, document.querySelector(".js-nav-menu").dataset.menuId = r);
}

document.getElementById('js-nav-main').onclick = function(t) {
  document.body.classList.toggle("nav-sidebar-open");
  _openMenu(t.currentTarget);
};

function closeNav() {
    var wrappershit = document.getElementsByClassName("wrapper")[0];
    document.body.classList.remove("nav-sidebar-open");
}

function delay (URL) {
    closeNav();
    setTimeout( function() { window.location = URL }, 500 );
}
