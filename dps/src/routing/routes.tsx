import { Outlet } from "react-router-dom";
import DpsAdoptApplication from "../adopt/DpsAdoptApplication";
import DpsAdoptAvailable from "../adopt/DpsAdoptAvailable";
import DpsHome from "../DpsHome";
import { IDpsNavRoute } from "../model/DpsNavRoute";

const routes: IDpsNavRoute[] = [
  {
    name: 'Home',
    path: '/',
    element: <DpsHome />
  },
  {
    name: 'Adopt',
    path: 'adopt',
    element: <Outlet />,
    children: [
      {
        name: 'Available Animals',
        path: 'available',
        element: <DpsAdoptAvailable />
      },
      {
        name: 'Application',
        path: 'dog-application',
        element: <DpsAdoptApplication />
      },
      {
        name: 'Cat Application',
        path: 'cat-application',
      },
      {
        name: 'Sticky Dogs',
        path: 'sticky'
      },
      {
        name: 'Rehome',
        path: 'rehome'
      },
    ]
  },
  {
    name: 'Volunteer',
    path: 'volunteer',
    children: [
      {
        name: 'FAQ',
        path: 'faq'
      },
      {
        name: 'Meet Our Volunteers',
        path: 'meet-our-volunteers'
      },
    ]
  },
  {
    name: 'Foster',
    path: 'foster',
    children: [
      {
        name: 'FAQ',
        path: 'faq'
      },
      {
        name: 'Meet Our Fosters',
        path: 'meet-our-fosters'
      }
    ]
  },
  {
    name: 'Donate',
    path: 'donate',
    children: [
      {
        name: 'Donate',
        path: 'donate'
      },
      {
        name: 'Intensive Care',
        path: 'icu'
      },
      // {
      // name: 'Calendar',
      // route: '/calendar/'
      // },
    ]
  },
  {
    name: 'Success Stories',
    path: 'success-stories',
  },
  // {
  //   name: 'Train',
  //   route: '/train/'
  // },
  {
    name: 'About',
    path: 'about',
    children: [
      {
        name: 'About Us',
        path: 'about-us'
      },
      {
        name: 'Contact',
        path: 'contact'
      },
      {
        name: 'FAQ',
        path: 'faq'
      }
    ]
  }
];

export default routes;