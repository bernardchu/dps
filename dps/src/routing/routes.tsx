import { Outlet } from "react-router-dom";
import DpsAdoptApplication from "../adopt/dog-application/DpsAdoptApplication";
import DpsAdoptAvailable from "../adopt/available/DpsAdoptAvailable";
import DpsCatApplication from "../adopt/cat-application/DpsCatApplication";
import DpsRehome from "../adopt/DpsRehome";
import DpsStickyDogs from "../adopt/DpsStickyDogs";
import DpsHome from "../home/DpsHome";
import { IDpsNavRoute, IDpsRoute } from "../model/IDpsRoutes";
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
import DpsPetDetail from "../adopt/pet-detail/DpsPetDetail";
import DpsRedirect from "./DpsRedirect";

function createNavRoutes(routes: { [key: string]: IDpsRoute }): IDpsNavRoute[] {
  return Object.keys(routes)
    .map(key => routes[key])
    .filter(route => route.inNav)
    .sort((a, b) => a.navOrder! - b.navOrder!) // ! asserts non-null/undefined
    .map((route) => {
      const transformed: IDpsNavRoute = {
        name: route.name,
        element: route.element,
        path: route.path,
      };
      if (route.children && Object.keys(route.children).length > 0) {
        transformed.children = createNavRoutes(route.children)
      }
      return transformed;
    });
}

export const routes: { [key: string]: IDpsRoute } = {
  home: {
    name: 'Home',
    path: '/',
    element: <DpsHome />,
    inNav: true,
    navOrder: 0
  },
  adopt: {
    name: 'Adopt',
    path: 'adopt',
    element: <Outlet />,
    inNav: true,
    navOrder: 1,
    children: {
      available: {
        name: 'Available Animals',
        path: 'available',
        element: <DpsAdoptAvailable />,
        inNav: true,
        navOrder: 0
      },
      dogApp: {
        name: 'Application',
        path: 'dog-application',
        element: <DpsAdoptApplication />,
        inNav: true,
        navOrder: 1
      },
      catApp: {
        name: 'Cat Application',
        path: 'cat-application',
        element: <DpsCatApplication />,
        inNav: true,
        navOrder: 2
      },
      sticky: {
        name: 'Sticky Dogs',
        path: 'sticky',
        element: <DpsStickyDogs />,
        inNav: true,
        navOrder: 3
      },
      rehome: {
        name: 'Rehome',
        path: 'rehome',
        element: <DpsRedirect to="https://docs.google.com/forms/d/e/1FAIpQLScUhpAEbOvRSPjF5cMC_owfYjx8-nyADQMViFX4omFZHHYlgg/viewform" />,
        inNav: true,
        navOrder: 4
      },
      petDetail: {
        name: 'Pet Details',
        path: 'pet-detail',
        element: <DpsPetDetail />,
        inNav: false
      },
      application: {
        name: 'Application redirect',
        path: 'application',
        element: <DpsRedirect to="https://docs.google.com/forms/d/e/1FAIpQLSf3PdbO6nBVx03MbUBRp-mr-j0u46eVkVD1_m8mTeI8hR98tg/viewform" />,
        inNav: false
      },
      catApplication: {
        name: 'Cat application redirect',
        path: 'catapp',
        element: <DpsRedirect to="https://docs.google.com/forms/d/e/1FAIpQLSfLhSWqJWHMrW8cYu5Mf6yruf6rXPWG9iPNmibouDUFFVlZ-A/viewform" />,
        inNav: false
      }
    }
  },
  volunteer: {
    name: 'Volunteer',
    path: 'volunteer',
    element: <Outlet />,
    inNav: true,
    navOrder: 2,
    children: {
      faq: {
        name: 'FAQ',
        path: 'faq',
        element: <DpsVolunteerFaq />,
        inNav: true,
        navOrder: 0
      },
      meet: {
        name: 'Meet Our Volunteers',
        path: 'meet-our-volunteers',
        element: <DpsMeetVolunteers />,
        inNav: true,
        navOrder: 0
      },
    }
  },
  foster: {
    name: 'Foster',
    path: 'foster',
    element: <Outlet />,
    inNav: true,
    navOrder: 3,
    children: {
      faq: {
        name: 'FAQ',
        path: 'faq',
        element: <DpsFosterFaq />,
        inNav: true,
        navOrder: 0
      },
      meet: {
        name: 'Meet Our Fosters',
        path: 'meet-our-fosters',
        element: <DpsMeetFosters />,
        inNav: true,
        navOrder: 1
      }
    }
  },
  donate: {
    name: 'Donate',
    path: 'donate',
    element: <Outlet />,
    inNav: true,
    navOrder: 4,
    children: {
      donate: {
        name: 'Donate',
        path: 'donate',
        element: <DpsDonate />,
        inNav: true,
        navOrder: 0
      },
      icu: {
        name: 'Intensive Care',
        path: 'icu',
        element: <DpsIcu />,
        inNav: true,
        navOrder: 1
      },
      // calendar: {
      // name: 'Calendar',
      // route: '/calendar/'
      // },
    }
  },
  successStories: {
    name: 'Success Stories',
    path: 'success-stories',
    element: <DpsSuccessStories />,
    inNav: true,
    navOrder: 5
  },
  // train: {
  //   name: 'Train',
  //   route: '/train/'
  // },
  about: {
    name: 'About',
    path: 'about',
    element: <Outlet />,
    inNav: true,
    navOrder: 6,
    children: {
      aboutUs: {
        name: 'About Us',
        path: 'about-us',
        element: <DpsAboutUs />,
        inNav: true,
        navOrder: 0
      },
      contact: {
        name: 'Contact',
        path: 'contact',
        element: <DpsContact />,
        inNav: true,
        navOrder: 1
      },
      faq: {
        name: 'FAQ',
        path: 'faq',
        element: <DpsAboutFaq />,
        inNav: true,
        navOrder: 2
      }
    }
  }
};

const navRoutes = createNavRoutes(routes);
export default navRoutes;