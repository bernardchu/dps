import React, { useState } from 'react';
import { NavLink } from '../routing/NavLink';
import { IDpsNavRoute } from '../model/IDpsRoutes';

export interface IDpsHamburgerChildMenuProps {
  parent: IDpsNavRoute;
  hamburgerCloser: Function;
}

export default function DpsHamburgerChildMenu(props: IDpsHamburgerChildMenuProps) {
  const [dropdownOpen, setDropdown] = useState(false);
  const parent = props.parent;
  const hamburgerCloser = props.hamburgerCloser;

  const closeMenus = () => {
    setDropdown(false);
    hamburgerCloser();
  };

  return (
    <>
      <span aria-expanded={dropdownOpen ? "true" : "false"}
        className="hand bm-item"
        onClick={() => setDropdown((prev) => !prev)}>
        {parent.name}
      </span>
      <ul className={`bm-child-list dropdown-${dropdownOpen ? 'show' : 'hide'}`}>
        {parent.children!.map((child: IDpsNavRoute) => {
          return <li key={child.path} className="bm-child-list-item">
            <NavLink href={`${parent.path}/${child.path}`} onClick={() => { closeMenus() }}>{child.name}</NavLink>
          </li>
        })}
      </ul>
    </>
  );
}
