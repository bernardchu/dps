// deprecated in favor of Bonfire merch link

const pdfToImgParams = {
    page: 1,
    w: 700,
    h: 500,
    fit: 'fill',
    fill: 'solid',
    'fill-color': '2E8C69'
};

$(document).ready(function () {
    $.get(apis.newsletters)
        .then(function (response) {
            if (response.newsletters && !response.newsletters.length) { return }
            const latest = response.newsletters.shift();
            const newsLetterNode = createNewsletterNode(latest);
            $('.features').append(newsLetterNode);
        });
});

function createNewsletterNode (newsletter) {

    var node = $('<div class="col-md-12 featured card"></div>');
    node.append($('<h2>DPS Weekly Update: ' + newsletter.date + '</h2><hr>'));

    var image = $('<span class="featured_img"><a><img></a></div>');
    const imgUrl = new URL(newsletter.pdf);
    Object.keys(pdfToImgParams).forEach(function(param) {
        imgUrl.searchParams.append(param, pdfToImgParams[param]);
    });
    image.find('img').attr('src', imgUrl);
    image.find('a').attr('href', newsletter.link);
    node.append(image);

    var link = $('<div><a href="/newsletters/">Read all of our past newsletters</a></div>');
    node.append(link);

    return node;
}

/**
 * Example API Response:
 *
 {
  "newsletters": [
    {
      "date": "May 4, 2020",
      "link": "https://myemail.constantcontact.com/More-PAWS-itive-News-from-DPS-Rescue.html?soid=1132827993451&aid=A2oLDAh-_TA",
      "pdf": "http://dps-festive.imgix.net/images/news/newsletter/2020-05-04.pdf"
    },
    {
      "date": "April 27, 2020",
      "link": "https://myemail.constantcontact.com/Your-Weekly-Dose-of-PAWS-itivity-from-DPS-Rescue.html?soid=1132827993451&aid=mo9owNXPj24",
      "pdf": "http://dps-festive.imgix.net/images/news/newsletter/2020-04-27.pdf"
    },
    {
      "date": "April 20, 2020",
      "link": "https://myemail.constantcontact.com/DPS-Rescue-Sends-PAWS-itive-Vibes-.html?soid=1132827993451&aid=FxbJi8DMGVs",
      "pdf": "http://dps-festive.imgix.net/images/news/newsletter/2020-04-20.pdf"
    }
  ]
}
 */
