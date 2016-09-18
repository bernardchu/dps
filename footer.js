$( document ).ready( function() {
  var footer = '<div class="footer">' +
      '<div class="social-icons">' +
        '<a href="https://twitter.com/dpsrescue" target="_blank" rel="noopener">' +
          '<img src="./images/twitter_icon.png" width="56" height="63">' +
        '</a>' +
        '<a href="https://facebook.com/dpsrescue" target="_blank" rel="noopener">' +
          '<img src="./images/facebook_icon.png" width="56" height="63">' +
        '</a>' +
        '<a href="https://instagram.com/dpsrescue" target="_blank" rel="noopener">' +
          '<img src="./images/instagram_icon.png" width="56" height="63">' +
        '</a>' +
      '</div>' +
      'Copyright 2016 Doggie Protective Services' +
    '</div>';
  $( 'body' ).append( footer );
} );