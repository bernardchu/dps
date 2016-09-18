$( document ).ready( function() {
  var eventsApi = 'http://dpsrescue.org/api/dates.php';
  var noEventsFoundNode = '<h4 class="event">No upcoming events - stay tuned for updates!</h4>'

  $.get( eventsApi )
    .then( function( response ) {
      var events = _.flatten( response );
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
  var date = moment( event.date, 'MM/D/YYYY' );
  return $( '<span class="event">'
             +'<div class="event-day">' + date.format('dddd') + '</div>'
             +'<div class="event-date">' + date.format('MMM D') + '</div>'
             +'<div class="event-time">' + event.time + '</div>'
           +'</span>');
}