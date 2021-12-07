import React from "react";
import DpsNavTopRoute from "./DpsNavTopRoute";
import { DpsNavRoute } from "./model/DpsNavRoute";

class DpsNav extends React.Component {
  private static routes: DpsNavRoute[] = [
    {
      name: 'Home',
      route: '/'
    },
    {
      name: 'Adopt',
      route: '/adopt',
      children: [
        {
          name: 'Available Animals',
          route: '/available/'
        },
        {
          name: 'Application',
          route: '/dog-application/'
        },
        {
          name: 'Cat Application',
          route: '/cat-application/'
        },
        {
          name: 'Sticky Dogs',
          route: '/sticky/'
        },
        {
          name: 'Rehome',
          route: '/rehome/'
        },
      ]
    },
    {
      name: 'Volunteer',
      route: '/volunteer',
      children: [
        {
          name: 'FAQ',
          route: '/faq/'
        },
        {
          name: 'Meet Our Volunteers',
          route: '/meet-our-volunteers/'
        },
      ]
    },
    {
      name: 'Foster',
      route: '/foster',
      children: [
        {
          name: 'FAQ',
          route: '/faq/'
        },
        {
          name: 'Meet Our Fosters',
          route: '/meet-our-fosters/'
        }
      ]
    },
    {
      name: 'Donate',
      route: '/donate',
      children: [
        {
          name: 'Donate',
          route: '/donate/'
        },
        {
          name: 'Intensive Care',
          route: '/icu/'
        },
        // {
        // name: 'Calendar',
        // route: '/calendar/'
        // },
      ]
    },
    {
      name: 'Success Stories',
      route: '/success-stories/',
      children: []
    },
    // {
    //   name: 'Train',
    //   route: '/train/'
    // },
    {
      name: 'About',
      route: '/about',
      children: [
        {
          name: 'About Us',
          route: '/about-us/'
        },
        {
          name: 'Contact',
          route: '/contact/'
        },
        {
          name: 'FAQ',
          route: '/faq/'
        }
      ]
    }
  ];
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        {DpsNav.routes.map((route) => <DpsNavTopRoute route={route} />)}
      </div>
    );
  }
}

export default DpsNav;