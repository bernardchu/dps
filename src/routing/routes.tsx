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
import React from "react";

export const rehomeLink = "https://docs.google.com/forms/d/e/1FAIpQLScUhpAEbOvRSPjF5cMC_owfYjx8-nyADQMViFX4omFZHHYlgg/viewform";

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
    path: '',
    inNav: true,
    navOrder: 0
  },
  rehome: {
    name: 'Rehome',
    path: 'rehome',
    inNav: false,
    navOrder: 0
  },
  print: {
    name: 'Print',
    path: 'print',
    inNav: false,
    hideDonate: true
  },
  adopt: {
    name: 'Adopt',
    path: 'adopt',
    inNav: true,
    navOrder: 1,
    children: {
      available: {
        name: 'Available Animals',
        path: 'available',
        inNav: true,
        navOrder: 0
      },
      dogApp: {
        name: 'Application',
        path: 'dog-application',
        inNav: true,
        navOrder: 1
      },
      catApp: {
        name: 'Cat Application',
        path: 'cat-application',
        inNav: true,
        navOrder: 2
      },
      sticky: {
        name: 'Sticky Dogs',
        path: 'sticky',
        inNav: true,
        navOrder: 3
      },
      rehome: {
        name: 'Rehome',
        path: 'rehome',
        inNav: true,
        navOrder: 4
      },
      petDetail: {
        name: 'Pet Details',
        path: 'pet-detail',
        inNav: false
      },
      application: {
        name: 'Application redirect',
        path: 'application',
        inNav: false
      },
      catApplication: {
        name: 'Cat application redirect',
        path: 'catapp',
        inNav: false
      }
    }
  },
  volunteer: {
    name: 'Volunteer',
    path: 'volunteer',
    inNav: true,
    navOrder: 2,
    children: {
      faq: {
        name: 'FAQ',
        path: 'faq',
        inNav: true,
        navOrder: 0
      },
      meet: {
        name: 'Meet Our Volunteers',
        path: 'meet-our-volunteers',
        inNav: true,
        navOrder: 0
      },
    }
  },
  foster: {
    name: 'Foster',
    path: 'foster',
    inNav: true,
    navOrder: 3,
    children: {
      faq: {
        name: 'FAQ',
        path: 'faq',
        inNav: true,
        navOrder: 0
      },
      meet: {
        name: 'Meet Our Fosters',
        path: 'meet-our-fosters',
        inNav: true,
        navOrder: 1
      }
    }
  },
  donate: {
    name: 'Donate',
    path: 'donate',
    inNav: true,
    navOrder: 4,
    hideDonate: true,
    children: {
      donate: {
        name: 'Donate',
        path: 'donate',
        inNav: true,
        navOrder: 0
      },
      icu: {
        name: 'Medical Dogs',
        path: 'medical-dogs',
        inNav: true,
        navOrder: 1
      },
      sponsor: {
        name: 'Sponsor a Dog',
        path: 'sponsor',
        inNav: true,
        navOrder: 2
      },
      employerMatching: {
        name: 'Employer Matching',
        path: 'employer-matching',
        inNav: true,
        navOrder: 3
      },
      inHonorOf: {
        name: 'In Honor Of',
        path: 'in-honor-of',
        inNav: true,
        navOrder: 4
      },
    }
  },
  successStories: {
    name: 'Success Stories',
    path: 'success-stories',
    inNav: true,
    navOrder: 5,
    children: {
      successStory: {
        name: 'Success Story',
        path: 'success-story',
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
    inNav: true,
    navOrder: 6,
    children: {
      aboutUs: {
        name: 'About Us',
        path: 'about-us',
        inNav: true,
        navOrder: 0
      },
      contact: {
        name: 'Contact',
        path: 'contact',
        inNav: true,
        navOrder: 1
      },
      faq: {
        name: 'FAQ',
        path: 'faq',
        inNav: true,
        navOrder: 2
      }
    }
  }
};

const navRoutes = createNavRoutes(routes);
export default navRoutes;