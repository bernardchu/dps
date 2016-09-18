$( document ).ready( function() {
  var eventsApi = 'http://api.dpsrescue.com/api/dates.php';
  var noEventsFoundNode = '<h4 class="event">No upcoming events - stay tuned for updates!</h4>'

  $.get( eventsApi )
    .then( function( events ) {
      var eventNodes = events.map( function ( event ) {
        return createEventNode( event );
      } );
      eventNodes.forEach( function ( node ) {
        $( '.dates' ).append( node );
      } );
      if (!eventNodes.length) {
        $( '.dates' ).append( noEventsFoundNode );
      }
    } );
} );

function createEventNode (event) {
  return $( '<div class="event">'
             +'<div class="event-date">'
               +'<div class="event-day-of-month">' + event.day_of_month + '</div>'
               +'<div class="event-month"><em>' + event.month + '</em></div>'
             +'</div>'
             +'<div class="event-details">'
               +'<em class="event-day-of-week">' + event.day_of_week + '</em><br/>'
               +'<em class="event-time">' + event.time + '</em>'
               +'<a href="' + event.location_map + '" target="_blank">'
                 +'<div class="event-location">' + event.location_name + '</div>'
                 +'<div class="event-address">' + event.location_address + '</div>'
               +'</a>'
             +'</div>'
           +'</div>');
}

/* Example event
day_of_month:"24"
day_of_week:"Saturday"
location_address:"3910 Middlefield Road"
location_map:"http://maps.google.com/maps?daddr=3910%20Middlefield%20Road,Palo%20Alto%20,CA,94303"
location_name:"Palo Alto Pet Food Express"
month:"September"
time:"12:00pm - 3:00pm"
*/