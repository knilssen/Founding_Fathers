$('.menu-tabs li .menu-item').click(function() {
  var s = document.querySelectorAll(".menu-tabs li");
  [].forEach.call(s, function(e) {e.classList.remove("active")});

  var display_id = this.classList[1]

  var info = document.querySelectorAll(".list-users-votes");
  [].forEach.call(info, function(e) {e.style.display = "none"});

  this.parentNode.classList.add("active");

  document.getElementById(display_id).style.display = "block";
});



var data_width = $('.box-information').width();

var sides = $('.box-photo').width();
var tops = $('.box-photo').width() * 0.714;

$('.box-photo img').each(function(){
        var height = $(this).prop('naturalHeight');
        var width = $(this).prop('naturalWidth');

        if (height > width) {
          $( this ).width('100%');
        }

        if (height < width) {
          $( this ).height(tops);
        }

        if (Math.round($( this ).width(), -1) < Math.round(sides, -1)) {
          console.log("correcting for small width", $( this ).width(), sides);
          $( this ).height("auto");
          $( this ).width(sides);
        }

        if (Math.round($( this ).height(), -1) < Math.round(tops, -1)) {
          console.log("correcting for small height", $( this ).height(), tops);
          $( this ).width("auto");
          $( this ).height(tops);
        }

});


$('.js-social').click(function() {

  document.querySelector('.list-share-circles').classList.toggle('style2');

  // $('list-share-circles').classList.toggle('style2');

});

var v_height = ($(window).height()/2) - $('.box-information').height()/2;

$(".nav-sections li .navscroll").click(function() {
    $('html, body').animate({
        scrollTop: $("#" + (this.dataset.idpage)).offset().top - (($(window).height()/2) - $("#" + this.dataset.idpage).height()/2)
    }, 1400);
});




// $('#user-votes').css('transform', "translateX(" + data_width + "px" + ")");

// .css({
//   '-webkit-transform' : 'translateX(" + data_width + ")"',
//   'transform'         : 'translateX(" + data_width + ")"'
// });

// document.getElementById('user-votes').style.webkitTransform = "translateX(" + data_width + "px" + ")";
// document.getElementById('user-votes').style.transform = "translateX(" + data_width + "px" + ")";

// .style.transform = "translateX(" + data_width + ")";

// $('#user-votes').css({
//   '-webkit-transform' : 'translateX(" + data_width + ")"',
//   'transform'         : 'translateX(" + data_width + ")"'
// });

// alert(data_width);

// $('.active_data').css('-webkit-transform', "translateX(" + data_width + ")");
// $('.active_data').css('transform', "translateX(" + data_width + ")");


// document.getElementById('jury_votes').style.webkitTransform = "translateX(" + data_width + "px" + ")";
//
// document.getElementById('user_votes').style.transform = "translateX(" + data_width + "px" + ")";



// function select_people() {
//   $('#jury_votes').transition({x:data_width});
// }
//
// function select_social() {
//   $('#user_votes').transition({x:( -1 * data_width)});
// }


// $('.list-users-votes.active_data').transition({ scale: 0, delay: 500 });
