<?php

function renderBeginPage($page, $sub_page='') {
  $markup = <<<MARKUP
<?xml version="1.0"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <link href='https://fonts.googleapis.com/css?family=Nunito:400,300,700' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700,900,300italic,400italic' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" type="text/css" href="./dps_new.css">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>DPS Rescue</title>
    <meta name="description" content="Dog Rescue in California and Nevada" />
  </head>
  <body>
MARKUP;
  echo $markup;
  
  $masthead = getMastheadMarkup($page, $sub_page);
  echo $masthead;
  }

function renderEndPage() { 

  $footer_markup = getFooterMarkup();

  $markup = <<<MARKUP
    </body>
    </html>
MARKUP;
  
  echo $footer_markup;
  echo $markup;
}

function getFooterMarkup() {
  $markup = <<<MARKUP
    <div class="footer">
      <div class="social_icons">
      </div>
    </div>
MARKUP;

  return $markup;
}

function getNavLinks() {
  return array(
	       'home' => array(
			       'display' => 'Home',
			       ),
	       'adopt' => array(
				'display' => 'Adopt',
				'subheads' => array(
						    'available' => 'Available Animals',
						    'application' => 'Application',
						    'puppies' => 'Puppies',
						    'taiwan' => 'Project Taiwan',
						    'sticky' => 'Sticky Dogs',
						    'happytails' => 'Success Stories',
						    'faq' => 'FAQ'
						    ),
				'default' => 'available'
				),
	       'volunteer' => array(
				    'display' => 'Volunteer',
				    'subheads' => array(
							'volunteer' => 'Volunteer',
							'foster' => 'Foster',
							'meet-our-fosters' => 'Meet our Fosters'
							),
				    'default' => 'volunteer',
				    ),
	       'resources' => array(
				 'display' => 'Resources',
				 'subheads' => array(
						     'wishlist' => 'Wishlist',
						     'savealife' => 'Save a Life',
						     'intensive_care' => 'Intensive Care',
						     'mymutt' => 'My Mutt Program',
						     'train' => 'Train'
						     ),
				 'default' => 'wishlist'
				 ),
	       'about' => array(
				'display' => 'About',
				'subheads' => array(
						    'about' => 'About Us',
						    'contact' => 'Contact'
						    ),
				'default' => 'about'
				)
	       );
}

function getMastheadMarkup($current_page, $current_subpage='') {
  $markup = array();

  $markup[] = "<div class='masthead'>";
  $markup[] = '<span class="logo">Doggie Protective Services</span>';

  $pages = getNavLinks();
  foreach ($pages as $page => $page_info) {
    $class = 'primary_link';
    if ($page == $current_page) {
      $class .= ' selected';
    }
    $primary_link = $page_info['default'] ? $page_info['default'] . '.php' : '/';
    $primary_link_text = $page_info['display'];

    $markup[] = <<<MARKUP
<a class="$class" href="$primary_link">$primary_link_text</a>
MARKUP;
  }
  

  $markup[] = '</div>'; //end masthead
  return join('', $markup);
}
?>