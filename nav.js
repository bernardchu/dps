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
    route: '',
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
  this.mastheadNode = $( '<a class="masthead" href="' + window.location.host + '"></a>' );
  this.logoNode = $( '<a href="" class="logo"><img src="./images/logo.png" alt="DPS Logo" /></a>' );
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
    var stateNode = $( '<li><a class="primary-link" href="' + _this.getRoute( state ) + '">' + state.name + '</a></li>' );
    if (state.children.length) {
      var subNavNode = $( '<ul class="subnav"></ul>')
      state.children.forEach( function ( child ) {
        var childNode = $( '<li><a href="' + state.route + child.route + '">' + child.name + '</a></li>' );
        subNavNode.append( childNode );
      } )
      stateNode.append( subNavNode );
    }
    _this.navNode.append( stateNode );
  } )
  return this.mastheadNode;
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