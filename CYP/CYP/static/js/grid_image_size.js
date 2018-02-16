// alert($('.list-items figure').height());
$('.list-items figure').height($('.box-photo').width() * 0.714);
// alert($('.list-items figure').height());

$('.source_row').each(function(){
  // alert($( this ).parent());
  var parent_height = $( this ).parent().height();
  var title_height = $( this ).parent().find('.title_row').height();
  var source_height = $( this ).height();
  var date_height = $( this ).parent().find('.date_row').height();

  var padding_height = parent_height - (title_height + source_height + date_height + 12)

  $( this ).css("margin-top", padding_height);
});
