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