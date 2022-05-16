import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { IDpsNavRoute } from '../model/IDpsRoutes';

export { NavLink };

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  path: PropTypes.string,
  exact: PropTypes.bool
};

NavLink.defaultProps = {
  exact: false
};

/**
 * Adds class "active" to links according to custom logic.
 * If exact is set to true, full route path must match specified href.
 * If false, full route path must start with specified path (or href if path is not specified)
 */
function NavLink({ href, exact, path, children, ...props }: { [key: string]: any }) {
  const { pathname } = useRouter();
  path = path || href;
  const isActive = exact ? pathname === href : pathname.startsWith('/' + path);

  if (isActive) {
    props.className += ' active';
  }

  return (
    <Link href={href}>
      <a {...props}>
        {children}
      </a>
    </Link>
  );
}

export function isHome(route: IDpsNavRoute): boolean {
  return route.path === '';
}