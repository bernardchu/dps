const pdfToImgParams = {
    page: 1,
    w: 200,
    h: 259,
};

$(document).ready(function () {
    $.get(apis.newsletters)
        .then(function (response) {
            response.newsletters.map(function (newsletter) {
                // Add imgix params to PDF to make it into a preview image
                const imgUrl = new URL(newsletter.pdf);
                Object.keys(pdfToImgParams).forEach(function(param) {
                    imgUrl.searchParams.append(param, pdfToImgParams[param]);
                });
                newsletter.imgUrl = imgUrl;
                return newsletter;
            });
            HandlebarsHelpers.compile(response, "newsletters", ".newsletters");
        });
});

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