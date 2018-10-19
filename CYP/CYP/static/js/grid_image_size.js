// alert($('.list-items figure').height());
$('.list-items figure').height($('.box-photo').width() * 0.714);
// alert($('.list-items figure').height());

var page_data = document.getElementById('page_location');
var page_number = page_data.dataset.page_number;
var page_start = page_data.dataset.page_number_start;
var page_end = page_data.dataset.page_number_end;
var next_page = (parseInt(page_number)+1).toString();

for (i = page_start; i <= page_end; i++) {
  if (i == page_number){
    $('#paginate_pages').append('<span class="item current">'+i+'</span>');
  } else {
    $('#paginate_pages').append('<a class="item" href="/recent_news/?page='+i+'">'+i+'</a>');
  }
}

if (page_number != page_end){
  $('#paginate_more').append('<a class="item more" href="/recent_news/?page=' + next_page + '">SHOW ME MORE</a>');
}

if (page_number > 1) {
  var page_path = page_data.dataset.page_path +  " | Page " + page_number;
  page_data.dataset.page_path = page_path;
}

// Handles the case when an article has too many people mentioned and the avatars below the article overflow into a second line
var avatar_holder_width = $('.list-items .box-left').width();
var total_avatars_held = ~~(avatar_holder_width/33);


var article_avatar_NodeList = document.querySelectorAll('.list-users');
for (var i = 0; i < article_avatar_NodeList.length; i++) {
  var amount_people = article_avatar_NodeList[i].dataset.number_people_linked;
  var avatar_NodeList = article_avatar_NodeList[i].querySelectorAll('.people');
  console.log('amount of people:', amount_people, 'total_avatars_held:', total_avatars_held-1);

  if (amount_people > (total_avatars_held -1)){
    // alert('TOO MANY PEOPLE!!!');
    for (var ii = total_avatars_held-2; ii < avatar_NodeList.length; ii++) {
      avatar_NodeList[ii].style.display = "none";




      // var svg = d3.select(document.getElementById('united-states')).append("svg")
      //   .attr("width", window_width)
      //   .attr("height", window_height);
      //
      //
      //   svg.append("clipPath")
      //       .attr("id", "clip-land")
      //     .append("use")
      //       .attr("xlink:href", "#land");

    };

    article_avatar_NodeList[i].querySelector('.more_people').style.display = "block";
    // var more_avatars = d3.select(article_avatar_NodeList[i]).append("li");
    // more_avatars.append("div")
    //   .attr('class', 'item js-user')
    //   .append('a')
    //     .attr('title', 'there_is_more_avatars')
    //     .attr('href', '#')
    //     .append('img')
    //       .attr('class', 'b-lazy')
    //       .attr('src', '/static/images/kristian2.jpeg')
    //       .attr('data-src', '/static/images/kristian2.jpeg')
    //       .attr('data-src-small', '/static/images/kristian2.jpeg')
    //       .attr('data-src-medium', '/static/images/kristian2.jpeg')
    //       .attr('alt', 'there_is_more_avatars')
    //       .attr('width', '27')
    //       .attr('height', '27');

  };
};


$('.source_row').each(function(){
  // alert($(this).parent());
  var parent_height = $(this).parent().height();
  var title_height = $(this).parent().find('.title_row').height();
  var source_height = $(this).height();
  var date_height = $(this).parent().find('.date_row').height();

  var padding_height = parent_height - (title_height + source_height + date_height + 12)

  $(this).css("margin-top", padding_height);
});


//
// [].forEach.call(document.querySelectorAll('.list-users'), function(e) {
//
//   var amount_people = e.dataset.number_people_linked;
//   // console.log('amount of people:', amount_people);
//   var elements = e.getElementsByClassName('.people');
//
//   console.log('amount of people:', amount_people, 'total_avatars_held:', total_avatars_held-1);
//
//   if (amount_people > (total_avatars_held -1)){
//
//     // elements = elements.slice(total_avatars_held);
//     elements.each(function(d) {
//       console.log("shit");
//       $( this ).css("display", "none");
//     });


    // [].forEach(elements.slice(total_avatars_held), function() {
    //   alert("hi");
    //   $(this).css("display", "none");
    // })

    // elements.slice(0, (total_avatars_held -1)).show();
    // elements.slice(0, (amount_people -1)).show();
    // amount_people = amount_people -1;
    // add and show a dot dot dot between last avatar and the heart thingy
  // };
  // $( this ).find('.people').show().hide();
// });

// document.querySelectorAll('.list-users').each(function(e){
//   var list_users = e;
//
//   var amount_people = $(this).dataset.number_people_linked;
//   var elements = $( this ).find('li');
//   elements.hide();
//
//   if (amount_people > (total_avatars_held -1)){
//     elements.slice(0, amount_people -1).show();
//     amount_people = amount_people -1;
//     // add and show a dot dot dot between last avatar and the heart thingy
//   }
// });






var sides = $('.box-photo').width();
var tops = $('.box-photo').width() * 0.714;

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
            // console.log("correcting for small width", $(ele).width(), sides);
            $(ele).height("auto");
            $(ele).width(sides);
            // $('.list-items figure').height($(ele).width() * 0.714);
          }

          if (Math.round($(ele).height(), -1) < Math.round(tops, -1)) {
            // console.log("correcting for small height", $(ele).height(), tops);
            $(ele).width("auto");
            // $('.list-items figure').height($(ele).width() * 0.714);
            $(ele).height(tops);
          }

        }

    }
  });

});
