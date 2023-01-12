import { Outlet } from "react-router-dom";
import DpsAdoptApplication from "../adopt/dog-application/DpsAdoptApplication";
import DpsAdoptAvailable from "../adopt/available/DpsAdoptAvailable";
import DpsCatApplication from "../adopt/cat-application/DpsCatApplication";
import DpsStickyDogs from "../adopt/sticky/DpsStickyDogs";
import DpsHome from "../home/DpsHome";
import { IDpsNavRoute, IDpsRoute } from "../model/IDpsRoutes";
import DpsVolunteerFaq from "../volunteer/DpsVolunteerFaq";
import DpsMeetVolunteers from "../volunteer/meet/DpsMeetVolunteers";
import DpsFosterFaq from "../foster/DpsFosterFaq";
import DpsMeetFosters from "../foster/meet/DpsMeetFosters";
import DpsDonate from "../donate/donate/DpsDonate";
import DpsIcu from "../donate/icu/DpsIcu";
import DpsSuccessStories from "../success-stories/DpsSuccessStories";
import DpsAboutUs from "../about/about-us/DpsAboutUs";
import DpsContact from "../about/contact/DpsContact";
import DpsAboutFaq from "../about/DpsAboutFaq";
import DpsPetDetail from "../adopt/pet-detail/DpsPetDetail";
import DpsRedirect from "./DpsRedirect";
import DpsSuccessStory from "../success-stories/success-story/DpsSuccessStory";
import DpsSponsor from "../donate/sponsor/DpsSponsor";
import DpsEmployerMatching from "../donate/employer-matching/DpsEmployerMatching";
import DpsInHonorOf from "../donate/in-honor-of/DpsInHonorOf";
import DpsPrint from "../print/DpsPrint";
import DpsLittermateSyndrome from "../adopt/littermate-syndrome/DpsLittermateSyndrome";

const rehomeLink = "https://docs.google.com/forms/d/e/1FAIpQLScUhpAEbOvRSPjF5cMC_owfYjx8-nyADQMViFX4omFZHHYlgg/viewform";

export function hasSubnavChildren(route: IDpsRoute): boolean {
  if (!route.children) { return false }
  return Object.keys(route.children)
    .map(key => route.children![key])
    .filter(child => child.inNav).length > 0;
}

export function convertToNbsp(name: string): string {
  return name.replace(/\s/g, '&nbsp;');
}

/**
 * Not all routes belong in the nav and its submenus. Also, it is easier to iterate through child
 * routes if they are in an ordered collection like an array. This solves both of these problems.
 * @param routes (see below) All routes in the application
 * @returns Routes that should be part of the navbar and its submenus
 */
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
      if (hasSubnavChildren(route)) {
        transformed.children = createNavRoutes(route.children!)
      }
      return transformed;
    });
}

/**
 * This is a collection of all routes in the application. They are structured somewhat awkwardly with children
 * pointing to key-value pairs instead of an array in order to make the paths reusable when referenced elsewhere
 * in the application, e.g. in Links.
 * When constructing the nav, it would make more sense to encode the child routes in arrays so that order is preserved,
 * so in order to avoid duplicating information, we encode order explicitly on the route objects so that they can be
 * sorted later when constructing the navbar.
 * Some legacy routes are included here but commented out. It's unlikely they will return.
 */
export const routes: { [key: string]: IDpsRoute } = {
  home: {
    name: 'Home',
    path: '/',
    element: <DpsHome />,
    inNav: true,
    navOrder: 0
  },
  rehome: {
    name: 'Rehome',
    path: 'rehome',
    element: <DpsRedirect to={rehomeLink} />,
    inNav: false,
    navOrder: 0
  },
  print: {
    name: 'Print',
    path: 'print',
    element: <DpsPrint />,
    inNav: false,
    hideDonate: true
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
        element: <DpsRedirect to={rehomeLink} />,
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
      },
      littermateSyndrome: {
        name: 'Littermate Syndrome',
        path: 'littermate-syndrome',
        element: <DpsLittermateSyndrome />,
        inNav: true,
        navOrder: 5
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
      fosterApplication: {
        name: 'Foster Application',
        path: 'application',
        element: <DpsRedirect to="https://docs.google.com/forms/d/1ydt01XnADgo9RsuC_m3gDFTTBS4ubaBqJ_OdXxqFkIY/viewform" />,
        inNav: true,
        navOrder: 1
      },
      meet: {
        name: 'Meet Our Fosters',
        path: 'meet-our-fosters',
        element: <DpsMeetFosters />,
        inNav: true,
        navOrder: 2
      }
    }
  },
  donate: {
    name: 'Donate',
    path: 'donate',
    element: <Outlet />,
    inNav: true,
    navOrder: 4,
    hideDonate: true,
    children: {
      donate: {
        name: 'Donate',
        path: 'donate',
        element: <DpsDonate />,
        inNav: true,
        navOrder: 0
      },
      icu: {
        name: 'Medical Dogs',
        path: 'medical-dogs',
        element: <DpsIcu />,
        inNav: true,
        navOrder: 1
      },
      sponsor: {
        name: 'Sponsor a Dog',
        path: 'sponsor',
        element: <DpsSponsor />,
        inNav: true,
        navOrder: 2
      },
      employerMatching: {
        name: 'Employer Matching',
        path: 'employer-matching',
        element: <DpsEmployerMatching />,
        inNav: true,
        navOrder: 3
      },
      inHonorOf: {
        name: 'In Honor Of',
        path: 'in-honor-of',
        element: <DpsInHonorOf />,
        inNav: true,
        navOrder: 4
      },
    }
  },
  successStories: {
    name: 'Success Stories',
    path: 'success-stories',
    element: <DpsSuccessStories />,
    inNav: true,
    navOrder: 5,
    children: {
      successStory: {
        name: 'Success Story',
        path: 'success-story',
        element: <DpsSuccessStory />,
        inNav: false
      }
    }
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
      },
      recap: {
        name: '2022 Recap',
        path: '2022-recap',
        element: <DpsRedirect to="https://dpsrescue.imgix.net/about/2022-recap.pdf" />,
        inNav: true,
        navOrder: 3
      }
    }
  }
};

const navRoutes = createNavRoutes(routes);
export default navRoutes;
