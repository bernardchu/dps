var states = [
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
        name: 'Sticky Dogs',
        route: '/sticky'
      },
      {
        name: 'Success Stories',
        route: '/happytails'
      },
    ]
  },
  { name: 'Volunteer',
    route: '/volunteer',
    children: []
  },
  { name: 'Foster',
    route: '/foster',
    children: [
      {
        name: 'Foster',
        route: '/foster'
      },
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
        name: 'Wishlist',
        route: '/wishlist'
      },
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
  { name: 'Resources',
    route: '/resources',
    children: []
  },
  { name: 'About',
    route: '/about',
    children: [
      {
        name: 'About us',
        route: '/about'
      },
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
} )

function Nav (states) {
  this.states = states;
  this.mastheadNode = $( '<div class="masthead"></div>' );
  this.logoNode = $( '<a href="" class="logo"><img src="' + window.location.origin + '/images/logo.png" alt="DPS Logo" /></a>' );
  this.logoNode.attr( 'href', window.location.origin );
  this.mastheadNode.append( this.logoNode );
  this.navNode = $( '<span class="nav"></span>' );
  this.mastheadNode.append( this.navNode );
}

Nav.prototype.getRoute = function ( state ) {
  if (!state.children.length) {
    return state.route;
  }
  return state.route + state.children[0].route;
}

Nav.prototype.buildNav = function () {
  var _this = this;
  this.states.forEach( function buildTopNav ( state ) {
    _this.navNode.append( _this.buildTopStateNode( state ) );
  } )
  return this.mastheadNode;
}

Nav.prototype.buildTopStateNode = function ( state ) {
  var _this = this;

  var node = $( '<li><a class="primary-link clickable" href="' + _this.getRoute( state ) + '">' + state.name + '</a></li>' );
    if (_this.isStateActive( state )) {
      node.find( 'a' ).addClass( 'active' );
    }
    if (state.children.length) {
      var subNavNode = $( '<ul class="subnav"></ul>')
      state.children.forEach( function ( child ) {
        var childNode = _this.buildChildStateNode( state, child );
        subNavNode.append( childNode );
      } )
      node.append( subNavNode );
    }
  return node;
}

Nav.prototype.isStateActive = function ( parent, child ) {
  if (!this.getStatePaths().length) return false;
  var parentActive = !!(new RegExp( this.getParentPath() )).test( parent.route );
  if (!child) { return parentActive }
  return parentActive && new RegExp( this.getChildPath() ).test( child.route );;
}

Nav.prototype.getStatePaths = function () {
  return window.location.pathname.split( '/' ).filter( function ( part ) {
    return !!part;
  } )
}

Nav.prototype.getParentPath = function () {
  return this.getStatePaths()[0];
}

Nav.prototype.getChildPath = function () {
  return this.getStatePaths()[1];
}
Nav.prototype.buildChildStateNode = function ( parent, child ) {
  var _this = this;
  var node = $( '<li><a href="' + parent.route + child.route + '">' + child.name + '</a></li>' );
  if (_this.isStateActive( parent, child )) {
    node.find( 'a' ).addClass( 'active' );
  }
  return node;
}


/*
<div class="masthead">
      <span class="logo">
        <img src="./images/logo.png" alt="DPS Logo" />
      </span>
      <span class="nav">
        <a href="" class="primary-link">Adopt</a>
        <a href="" class="primary-link">Volunteer</a>
        <a href="" class="primary-link">Foster</a>
        <a href="" class="primary-link">Resources</a>
        <a href="" class="primary-link">About</a>
        <a href="" class="primary-link">FAQ</a>
      </span>
    </div>
    */
