$( document ).ready( function() {
	//var eventsApi = 'http://roastonbone.com/dps-test/dps-api/api/dates.php';
  var eventsApi = 'http://api.dpsrescue.com/api/dates.php';
  var noEventsFoundNode = '<h4 class="event">No upcoming events - stay tuned for updates!</h4>';

  $.get( eventsApi )
    .then( function( locations ) {
      var locationNodes = Object.keys(locations).map( function ( location ) {
        return createLocationNode(locations[location]);
      } );
      locationNodes.forEach( function ( node ) {
        $( '.dates' ).append( node );
      } );
      if (!locationNodes.length) {
        $( '.dates' ).append( noEventsFoundNode );
      }
    } );
} );

function createLocationNode(location) {
  var locationNode = $( '<div class="event-location">' +
      '<h3>' + location.name + '</h3>' +
      '<a href="location.map_url">Location and directions</a>' +
    '</div>' );
  location.events && location.events.forEach( function (event) {
    locationNode.append(createEventNode(event));
  });
  return locationNode;
}

function createEventNode (event) {
  var eventNode = $( '<div class="event">'
             +'<div class="event-date">' + event.date + '</div>'
             +'<div class="event-time">' + event.time + '</div>'
           +'</div>');
  if (event.note) {
    eventNode.append($('<div class="event-note">' + event.note + '</div>'));
  }
  return eventNode;
}

/**
 * Example API response:
 * {
   "palo alto":{
      "name":"Palo Alto Pet Food Express",
      "map_url":"http:\/\/petfoodexpress.com\/stores\/detail\/palo-alto",
      "events":[
         {
            "date":"Sunday, August 26th",
            "time":"11:00am - 3:00pm",
            "note":"Please note we will not start adoption interviews after 2:30pm"
         }
      ]
   },
   "redwood city":{
      "name":"Redwood City Pet Food Express @ Woodside Plaza",
      "map_url":"http:\/\/maps.google.com\/maps?daddr=372%20Woodside%20Plaza,Redwood%20City,CA,94061",
      "events":[
         {
            "date":"Sunday, September 2nd",
            "time":"12:00pm - 4:00pm"
         }
      ]
   },
   "adoptathon":{
      "name":"Bay Area Pet Fair",
      "map_url":"http:\/\/www.bayareapetfair.org\/contact-us",
      "events":[
         {
            "date":"Saturday, September 15th",
            "time":"10:00am - 5:00pm"
         },
         {
            "date":"Sunday, September 16th",
            "time":"10:00am - 5:00pm"
         }
      ]
   }
}
 */
