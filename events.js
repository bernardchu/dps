$( document ).ready( function() {
  var eventsApi = 'http://dpsrescue.org/api/dates.php'
  $.get( eventsApi )
    .then( function( response ) {
      var events = _.flatten( response );
      var eventNodes = events.map( function ( event ) {
        return createEventNode( event );
      } );
      eventNodes.forEach( function ( node ) {
        $( '.dates' ).append( node );
      } );
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