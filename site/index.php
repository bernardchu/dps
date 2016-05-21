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
      <div class="header">
        <img src="./images/recent_news_header.png" width="370" height="74">
      </div>
      <div class="body">
      </div>
   </div>

MARKUP;


  echo $markup;
}

function renderEvents() {
}

?>