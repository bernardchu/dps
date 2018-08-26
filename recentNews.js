/**
 * Populate the left main pane on the home page with info from
 * the Featured API.
 */

var featuredUri = 'http://roastonbone.com/dps-test/dps-api/api/featured.php';
// var featuredUri = 'http://api.dpsrescue.com/api/featured.php';

$( document ).ready( function() {
  $.get( featuredUri )
    .then( function( response ) {
      var featuredNodes = response.map( function ( feature ) {
        return createFeatureNode( feature );
      } );
      featuredNodes.forEach( function ( node ) {
        $( '.features' ).append( node );
      } );
    } );

} );

function createFeatureNode ( feature ) {
  var node = $( '<div class="col-md-12 featured card"></div>' );

  node.append($( '<h2>' + feature.title + '</h2><hr>' ));

  if ( feature.description ) {
    feature.description.forEach( function ( paragraph ) {
      node.append($( '<p>' + paragraph + '</p>' ));
    } )
  }

  if ( feature.imgurl ) {
    var image = $( '<span class="featured_img"><a><img></a></div>' );
    image.find( 'img' ).attr( 'src', feature.imgurl );
    if (feature.href) {
      image.find( 'a' ).attr( 'href', feature.href );

      if (feature.new_tab) {
        image.find( 'a' ).attr( 'target', '_blank');
      }
    }
    node.append(image);
  }

  if ( feature.href_text ) {
    var link = $( '<div><a href="">' + feature.href_text + '</a></div>' );
    link.find( 'a' ).attr( 'href', feature.href );

    if (feature.new_tab) {
      link.find( 'a' ).attr( 'target', '_blank');
    }
    node.append(link);
  }

  if ( feature.paypal ) {
    node.append($( feature.paypal ));
  }

  return node;
}

/**
 * Example API response:
 *
   [
     {
       "title": "Get Your 2019 DPS Calendar Now!",
       "imgurl": "http://dps-festive.imgix.net/images/news/2019-calendar-cover.jpg?ixlib=php-2.1.1",
       "description": [
         "The 2019 DPS Calendar is now available to order! Read about and see cute photos of some our Happiest Tales. Proceeds will support our veterinary fund."
       ],
       "href": "./donate/calendar.php",
       "href_text": "Order yours now"
     },
     {
       "title": "Save the Date!",
       "imgurl": "http://dps-festive.imgix.net/images/news/2018-bay-area-pet-fair.png?ixlib=php-2.1.1",
       "description": [
         "Mark your calendars! DPS’s biggest event of the year is just around the corner. Come check out our booth at the Bay Area Pet Fair on September 15th and 16th. There will be dogs galore and tons of fun activities to do with your pet."
       ],
       "href": "www.bayareapetfair.org/",
       "href_text": "Read more",
       "new_tab": 1
     },
     {
       "title": "DPS in the News",
       "imgurl": "http://dps-festive.imgix.net/images/news/2018-orphaned-puppies.png?ixlib=php-2.1.1",
       "description": [
         "Check out this adorable video PAWSitivity made about one of our litters!"
       ],
       "href": "https://www.youtube.com/watch?v=GXMdApiJjf8&t=79s",
       "href_text": "Watch now",
       "new_tab": 1
     }
   ]
 */
