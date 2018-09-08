/**
 * Populate the left main pane on the home page with info from
 * the Featured API.
 */

// var featuredUri = 'http://roastonbone.com/dps-test/dps-api/api/featured.php';
var featuredUri = 'http://api.dpsrescue.com/api/featured.php';

$(document).ready(function () {
  $.get(featuredUri)
    .then(function (response) {
      var featuredNodes = response.map(function (feature) {
        return createFeatureNode(feature);
      });
      featuredNodes.forEach(function (node) {
        $('.features').append(node);
      });
    });

});

function createFeatureNode (feature) {
  var node = $('<div class="col-md-12 featured card"></div>');

  node.append($('<h2>' + feature.title + '</h2><hr>'));

  if (feature.description) {
    node.append($('<p>' + feature.description + '</p>'));
  }

  if (feature.imgurl) {
    var image = $('<span class="featured_img"><a><img></a></div>');
    image.find('img').attr('src', feature.imgurl);
    if (feature.href) {
      image.find('a').attr('href', feature.href);

      if (feature.new_tab) {
        image.find('a').attr('target', '_blank');
      }
    }
    node.append(image);
  }

  if (feature.href_text) {
    var link = $('<div><a href="">' + feature.href_text + '</a></div>');
    link.find('a').attr('href', feature.href);

    if (feature.new_tab) {
      link.find('a').attr('target', '_blank');
    }
    node.append(link);
  }

  if (feature.paypal) {
    node.append($(feature.paypal));
  }

  return node;
}

/**
 * Example API response:
 *
 [{
  "title"      : "Get Your 2019 DPS Calendar Now!",
  "imgurl"     : "http:\/\/dps-festive.imgix.net\/images\/news\/2019-calendar-cover.png?fm=pjpg&ixlib=php-2.1.1&w=700",
  "description": "The 2019 DPS Calendar is now available to order! Read about and see cute photos of some our Happiest Tales. Proceeds will support our veterinary fund.",
  "href"       : "http:\/\/dpsrescue.com\/donate\/calendar\/",
  "href_text"  : "Order yours now"
}, {
  "title"      : "Save the Date!",
  "imgurl"     : "http:\/\/dps-festive.imgix.net\/images\/news\/2018-bay-area-pet-fair.png?fm=pjpg&ixlib=php-2.1.1&w=700",
  "description": "Mark your calendars! DPS\u2019s biggest event of the year is just around the corner. Come check out our booth at the Bay Area Pet Fair on September 15th and 16th. There will be dogs galore and tons of fun activities to do with your pet.",
  "href"       : "http:\/\/www.bayareapetfair.org\/",
  "href_text"  : "Read more",
  "new_tab"    : 1
}]
 */
