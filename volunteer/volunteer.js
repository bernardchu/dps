$( document ).ready( function() {
  $('.faq .answer').hide();
  $('.faq .question').click( function () {
    $( this ).next().slideToggle();
    $( this ).toggleClass( 'open' );
  } );
  
} )