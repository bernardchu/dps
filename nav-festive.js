var states = [
  {
    name: 'Home',
    route: '/'
  },
  { name: 'Adopt',
    route: '/adopt',
    children: [
      {
        name: 'Available Animals',
        route: '/available'
      },
      {
        name: 'Application',
        route: '/application'
      },
      {
        name: 'Cat Application',
        route: '/cat-application'
      },
      {
        name: 'Sticky Dogs',
        route: '/sticky'
      },
      {
        name: 'Rehome',
        route: '/rehome'
      },
    ]
  },
  { name: 'Volunteer',
    route: '/volunteer',
    children: [
      {
        name: 'Meet Our Volunteers',
        route: '/meet-our-volunteers'
      },
    ]
  },
  { name: 'Foster',
    route: '/foster',
    children: [
      {
        name: 'Meet Our Fosters',
        route: '/meet-our-fosters'
      },
    ]
  },
  { name: 'Donate',
    route: '/donate',
    children: [
      {
        name: 'Intensive Care',
        route: '/icu'
      },
      {
        name: 'My Mutt Program',
        route: '/my-mutt'
      },
    ]
  },
  { name: 'Success Stories',
    route: '/success-stories',
    children: []
  },
  {
    name: 'Train',
    route: '/train'
  },
  { name: 'About',
    route: '/about',
    children: [
      {
        name: 'Contact',
        route: '/contact'
      },
      {
        name: 'FAQ',
        route: '/faq'
      }
    ]
  }
];

$( 'document' ).ready( function () {
  var nav = new Nav( states );
  $( 'body' ).prepend( nav.buildNav() );
} );

function Nav (states) {
  this.states = states;
  this.mastheadNode = $( '<div class="masthead"></div>' );
  this.heroNode = $( '<div class="row hero"></div>' );
  this.logoNode = $( '<a href="" class="logo col-md-2"><img src="http://dps-festive.imgix.net/images/dps-logo.png?fm=jpg&w=200&pad=10" alt="DPS Logo" /></a>' );
  this.logoNode.attr( 'href', window.location.origin );
  this.titleNode = $( '<div class="col-md-8 title"><h1>Doggie Protective Services</h1></div>' );
  this.socialNode = $( '<div class="col-md-2 social"></div>' );
  this.twitterNode = $( '<a href="https://twitter.com/dpsrescue" target="_blank"><img src="http://dps-festive.imgix.net/images/social-icons-twitter.png?w=35" alt="@DPSRescue" /></a>');
  this.facebookNode = $( '<a href="https://www.facebook.com/DPSRescue" target="_blank"><img src="http://dps-festive.imgix.net/images/social-icons-facebook.png?w=35&bg=cd486b" alt="DPSRescue" /></a>');
  this.instagramNode = $( '<a href="https://www.instagram.com/dpsrescue/" target="_blank"><img src="http://dps-festive.imgix.net/images/social-icons-instagram.png?w=35&bg=cd486b&pad=7" alt="DPSRescue" /></a>');
  this.paypalNode = $( '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">' +
'<input type="hidden" name="cmd" value="_donations">' +
'<input type="hidden" name="business" value="doggieprotectiveservices@earthlink.net">' +
'<input type="hidden" name="lc" value="US">' +
'<input type="hidden" name="item_name" value="Doggie Protective Services">' +
'<input type="hidden" name="no_note" value="0">' +
'<input type="hidden" name="currency_code" value="USD">' +
'<input type="hidden" name="bn" value="PP-DonationsBF:btn_donate_LG.gif:NonHostedGuest">' +
'<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">' +
'<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">' +
'</form>'
);
  this.socialNode.append( this.twitterNode );
  this.socialNode.append( this.facebookNode );
  this.socialNode.append( this.instagramNode );
  this.socialNode.append( this.paypalNode );
  this.heroNode.append( this.logoNode );
  this.heroNode.append( this.titleNode );
  this.heroNode.append( this.socialNode);
  this.navNode = $( '<nav></nav>' );
  this.mastheadNode.append( this.heroNode );
  this.mastheadNode.append( this.navNode );
}

Nav.prototype.getRoute = function ( state ) {
  if (!state.children || !state.children.length) {
    return state.route;
  }
  return state.route + state.children[0].route;
};

Nav.prototype.buildNav = function () {
  var _this = this;
  this.states.forEach( function buildTopNav ( state ) {
    _this.navNode.append( _this.buildTopStateNode( state ) );
  } );
  return this.mastheadNode;
};

Nav.prototype.buildTopStateNode = function ( state ) {
  var _this = this;

  var node = $( '<a class="nav-link" href="' + _this.getRoute( state ) + '">' + state.name + '</a>' );
  if (_this.isStateActive( state )) {
    node.find( 'a' ).addClass( 'active' );
  }
  if (state.children && state.children.length) {
    var subNavNode = $( '<ul class="subnav"></ul>')
    state.children.forEach( function ( child ) {
      var childNode = _this.buildChildStateNode( state, child );
      subNavNode.append( childNode );
    } );
    node.append( subNavNode );
  }
  return node;
};

Nav.prototype.isStateActive = function ( parent, child ) {
  if (!this.getStatePaths().length) return false;
  var parentActive = !!(new RegExp( this.getParentPath() )).test( parent.route );
  if (!child) { return parentActive }
  return parentActive && new RegExp( this.getChildPath() ).test( child.route );;
};

Nav.prototype.getStatePaths = function () {
  return window.location.pathname.split( '/' ).filter( function ( part ) {
    return !!part;
  } )
};

Nav.prototype.getParentPath = function () {
  return this.getStatePaths()[0];
};

Nav.prototype.getChildPath = function () {
  return this.getStatePaths()[1];
};

Nav.prototype.buildChildStateNode = function ( parent, child ) {
  var _this = this;
  var node = $( '<li><a href="' + parent.route + child.route + '">' + child.name + '</a></li>' );
  if (_this.isStateActive( parent, child )) {
    node.find( 'a' ).addClass( 'active' );
  }
  return node;
};


/*
<div class="masthead">
    <div class="row hero">
      <div class="col-md-3 brand">BRAND</div>
      <div class="col-md-9 title"><h1>Doggie Protective Services</h1></div>
    </div>
    <div class="nav">
      <a href="" class="nav-link">Home</a>
      <a href="" class="nav-link">Adopt</a>
      <a href="" class="nav-link">Volunteer</a>
      <a href="" class="nav-link">Foster</a>
      <a href="" class="nav-link">Donate</a>
      <a href="" class="nav-link">Success Stories</a>
      <a href="" class="nav-link">Train</a>
      <a href="" class="nav-link">About Us</a>
    </div>
  </div>
    */