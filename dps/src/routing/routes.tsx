import { Outlet } from "react-router-dom";
import DpsAdoptApplication from "../adopt/DpsAdoptApplication";
import DpsAdoptAvailable from "../adopt/DpsAdoptAvailable";
import DpsCatApplication from "../adopt/DpsCatApplication";
import DpsRehome from "../adopt/DpsRehome";
import DpsStickyDogs from "../adopt/DpsStickyDogs";
import DpsHome from "../home/DpsHome";
import { IDpsNavRoute } from "../model/IDpsNavRoute";
import DpsVolunteerFaq from "../volunteer/DpsVolunteerFaq";
import DpsMeetVolunteers from "../volunteer/DpsMeetVolunteers";
import DpsFosterFaq from "../foster/DpsFosterFaq";
import DpsMeetFosters from "../foster/DpsMeetFosters";
import DpsDonate from "../donate/DpsDonate";
import DpsIcu from "../donate/DpsIcu";
import DpsSuccessStories from "../success-stories/DpsSuccessStories";
import DpsAboutUs from "../about/DpsAboutUs";
import DpsContact from "../about/DpsContact";
import DpsAboutFaq from "../about/DpsAboutFaq";

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
        element: <DpsCatApplication />
      },
      {
        name: 'Sticky Dogs',
        path: 'sticky',
        element: <DpsStickyDogs />
      },
      {
        name: 'Rehome',
        path: 'rehome',
        element: <DpsRehome />
      },
    ]
  },
  {
    name: 'Volunteer',
    path: 'volunteer',
    element: <Outlet />,
    children: [
      {
        name: 'FAQ',
        path: 'faq',
        element: <DpsVolunteerFaq />
      },
      {
        name: 'Meet Our Volunteers',
        path: 'meet-our-volunteers',
        element: <DpsMeetVolunteers />
      },
    ]
  },
  {
    name: 'Foster',
    path: 'foster',
    element: <Outlet />,
    children: [
      {
        name: 'FAQ',
        path: 'faq',
        element: <DpsFosterFaq />
      },
      {
        name: 'Meet Our Fosters',
        path: 'meet-our-fosters',
        element: <DpsMeetFosters />
      }
    ]
  },
  {
    name: 'Donate',
    path: 'donate',
    element: <Outlet />,
    children: [
      {
        name: 'Donate',
        path: 'donate',
        element: <DpsDonate />
      },
      {
        name: 'Intensive Care',
        path: 'icu',
        element: <DpsIcu />
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
    element: <DpsSuccessStories />
  },
  // {
  //   name: 'Train',
  //   route: '/train/'
  // },
  {
    name: 'About',
    path: 'about',
    element: <Outlet />,
    children: [
      {
        name: 'About Us',
        path: 'about-us',
        element: <DpsAboutUs />
      },
      {
        name: 'Contact',
        path: 'contact',
        element: <DpsContact />
      },
      {
        name: 'FAQ',
        path: 'faq',
        element: <DpsAboutFaq />
      }
    ]
  }
];

export default routes;