<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.5.7/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.5.8/slick-theme.min.css" />

<?php

define("BASE_PATH", './');
require_once('render_util.php');

renderBeginPage('home');

renderHero();
renderNews();
renderEvents();

renderEndPage();


function renderHero() {
  $markup = <<<MARKUP
    <div class='hero'>
      <div class='header'><b>rescue</b> the mistreated | <b>save</b> the injured | <b>love</b> the abandoned</div>
      <div class="adoptable"></div>
    </div>
MARKUP;

  echo $markup;
}

function renderNews() {
  $markup = <<<MARKUP
    <div class="news">
      <img class="faq-button" src="./images/faq_button.png" width="168" height="158">
      <div class="header">
        <img src="./images/recent_news_header.png" width="386" height="77">
      </div>
      <div class="body">
        <div class="featured"></div>
      </div>
   </div>

MARKUP;

  echo $markup;
}

function renderEvents() {
  $markup = <<<MARKUP
    <div class="events">
      <div class="header">
        <img src="./images/upcoming_events_header.png" width="440" height="76">
      </div>
      <div class="dates">
      </div>
    </div>
MARKUP;

  echo $markup;
}

?>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-rc1/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.7/slick.min.js"></script>
<script type="text/javascript" src="./carousel.js"></script>
